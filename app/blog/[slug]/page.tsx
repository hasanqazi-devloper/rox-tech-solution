import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/app/data/blogsData";
import {
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle2,
  MessageCircle,
  Wrench,
  MapPin,
  ArrowRight,
  HelpCircle
} from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found | ROX Tech Solutions Cashel" };
  }

  return {
    title: `${post.title} | ROX Tech Solutions Cashel`,
    description: post.excerpt
  };
}

export default async function SingleBlogPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "ROX Tech Solutions Cashel"
    },
    publisher: {
      "@type": "Organization",
      name: "ROX Tech Solutions",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cashel",
        addressRegion: "Co. Tipperary",
        addressCountry: "IE"
      }
    }
  };

  return (
    <main className="w-full bg-[#F1F5F9] min-h-screen text-[#0F172A] font-sans pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#F97316] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Guides</span>
          </Link>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-[#F97316] border border-orange-200">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-[1280px] mx-auto px-4 sm:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Left Column */}
          <div className="lg:col-span-8 bg-white border border-slate-300 rounded-3xl overflow-hidden shadow-sm">
            {/* Hero Image */}
            <div className="relative w-full h-64 sm:h-96 bg-slate-900">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-10 space-y-8">
              {/* Meta & Title */}
              <div className="space-y-4 border-b border-slate-200 pb-6">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#F97316]" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#F97316]" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-600">
                    <MapPin className="w-4 h-4" />
                    Cashel, Co. Tipperary
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] leading-tight">
                  {post.title}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Dynamic Content Sections */}
              <div className="space-y-8">
                {post.sections.map((section, idx) => (
                  <section key={idx} className="space-y-3">
                    <h2 className="text-lg sm:text-xl font-black text-[#0F172A]">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-xs sm:text-sm text-slate-700 leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-2 pt-2">
                        {section.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* FAQ Section */}
              {post.faqs.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                  <h3 className="text-base sm:text-lg font-black text-[#0F172A] flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#F97316]" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-4">
                    {post.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                          {faq.question}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sticky Conversion Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-[#0F172A] text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-[#F97316]" />
              </div>

              <h3 className="text-lg font-black leading-snug">
                Need Instant Help in <span className="text-[#F97316]">Cashel?</span>
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Message our Cashel technicians on WhatsApp for same-day repair quotes, refurbished phone stock, or 18+ vape inquiries.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/353896091839?text=Hi%20ROX%20Tech%20Cashel,%20I%20need%20help%20regarding:%20${encodeURIComponent(
                    post.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#1ea950] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/repairs"
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow-md"
                >
                  <span>Book Express Repair</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Store Locations Card */}
            <div className="bg-white border border-slate-300 rounded-3xl p-6 shadow-sm space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                Visit Our Cashel Stores
              </h4>
              <div className="space-y-2 text-xs text-slate-600">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0F172A]">Branch 1:</strong> Cashel Town Shopping Centre, Cashel, Co. Tipperary
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0F172A]">Branch 2:</strong> Bank Place, Cashel, Co. Tipperary
                  </span>
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Guides Section */}
        <section className="pt-12 space-y-6">
          <h2 className="text-xl font-black text-[#0F172A]">More Local Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
              >
                <div className="relative w-full h-44 bg-slate-100">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-black text-[#0F172A] line-clamp-2 group-hover:text-[#F97316] transition-colors">
                    {rel.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}