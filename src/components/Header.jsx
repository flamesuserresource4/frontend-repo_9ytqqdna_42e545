import { Home, Newspaper, Users, Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">
              S
            </div>
            <div>
              <p className="text-xs tracking-widest text-emerald-700 font-semibold">
                SANGKULA CLAN
              </p>
              <p className="-mt-0.5 text-[10px] text-gray-500">Naqib Sangkula Bloodline</p>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#home" className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Home size={16} /> Home
            </a>
            <a href="#news" className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Newspaper size={16} /> News
            </a>
            <a href="#register" className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Users size={16} /> Register
            </a>
            <a href="#admin" className="inline-flex items-center gap-2 text-emerald-700 font-medium">
              <Shield size={16} /> Admin
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#register"
            className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            Join the Registry
          </a>
        </div>
      </div>
    </header>
  );
}
