"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Tjänster", "/tjanster"],
  ["Projekt", "/projekt"],
  ["Priser", "/priser"],
  ["Om oss", "/om-oss"],
  ["Kontakt", "/kontakt"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner" ref={menuRef}>
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/growthlink-logo.png"
            alt="Growthlink Agency"
            width={150}
            height={90}
            className="brand-logo"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}

          <Link
            className="nav-cta"
            href="/kontakt"
          >
            Få en offert
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className={`menu-button ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* MOBILE NAV */}
        <nav className={open ? "mobile-nav open" : "mobile-nav"}>
          <div className="mobile-menu-top">
            <span>Meny</span>
          </div>

          <div className="mobile-nav-links">
            {links.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={
                  {
                    "--delay": `${index * 60}ms`,
                  } as React.CSSProperties
                }
              >
                <span>{label}</span>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>

          <Link
            className="nav-cta"
            href="/kontakt"
            onClick={() => setOpen(false)}
          >
            Få en offert
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>

      {open && (
        <button
          className="menu-overlay"
          aria-label="Stäng meny"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}