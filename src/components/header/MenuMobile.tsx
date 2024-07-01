import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";

interface NavItem {
  id: number;
  label: string;
  href: string;
  subNav?: NavItem[];
  iconImage?: string;
}

interface MenuMobileProps {
  navItemsArray: NavItem[];
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ navItemsArray, setIsMobileMenuOpen }) => {
  return (
    <ul className="absolute left-0 top-20 flex w-full flex-col border-t bg-white text-blue-950 md:hidden">
      {navItemsArray.map((d) => (
        <SingleNavItem
          key={d.id}
          item={d}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      ))}
    </ul>
  );
};

interface SingleNavItemProps {
  item: NavItem;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SingleNavItem: React.FC<SingleNavItemProps> = ({ item, setIsMobileMenuOpen }) => {
  const [isItemOpen, setItemOpen] = useState(false);

  const toggleItem = () => {
    setItemOpen(!isItemOpen);
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Link
        onClick={toggleItem}
        href={item.href ?? "#"}
        className="relative px-5 py-3 transition-all border-b border-zinc-200 text-blue-950 hover:bg-blue-500 hover:text-white"
      >
        <p className="flex justify-between cursor-pointer items-center gap-2">
          <span>{item.label}</span>
          {item.subNav && item.subNav.length !== 0 && (
            <BsChevronDown
              className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`}
            />
          )}
        </p>
      </Link>

      {isItemOpen && item.subNav && item.subNav.length !== 0 && (
        <div className="z-10 w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {item.subNav.map((ch, i) => (
            <Link
              key={i}
              href={ch.href ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-blue-950 hover:bg-blue-500 hover:text-white"
            >
              {ch.iconImage && (
                <Image src={ch.iconImage} alt="item-icon" width={20} height={20} />
              )}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuMobile;
