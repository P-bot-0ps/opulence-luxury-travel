export default function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300 py-8 px-2">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & Mission */}
        <div className="flex flex-col items-start">
          <p className="text2xl leading-relaxed">
            Empowering global journeys through luxury travel, education, and
            career opportunities.
          </p>
          <img
            src="/logos.svg"
            alt="Travel With Opulence"
            className="h-20 w-auto mb-6 object-contain"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <a href="/Study-abroad" className="hover:text-indigo-400">
                Study Abroad
              </a>
            </li>
            <li>
              <a href="/Work-overseas" className="hover:text-indigo-400">
                Work Overseas
              </a>
            </li>
            <li>
              <a href="/Luxury-travel" className="hover:text-indigo-400">
                Luxury Travel
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-8">
            <a
              href="https://instagram.com/travelwithopulence"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl hover:text-indigo-400 transition-transform duration-300 hover:scale-110"></i>
            </a>
            <a
              href="https://linkedin.com/company/travelwithopulence"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl hover:text-indigo-400 transition-transform duration-300 hover:scale-110"></i>
            </a>
            <a href="mailto:info@travelwithopulence.com">
              <i className="fas fa-envelope text-2xl hover:text-indigo-400 transition-transform duration-300 hover:scale-110"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-2xl text-gray-400 space-x-4">
        <a href="/terms" className="hover:text-indigo-400 underline">
          Terms of Service
        </a>

        <a href="/Policy" className="hover:text-indigo-400 underline">
          Privacy Policy
        </a>
        <a href="/Contact" className="hover:text-indigo-400 underline">
          Contact
        </a>
        <a href="/about" className="hover:text-indigo-400 underline">
          About Us
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Travel With Opulence. All rights
        reserved.
      </div>
    </footer>
  );
}
