"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";
import Logo from "./logo";

const Navbar: React.FC = () => {
  // Get current path (page)
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/"},
    { name: "Projects", href: "/projects"},
  ]

  return (
    <nav className="fixed backdrop-blur-lg top-0 left-0 right-0 text-foreground font-medium">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Display items as flex; align items to center (vertical); justify content to space between (even distribution)  */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            key={"/"}
            href={"/"}
          >
            <Logo />
          </Link>

          {/*--- Nav links ---*/}
          {/* Hide links; if page is too small (smaller than md-768px */}
          <div className="hidden md:block justify-self-end">
            {/* Set list of links to display as flex; with a spacing of 1rem (16px) */}
            <div className="flex space-x-4">
              {/* TODO Maybe move this chunk to separate class for convienence */}
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={clsx(
                    "hover:underline underline-offset-8",
                    {
                      // Apply style if current link is the page we are on
                      "text-accent": pathname === link.href,
                    },
                  )}
                >
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              ))}
            </div>
          </div>
          {/*--- Nav links ---*/}

        </div>
      </div>
    </nav>
  )
};

export default Navbar;