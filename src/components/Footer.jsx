export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="text-xs tracking-widest text-emerald-700 font-semibold">SANGKULA CLAN</p>
            <p className="mt-2 text-gray-600">
              Preserving the Naqib Sangkula bloodline and strengthening kinship across generations.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Quick links</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a href="#home" className="hover:text-emerald-700">Home</a></li>
              <li><a href="#news" className="hover:text-emerald-700">News</a></li>
              <li><a href="#register" className="hover:text-emerald-700">Register</a></li>
              <li><a href="#admin" className="hover:text-emerald-700">Admin</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Contact</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Email: info@sangkula.family</li>
              <li>Facebook: Sangkula Clan</li>
              <li>Location: Zamboanga City</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Acknowledgment</p>
            <p className="mt-2 text-gray-600">
              With gratitude to elders and researchers who curate our shared history and heritage.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} SANGKULA CLAN. All rights reserved.</p>
          <p>Made with care for family.</p>
        </div>
      </div>
    </footer>
  );
}
