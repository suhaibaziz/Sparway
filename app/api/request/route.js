// app/api/request/route.js (أو route.ts)
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/request", method: "GET" });
}

export async function POST(req) {
  try {
    const data = await req.json();

    // basic validation
    if (!data?.service) {
        return NextResponse.json({ ok: false, error: "Missing service" }, { status: 400 });
      }
  
      // اجعل paket اختياري مع fallback:
      const paket = data?.paket || "standard";
      const paketTitle = data?.paketTitle || "Allgemeine Anfrage"

    const contact = data?.contact || {};
    const name = contact.name?.trim();
    const email = contact.email?.trim();
    const phone = contact.phone?.trim();
    const details = contact.details?.trim();

    // optional: enforce name/email if you want server-side guard too
    if (!name || !email) {
      return NextResponse.json({ ok: false, error: "Kontakt: Name und E-Mail sind erforderlich." }, { status: 400 });
    }

    // dynamic import for nodemailer
    const nodemailer = (await import("nodemailer")).default;

    const subject = `Neue Anfrage: ${data.service} → ${data.paket}`;

    const html = `
    ${Array.isArray(data.selection) && data.selection.length
        ? `<h3>Ausgewählte Services</h3>
           <ul>${data.selection.map(s => `<li>${escapeHtml(s.category)} – ${escapeHtml(s.item)}</li>`).join('')}</ul>`
        : ''
      }
      <h2>Neue Service-Anfrage</h2>
      <p><b>Service:</b> ${escapeHtml(data.service)}</p>
      <p><b>Paket:</b> ${escapeHtml(data.paket)}</p>
      ${data.paketTitle ? `<p><b>Paket-Name:</b> ${escapeHtml(data.paketTitle)}</p>` : ""}
      <hr/>
      <h3>Kontakt</h3>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>E-Mail:</b> ${escapeHtml(email)}</p>
      ${phone ? `<p><b>Telefon:</b> ${escapeHtml(phone)}</p>` : ""}
      ${details ? `<p><b>Details:</b><br/>${escapeHtml(details).replace(/\n/g, "<br/>")}</p>` : ""}
      <hr/>
      ${data.note ? `<p><b>Notiz:</b> ${escapeHtml(data.note)}</p>` : ""}
      <p><b>Seite:</b> ${escapeHtml(data.page || "-")}</p>
      <p><b>Uhrzeit:</b> ${new Date().toLocaleString()}</p>
      <p><b>User-Agent:</b> ${escapeHtml(req.headers.get("user-agent") || "-")}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email, // مهم: يسهل الردّ على العميل
      subject,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false, error: "Email failed" }, { status: 500 });
  }
}

/** بسيط لتجنب إدخال HTML */
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
