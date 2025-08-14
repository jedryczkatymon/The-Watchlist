import { Play } from "lucide-react";
import Link from "next/link";

import { HamburgerMenu } from "@/components/hamburger-menu";
import { NavbarDesktop } from "@/components/navbar-desktop";
import { Search } from "@/components/search";

export function Navbar() {
  return (
    <nav className="flex max-w-full justify-around px-4 pt-6 lg:justify-center lg:gap-20 lg:px-20">
      <Link href="/" className="flex items-center gap-3 whitespace-nowrap">
        <Play className="size-10" />
        <h2 className="hidden text-2xl font-bold md:block">The Watchlist</h2>
      </Link>
      <Search />
      <NavbarDesktop />
      <HamburgerMenu />
    </nav>
  );
}
