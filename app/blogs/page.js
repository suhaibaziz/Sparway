// app/blog/page.jsx
import { blogPosts } from "../../constants/blogPosts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Sparway Marketing",
  description:
    "Insights zu SEO, Webdesign, Social & Performance-Ads. Taktiken, Frameworks und Praxisbeispiele von Sparway Marketing.",
};

export default function BlogPage() {
  // we pass data to a client component for interactive filters/search
  return (
    <main className="min-h-screen bg-primary-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Sparway Blog
          </h1>
          <p className="mt-2 text-white/70 max-w-2xl">
            Frische Playbooks zu SEO, Webdesign, Social & Performance – kurz, praxisnah,
            direkt umsetzbar.
          </p>
        </header>

        <BlogClient initialPosts={blogPosts} />
      </div>
    </main>
  );
}
