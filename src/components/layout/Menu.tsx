"use client";

import React from "react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { dropdownStore, navigationStore } from "@/store/extended";
import { useAtom } from "jotai";
import Typography from "../Typography/Typography";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "SKSD, SEPTEMBER KITA SUKA DISKON",
    href: "/promo/sksd",
  },
  {
    name: "ANDALAN SETIAP HARI, DIBAWAH-500K",
    href: "/promo/dibawah-500k",
  },
  {
    name: "VIAL ON PROMO",
    href: "/promo/vial",
  },
  {
    name: "CATEGORIES",
    children: [
      { name: "Offers", href: "/categories/offers" },
      { name: "Brands", href: "/categories/brands" },
      { name: "Tester", href: "/categories/tester" },
      {
        name: "Make Up",
        children: [
          { name: "Foundation", href: "/categories/makeup/foundation" },
          { name: "Lipstick", href: "/categories/makeup/lipstick" },
        ],
      },
      { name: "Hair Care", href: "/categories/hair-care" },
    ],
  },
  {
    name: "SPECIAL OFFER",
    href: "/special-offer",
  },
  {
    name: "NEW",
    href: "/new",
  },
  {
    name: "GENDER",
    children: [
      { name: "Women's", href: "/gender/women" },
      { name: "Men's", href: "/gender/men" },
      { name: "Unisex", href: "/gender/unisex" },
    ],
  },
];

function capitalize(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Menu() {
  const [dropdowns, setDropdowns] = useAtom(dropdownStore);
  const [navigation, setNavigation] = useAtom(navigationStore);
  const pathname = usePathname();
  React.useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    setNavigation(parts);
  }, [pathname, setNavigation]);
  console.log("Current Pathname:", pathname);
  const toggleMenu = (name: string) => {
    setDropdowns({
      ...dropdowns,
      [name]: !dropdowns[name],
    });
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 mb-4 text-sm text-gray-600">
        <Link href="/" className="hover:underline text-gray-400">
          Home
        </Link>
        {navigation.map((part, i) => {
          const href = "/" + navigation.slice(0, i + 1).join("/");
          const isLast = i === navigation.length - 1;

          return (
            <span key={i} className="flex items-center space-x-2">
              <BiChevronRight className="mx-1 text-gray-400" />
              {isLast ? (
                <span className="font-semibold">{capitalize(part)}</span>
              ) : (
                <Link href={href} className="hover:underline">
                  <Typography variant="Paragraph" size="base">
                    {capitalize(part)}
                  </Typography>
                </Link>
              )}
            </span>
          );
        })}
      </nav>
      <ul className="space-y-1">

        {menus.map((menu, index) => (
          <li key={index} className="px-4 py-2">
            {menu.children ? (
              <div>
                <button
                  onClick={() => toggleMenu(menu.name)}
                  className="flex w-full items-center justify-between font-medium hover:bg-secondary-dark/10 p-2 rounded-md"
                >
                  {menu.name}
                  <BiChevronRight
                    className={`ml-2 h-5 w-5 transition-transform ${dropdowns[menu.name] ? "rotate-90" : "rotate-0"
                      }`}
                  />
                </button>

                {/* anak muncul inline (collapsible) */}
                {dropdowns[menu.name] && (
                  <ul className="ml-4 mt-2 space-y-1 border-l border-gray-300 pl-3">
                    {menu.children.map((child, i) =>
                      child.children ? (
                        <li key={i}>
                          <span className="font-semibold">{child.name}</span>
                          <ul className="ml-4 mt-1 space-y-1">
                            {child.children.map((sub, j) => (
                              <li key={j}>
                                <Link
                                  href={sub.href}
                                  className="block hover:underline"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={i}>
                          <Link
                            href={child.href}
                            className="block hover:underline"
                          >
                            {child.name}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={menu.href || "#"}
                className="block font-medium hover:bg-secondary-dark/10 p-2 rounded-md"
              >
                {menu.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
