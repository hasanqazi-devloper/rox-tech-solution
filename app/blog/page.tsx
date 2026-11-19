"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/app/data/blogsData";
import {
  MapPin,
  Search,
  Wrench,
  Lightbulb,
  Home,
  Flame,
  ChevronRight,
  CircleDot,
  LayoutGrid,
  Star,
  Clock,
  Calendar,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const CATEGORIES = [
  { label: "All Guides", value: "All", icon: LayoutGrid },
  { label: "Phone Repairs", value: "Phone Repairs", icon: Wrench },
  { label: "Buying Tips", value: "Buying Tips", icon: Lightbulb },
  { label: "Vape Hub 18+", value: "Vape Hub 18+", icon: Flame }
];

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredPost = useMemo(
    () => BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0],
    []
  );

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      if (activeCategory === "All" && !searchQuery.trim() && post.id === featuredPost.id) {
        return false;
      }
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, featuredPost.id]);

  const getCategoryIcon = (category: string) => {
    if (category === "Phone Repairs") return <Wrench className="w-3.5 h-3.5" />;
    if (category === "Buying Tips") return <Lightbulb className="w-3.5 h-3.5" />;
    return <Flame className="w-3.5 h-3.5" />;
  };

  return (
    <main className="w-full bg-[#F1F5F9] min-h-screen text-[#0F172A] font-sans">
      {/* ================= 1. HERO HEADER SECTION ================= */}
    {/* ================= 1. HERO HEADER SECTION (MATCHING STORE HERO STYLE) ================= */}
      <section className="relative w-full bg-[#C0C0C0] overflow-hidden border-b border-gray-300/80">
        
        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:flex relative min-h-[480px] xl:min-h-[520px] items-center">
          <div className="absolute inset-0 w-full h-full flex justify-end">
            <div className="relative w-full lg:w-[65%] h-full">
              <Image
                src="/blog-hero.png"
                alt="Tech Repair Guides & Vape Insights - ROX Tech Solutions Cashel"
                fill
                priority
                sizes="65vw"
                className="object-cover object-center brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0] via-[#C0C0C0]/80 lg:via-[#C0C0C0]/30 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 py-14">
            <div className="max-w-2xl space-y-5">
              {/* Breadcrumb Pill */}
              <nav className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-300 shadow-xs">
                <Home className="w-3.5 h-3.5 text-[#F97316]" />
                <Link href="/" className="hover:text-[#F97316] transition">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#0F172A] font-black">Blog &amp; Guides</span>
              </nav>

              {/* Location Status Pill */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
                  <CircleDot className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
                  <span>Cashel, Ireland • Tech &amp; Vape Hub</span>
                </div>
              </div>

              {/* Main H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-[1.15] tracking-tight">
                Tech Repair Guides <br /> &amp; Vape <span className="text-[#F97316]">Insights</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed max-w-lg">
                Expert tips, local updates and honest advice from ROX Tech Solutions in Cashel, Co. Tipperary.
              </p>

              {/* Integrated Search Bar */}
              <div className="pt-1 max-w-xl">
                <div className="flex items-center bg-white border border-gray-300 rounded-full p-1.5 shadow-md focus-within:border-[#F97316] transition">
                  <div className="pl-4 pr-2 text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search repair guides, iPhone tips, vapes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search blog articles"
                    className="w-full bg-transparent text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 outline-none py-2"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-slate-400 hover:text-slate-600 px-2 font-semibold cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    type="button"
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2.5 rounded-full text-xs font-bold transition shadow-xs shrink-0 cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="block lg:hidden px-5 py-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F172A] shadow-xs">
              <CircleDot className="w-3.5 h-3.5 text-[#22C55E] fill-[#22C55E]" />
              <span>Cashel, Ireland • Tech &amp; Vape Hub</span>
            </div>

            <h1 className="text-3xl font-black text-[#0F172A] leading-tight tracking-tight">
              Tech Repair Guides &amp; Vape <span className="text-[#F97316]">Insights</span>
            </h1>

            <p className="text-xs text-gray-800 font-medium leading-relaxed">
              Expert tips, local updates and honest advice from ROX Tech Solutions in Cashel, Co. Tipperary.
            </p>

            {/* Mobile Search Bar */}
            <div className="flex items-center bg-white border border-gray-300 rounded-full p-1 shadow-sm">
              <div className="pl-3.5 pr-2 text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search guides, iPhone tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog articles"
                className="w-full bg-transparent text-xs text-[#0F172A] placeholder:text-slate-400 outline-none py-2"
              />
              <button
                type="button"
                className="bg-[#F97316] text-white px-5 py-2 rounded-full text-xs font-bold shrink-0"
              >
                Search
              </button>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300/80 aspect-[16/9] bg-white relative">
            <Image
              src="/blog-hero.png"
              alt="Tech Repair Guides & Vape Insights"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* ================= BOTTOM CATEGORY FILTER PATTI (WHITE BAR) ================= */}
        <div className="w-full bg-white border-t border-gray-300/80 shadow-sm py-4 px-6 sm:px-10 lg:px-16">
          <div className="max-w-[1680px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                      isActive
                        ? "bg-[#F97316] text-white border-[#F97316] shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-300 hover:border-[#F97316] hover:text-[#F97316]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-[#0F172A]">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Local Guides by ROX Tech Cashel</span>
            </div>
          </div>
        </div>

      </section>

      {/* ================= 2. FEATURED EDITOR'S PICK BANNER ================= */}
      {activeCategory === "All" && !searchQuery.trim() && (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pt-6">
          <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12">
            {/* Left Image */}
            <div className="lg:col-span-7 relative min-h-[240px] sm:min-h-[320px] bg-slate-900">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#F97316] text-white px-3.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-md">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span>Editor&apos;s Pick</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                <span className="inline-flex items-center gap-1.5 text-[#0F172A]">
                  <Wrench className="w-3.5 h-3.5 text-[#F97316]" />
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#0F172A] leading-snug tracking-tight">
                {featuredPost.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-full text-xs font-bold transition shadow-md"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= 3. BLOG ARTICLES 3-COLUMN GRID ================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 py-8">
        {filteredPosts.length === 0 ? (
          <div className="bg-white border border-slate-300 rounded-2xl p-10 text-center space-y-3">
            <h3 className="text-lg font-black text-[#0F172A]">No matching guides found</h3>
            <p className="text-xs text-slate-500">
              Try searching a different keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="bg-[#F97316] text-white px-5 py-2.5 rounded-full text-xs font-bold cursor-pointer"
            >
              Show All Guides
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#F97316]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block relative w-full h-52 bg-slate-100 overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                      {getCategoryIcon(post.category)}
                      <span>{post.category}</span>
                    </span>
                  </Link>

                  {/* Card Body */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {post.date}
                      </span>
                      <span>|</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-base sm:text-lg font-black text-[#0F172A] leading-snug line-clamp-2 group-hover:text-[#F97316] transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-[#EA580C] transition"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/353896091839?text=Hi%20ROX%20Tech%20Cashel,%20I%20just%20read%20your%20guide:%20${encodeURIComponent(
                      post.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ask on WhatsApp"
                    className="w-8 h-8 rounded-full bg-[#22C55E] hover:bg-[#1ea950] text-white flex items-center justify-center shadow-xs transition"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ================= 4. BOTTOM LOCAL CONVERSION CTA BANNER ================= */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 pb-12">
        <div className="bg-[#0F172A] rounded-2xl p-6 sm:p-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#F97316]/15 border border-[#F97316]/30 flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-[#F97316]" />
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight">
              Need a Fast Repair Quote or Stock Check in{" "}
              <span className="text-[#F97316]">Cashel?</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 z-10">
            <Link
              href="/repairs"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2 transition shadow-md"
            >
              <span>Book a Repair</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/353896091839"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22C55E] hover:bg-[#1ea950] text-white px-6 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2 transition shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}