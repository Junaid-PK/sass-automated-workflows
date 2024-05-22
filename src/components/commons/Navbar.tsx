import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

type NavbarProps = {};

const Navbar = async () => {
  return (
    <header className="fixed top-0 right-0 left-0 p-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center justify-between border-b-[1px] border-neutral-900">
      <aside className="flex items-center gap-[2x] text-white">
        <p className="text-3xl font-bold">Fu</p>
        <Image
          src="/fuzzieLogo.png"
          alt="Logo"
          width={15}
          height={15}
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">zzie</p>
      </aside>
      <nav className="absolute left-[50%] transform translate-x-[-50%] traslate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="/home">Products</Link>
          </li>
          <li>
            <Link href="/home">Pricing</Link>
          </li>
          <li>
            <Link href="/home">Clients</Link>
          </li>
          <li>
            <Link href="/home">Resources</Link>
          </li>
          <li>
            <Link href="/home">Documentation</Link>
          </li>
          <li>
            <Link href="/home">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#339BB3_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
