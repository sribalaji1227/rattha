"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { navbarData, NavItem } from "@/constants/content";
import { logo } from "@/constants/assets";
import { Menu, X, ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";
import NavLink from "../NavLink/NavLink";
import { useRouter, usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const whiteBgRoutes = ["/cookie-policy", "/privacy-policy", "/terms-of-use"];
  const isWhiteBg = whiteBgRoutes.includes(pathname);

  // helper to close mobile menu + any submenu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // toggle mobile overlay
  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    if (isMenuOpen) setOpenDropdown(null);
  };

  // open/close specific submenu
  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  // close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        openDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // change header bg on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // for mobile submenu title
  const activeNav = navbarData.find((n) => n.key === openDropdown);

  return (
    <header
      className={`relative top-0 left-0 w-full z-50 border-b border-gray-300 transition-colors duration-300 font-sans ${isWhiteBg
        ? "bg-white"
        : isScrolled
          ? "bg-black"
          : "bg-black"
        }`}
    >
      {/* "bg-[rgba(0,0,0,0.42)] */}
      <nav className="flex items-center justify-between max-w-[1220px] mx-auto py-6 pr-[20px] sm:pr-0">
        {/* Logo */}
        <NavLink href="/" onClick={() => setOpenDropdown(null)}>
          <Image
            src={logo}
            width={223}
            height={45}
            alt="Logo"
            className="w-[223px] h-auto"
            priority
          />
        </NavLink>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-end gap-x-14 gap-y-4 flex-wrap uppercase font-medium">
          {navbarData.map((nav: NavItem) => (
            <li key={nav.key} className="relative flex items-center">
              {nav.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(nav.key)}
                    aria-expanded={openDropdown === nav.key}
                    className={`flex items-center gap-1 text-sm font-medium uppercase transition duration-300 hover:text-blue-500 ${pathname.startsWith(`/${nav.key}`)
                      ? "text-white font-bold"
                      : "text-[#9D9E9E]"
                      }`}

                  >
                    {nav.label}
                    {openDropdown === nav.key ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                  {openDropdown === nav.key && (
                    <ul
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-2 w-48 bg-[#f0f0f0] shadow-lg"
                    >
                      {nav.children.map((child) => (
                        <li
                          key={`${nav.key}-${child.key}`} /* unique key */
                          className="border-b-[2px] border-b-[#8B8B8B36]"
                        >
                          <NavLink
                            href={child.path}
                            onClick={() => setOpenDropdown(null)}
                            className={`block uppercase px-4 py-2 text-sm transition hover:bg-[#107BC0] hover:text-white ${pathname === child.path
                              ? "text-white font-bold bg-[#107BC0]"
                              : "text-[#8B8B8B]"
                              }`}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  href={nav.path}
                  onClick={() => setOpenDropdown(null)}
                  className={`text-sm font-medium transition duration-300 ${pathname === nav.path
                    ? "text-white font-bold"
                    : "text-[#9D9E9E] hover:text-blue-500"
                    }`}
                >
                  {nav.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black text-white rounded-b-3xl overflow-auto">
          {/* overlay header */}
          <div className="flex w-full justify-between border-b border-[#dcdcdc] py-[25px] pr-[20px]">
            <Image
              src={logo}
              width={150}
              height={45}
              alt="Logo"
              className="w-[150px] h-auto"
              priority
            />
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Root menu */}
          {openDropdown === null ? (
            <ul className="px-6 pt-[20px] max-w-[350px] mx-auto">
              {navbarData.map((nav: NavItem) => (
                <li
                  key={nav.key}
                  className="border-b border-[#5F5F5F] last:border-b-0 mx-[15px]"
                >
                  {nav.children ? (
                    <div
                      className="flex items-center gap-2 py-4 text-[18px] font-medium text-[#9d9e9e] capitalize px-4"
                      onClick={() => toggleDropdown(nav.key)}
                    >
                      <span className="text-center w-full pl-[22px]">{nav.label}</span>
                      <ChevronDown size={24} className="shrink-0 text-[#9d9e9e]" />
                    </div>

                  ) : (
                    <NavLink
                      href={nav.path}
                      onClick={closeMenu}
                      className={`block py-[16px] text-[18px] font-medium capitalize text-center ${pathname === nav.path
                        ? "text-white font-bold"
                        : "text-[#9D9E9E]"
                        }`}
                    >
                      {nav.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <>
              {/* Submenu header */}
              <div
                className="px-6 flex items-center py-4"
                onClick={() => setOpenDropdown(null)}
              >
                <button aria-label="Back" className="mr-2">
                  <ChevronLeft size={25} className="text-[#9d9e9e]" />
                </button>
                <h2 className="text-lg font-semibold text-[#9d9e9e]">
                  {activeNav?.label}
                </h2>
              </div>

              {/* Submenu items */}
              <ul className="px-6 pt-[20px] max-w-[350px] mx-auto">
                {activeNav?.children?.map((child) => (
                  <li
                    key={`${activeNav.key}-${child.key}`}
                    className="border-b border-[#5F5F5F]"
                  >
                    <button
                      onClick={() => {
                        // 1) close overlay + submenu
                        closeMenu();
                        // 2) imperatively navigate
                        router.push(child.path);
                      }}
                      className={`block w-full py-[16px] text-[18px] font-medium capitalize text-center leading-[40px] ${pathname === child.path
                        ? "text-white font-bold"
                        : "text-[#9d9e9e]"
                        }`}
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
