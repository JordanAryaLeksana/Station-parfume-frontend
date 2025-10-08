import Link from "next/link";
import Typography from "@/components/Typography/Typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/router";
import { BiCart, BiChevronDown, BiLogIn, BiSearch, BiUser, BiUserPlus } from "react-icons/bi";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Men", href: "/shop/men" },
  { name: "Women", href: "/shop/women" },
  { name: "Unisex", href: "/shop/unisex" },
];

const authLinks = [
  { name: "Login", path: "/login", icon: <BiLogIn /> },
  { name: "Register", path: "/register", icon: <BiUserPlus /> },
];

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const session = null;
  const status: "unauthenticated" | "authenticated" | "loading" = "loading";
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[9999] flex flex-row items-center justify-between h-20 bg-neutral-0 w-full transition-all duration-300 px-8 lg:px-20 ${
        isScrolled ? "shadow-md border-b border-neutral-200" : "border-b border-neutral-100"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex flex-row justify-center items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
          <span className="text-neutral-0 font-bold text-lg">SP</span>
        </div>
        <Typography variant="Header" size="xl" as="div" className="font-semibold text-neutral-900 hidden md:block">
          Station Parfume
        </Typography>
      </Link>

      {/* Navigation Links */}
      <section className="hidden lg:flex flex-row items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-base font-medium transition-all duration-200 relative group ${
              isActive(link.href) ? "text-primary" : "text-neutral-700 hover:text-primary"
            }`}
          >
            {link.name}
            <span
              className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary transition-transform duration-200 ${
                isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        ))}
      </section>

      {/* Right Section */}
      <section className="flex flex-row gap-4 lg:gap-6 justify-center items-center">
        {/* Search Bar */}
        <div className="hidden md:flex flex-row items-center bg-neutral-100 rounded-full px-4 py-2 gap-2 hover:bg-neutral-200 transition-colors">
          <BiSearch className="text-neutral-500" size={20} />
          <Input
            placeholder="Search products..."
            className="p-0 border-none bg-transparent focus:outline-none focus:ring-0 focus:border-0 shadow-none text-sm w-40 lg:w-48"
          />
        </div>

        {/* Mobile Search Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-neutral-700 hover:text-primary hover:bg-primary-light"
        >
          <BiSearch size={24} />
        </Button>

        {/* Account Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-neutral-700 hover:text-primary hover:bg-primary-light"
            >
              <BiUser className="h-5 w-5" />
              <span className="hidden lg:inline">Account</span>
              <BiChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {status === "loading" ? (
              <DropdownMenuItem disabled>Loading...</DropdownMenuItem>
            ) : session ? (
              <>
                <DropdownMenuItem disabled className="font-semibold text-primary">
                  {/* 👋 {session.user?.name || session.user?.email} */}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <BiLogIn className="h-4 w-4 mr-2 rotate-180" />
                  Logout
                </DropdownMenuItem>
              </>
            ) : (
              authLinks.map((authLink, index) => (
                <div key={authLink.path}>
                  <DropdownMenuItem
                    onClick={() => handleNavigation(authLink.path)}
                    className={`cursor-pointer flex items-center gap-2 ${
                      isActive(authLink.path) ? "bg-primary-light text-primary" : ""
                    }`}
                  >
                    {authLink.icon}
                    {authLink.name}
                  </DropdownMenuItem>
                  {index < authLinks.length - 1 && <DropdownMenuSeparator />}
                </div>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Cart */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/cart")}
          className="relative text-neutral-700 hover:text-primary hover:bg-primary-light"
        >
          <BiCart size={26} />
          {/* Cart Badge */}
          <span className="absolute -top-1 -right-1 bg-primary text-neutral-0 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </Button>
      </section>
    </nav>
  );
}