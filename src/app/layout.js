// app/layout.js
import Header from "@/components/Header";
import "./globals.css"; // import Tailwind/global styles
import Footer from "@/components/Footer";

export const metadata = {
  title: "RusLanguage",
  description:
    "Learn Russian in Russia — courses, admissions, teachers, visas and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-slate-900">
        <Header />
        <main className="mt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
