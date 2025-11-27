export default function Footer() {
  return (
    <footer className="bg-[#1d2530] text-gray-300 py-8">
      <div className="max-w-340 mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 ">
        <div className="">© 2024 RusLanguage. All rights reserved.</div>
        <nav className="flex items-center gap-8">
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="/portal" className="hover:text-white transition-colors">
            Student Portal
          </a>
        </nav>
      </div>
    </footer>
  );
}
