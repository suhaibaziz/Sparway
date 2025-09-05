// app/faq/page.jsx
import FAQClient from "./FAQClient";
import { faqCategories } from "../../constants/faqs";

export const metadata = {
  title: "FAQ | Sparway Marketing",
  description:
    "Häufige Fragen zu Leistungen, Preisen, Technik, Tracking & Support. Kurz, klar, modern – Sparway Marketing.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-primary-black">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">FAQ</h1>
          <p className="mt-2 text-gray-300 max-w-2xl">
            Antworten auf die häufigsten Fragen zu Zusammenarbeit, Technik, Preisen und Support.
          </p>
        </header>

        <FAQClient initialCategories={faqCategories} />
      </section>
    </main>
  );
}
