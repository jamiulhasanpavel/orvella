
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Home,
  Search,
  UserRound,
  UserRoundPlus,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Destinations", path: "/destinations", dropdown: true },
    { name: "Tour Packages", path: "/tour-packages", dropdown: true },
    { name: "Hotels", path: "/hotels", dropdown: true },
    { name: "My Booking", path: "/my-booking" },
    { name: "Admin", path: "/admin" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-[#002c50]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[112px] max-w-[1600px] items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Plane
            size={65}
            strokeWidth={2.5}
            className="rotate-[-25deg] text-[#08baf0]"
          />

          <div>
            <h1 className="text-[29px] font-extrabold leading-none tracking-wide text-white">
              ORVELLA
            </h1>
            <p className="mt-1 text-[14px] text-gray-200">
              Travel & Tourism
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-0.5 2xl:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-4 text-[12px] font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-[#08baf0] text-white"
                  : "text-white hover:bg-[#08baf0] hover:text-white"
              }`}
            >
              {item.icon && <item.icon size={16} />}
              {item.name}
              {item.dropdown && <ChevronDown size={14} />}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:hidden">
          <Link href="/my-booking" className="text-sm font-semibold text-white">
            My Booking
          </Link>
          <Link href="/admin" className="text-sm font-semibold text-white">
            Admin
          </Link>
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <button className="border-r border-white/40 px-5 text-white">
            <Search size={25} />
          </button>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#00365c]"
          >
            <UserRound size={20} />
            Login
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-2 rounded-full bg-[#08baf0] px-5 py-3 text-sm font-semibold text-[#002c50] transition hover:bg-white"
          >
            <UserRoundPlus size={19} />
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg bg-[#08baf0] p-2 text-white xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-full max-h-[80vh] w-full space-y-1 overflow-y-auto bg-[#002c50] p-5 shadow-xl xl:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-white hover:bg-[#08baf0]"
            >
              {item.name}
              {item.dropdown && <ChevronDown size={16} />}
            </Link>
          ))}

          <div className="flex gap-3 pt-3">
            <Link href="/login" className="flex-1 rounded-full border border-white py-3 text-center text-white">
              Login
            </Link>
            <Link href="/signup" className="flex-1 rounded-full bg-[#08baf0] py-3 text-center font-semibold text-white">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
