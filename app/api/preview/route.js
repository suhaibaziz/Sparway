// app/api/preview/route.js
export const dynamic = "force-dynamic"; // عطّل الكاش دايمًا لهالمسار

// يلتقط قيمة content لميتا معيّنة بغض النظر عن ترتيب الخصائص (property/name أو content أولاً)
function pick(html, key) {
  // property/name ثم content
  const r1 = new RegExp(
    `<meta\\s[^>]*(?:property|name)=["']${key}["'][^>]*content=["']([^"']+)["'][^>]*>`,
    "i"
  );
  // content ثم property/name
  const r2 = new RegExp(
    `<meta\\s[^>]*content=["']([^"']+)["'][^>]*(?:property|name)=["']${key}["'][^>]*>`,
    "i"
  );
  const m1 = html.match(r1);
  if (m1) return m1[1];
  const m2 = html.match(r2);
  if (m2) return m2[1];
  return "";
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    let url = searchParams.get("url");

    if (!url) {
      return new Response(JSON.stringify({ error: "missing url" }), { status: 400 });
    }

    // تحقّق من صحة الرابط
    try {
      const u = new URL(url);
      if (!/^https?:$/.test(u.protocol)) {
        return new Response(JSON.stringify({ error: "unsupported protocol" }), { status: 400 });
      }
      url = u.toString();
    } catch {
      return new Response(JSON.stringify({ error: "invalid url" }), { status: 400 });
    }

    // جب الصفحة بدون كاش
    const res = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0" },
      cache: "no-store",
      // next: { revalidate: 0 }, // بديل للـ dynamic لو حابب
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "upstream not ok", status: res.status }),
        { status: 502 }
      );
    }

    const html = await res.text();

    // استخرج البيانات
    let title =
      pick(html, "og:title") ||
      pick(html, "twitter:title") ||
      (html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "");

    let description =
      pick(html, "og:description") ||
      pick(html, "twitter:description") ||
      "";

    let image = pick(html, "og:image") || pick(html, "twitter:image") || "";
    const siteName = pick(html, "og:site_name") || "";

    // لو الصورة نسبية، خلّيها مطلقة
    if (image && !/^https?:\/\//i.test(image)) {
      try {
        image = new URL(image, url).toString();
      } catch {
        // اتركها فاضية لو ما قدر يكوّنها
        image = "";
      }
    }

    // نظّف العناوين من مسافات/أسطر
    title = title?.trim();
    description = description?.replace(/\s+/g, " ").trim();

    return Response.json({ url, title, description, image, siteName });
  } catch (e) {
    return new Response(JSON.stringify({ error: "fetch failed" }), { status: 500 });
  }
}
