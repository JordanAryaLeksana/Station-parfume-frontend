import React from "react";



const menus = [
  {
    name: "SKSD, SEPTEMBER KITA SUKA DISKON",
    href: "/promo/sksd",
  },
  {
    name: "ANDALAN SETIAP HARI, DIBAWAH 500K",
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
      { name: "Body Mist", href: "/categories/body-mist" },
      { name: "Gift Set", href: "/categories/gift-set" },
      { name: "Miniature", href: "/categories/miniature" },
      { name: "Deo Stick", href: "/categories/deo-stick" },
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
    name: "DEAL OF THE WEEK",
    href: "/deal-of-the-week",
  },
  {
    name: "NEW",
    href: "/new",
  },
  {
    name: "GENDER",
    children: [
      {
        name: "Women's",
        href: "/gender/women",
      },
      {
        name: "Men's",
        href: "/gender/men",
      },
      {
        name: "Unisex",
        href: "/gender/unisex",
      },
    ],
  },
];

export default function Menu() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [childrenOpenIndex, setChildrenOpenIndex] = React.useState<number | null>(null);
    
    return (
        <ul className="space-y-1">
         {menus.map((menu, index) => (
            <li key={index} className="px-4 py-2 hover:bg-secondary-dark/10 cursor-pointer">
                {menu.children ? (
                    <div className="group" onClick={() => setChildrenOpenIndex(childrenOpenIndex === index ? null : index)}>
                        <span className="font-medium">{menu.name}</span>
                    </div>
                ) : (
                    <span className="font-medium">{menu.name}</span>
                )}
            </li>
        ))}
      </ul>
    )
}