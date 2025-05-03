"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { href: "#profile-section", label: "Profile" },
  { href: "#about-section", label: "About Me" },
  { href: "#skill-section", label: "Skill" },
  { href: "#portofolio-section", label: "Portfolio" },
  { href: "#experience-section", label: "Experience" },
  { href: "#testimonial-section", label: "Testimonial" },
  { href: "#contact-section", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(item.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#191717] border-b border-gray-700 text-white shadow-md ">
      <div className="max-w-full mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-5">
            <Image
              src="/iconsayapkiri.svg"
              alt="Logo sayap kiri"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">Nexxus Website</span>
          <div className="relative w-8 h-5">
            <Image
              src="/iconsayapkanan.svg"
              alt="Logo sayap kanan"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-6 items-center"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-gray-300 transition duration-300 ${
                activeSection === item.href
                  ? "font-bold underline underline-offset-4 text-blue-400"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          className="md:hidden w-[95%] mx-auto mt-2 bg-[#1f1f1f] rounded-xl border border-gray-600 p-4 shadow-lg mb-4"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full rounded-md px-3 py-2 transition duration-300 ${
                    activeSection === item.href
                      ? "font-bold text-blue-400 underline underline-offset-4 bg-gray-800"
                      : "hover:bg-gray-700 hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
