import Header from "./components/Header";
import NewsSection from "./components/NewsSection";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import { ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-emerald-100 text-emerald-800">
                SANGKULA CLAN
              </p>
              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Preserving the Naqib Sangkula bloodline
              </h1>
              <p className="mt-4 text-gray-700 text-base sm:text-lg">
                A living registry and community hub for all descendants and relatives. Register your family, stay informed, and help strengthen our lineage.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#register"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700"
                >
                  Join the Registry <ChevronRight size={18} />
                </a>
                <a
                  href="#news"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50"
                >
                  View News
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="aspect-[4/3] rounded-xl bg-white border border-emerald-100 grid place-items-center">
                  <div className="text-center px-6">
                    <p className="text-emerald-700 font-semibold">Family Tree</p>
                    <p className="text-sm text-gray-600 mt-1">
                      A visual genealogy explorer will appear here. In the meantime, begin by registering your family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsSection />
      <RegistrationForm />
      <section id="admin" className="py-16 bg-emerald-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Admin Dashboard</h2>
          <p className="text-gray-700 max-w-2xl">
            An administrator area will allow authorized custodians to review registrations, curate the family tree, and publish news updates.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="font-medium">Pending Registrations</p>
              <p className="text-sm text-gray-600">Review and approve new entries.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="font-medium">Family Tree Manager</p>
              <p className="text-sm text-gray-600">Link relatives and maintain branches.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="font-medium">News & Announcements</p>
              <p className="text-sm text-gray-600">Publish and schedule clan updates.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
