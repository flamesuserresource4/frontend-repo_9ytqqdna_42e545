import { Newspaper } from "lucide-react";

const sampleNews = [
  {
    id: 1,
    title: "Sangkula Clan Gathering 2025 Announced",
    date: "Oct 10, 2025",
    excerpt:
      "The annual gathering will be held in Zamboanga. Registration for delegates opens next week.",
    tag: "Events",
  },
  {
    id: 2,
    title: "Digital Archive of the Naqib Sangkula Bloodline",
    date: "Sep 28, 2025",
    excerpt:
      "We are launching a project to preserve documents, photos, and oral histories of the clan.",
    tag: "Announcement",
  },
  {
    id: 3,
    title: "Scholarship Grants for Youth Members",
    date: "Aug 14, 2025",
    excerpt:
      "Applications are now open for educational support to eligible students within the clan.",
    tag: "Opportunities",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-md bg-emerald-100 text-emerald-700">
            <Newspaper size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Clan News</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleNews.map((item) => (
            <article
              key={item.id}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  {item.tag}
                </span>
                <time className="text-xs text-gray-500">{item.date}</time>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{item.excerpt}</p>
              <button className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-800">
                Read more →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
