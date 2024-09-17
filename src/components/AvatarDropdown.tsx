"use client"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import { settingsIcon, userIcon , logoutIcon } from "@/utils/icons";
import Link from "next/link";

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <Avatar className="my-3">
          <AvatarImage width={40} height={40} className="rounded-full" src="https://github.com/shadcn.png" alt="Avatar" />
          </Avatar>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg  ring-1 ring-opacity-5 ring-black dark:ring-white">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              href="/profile"
              className="flex gap-2 px-4 py-2 text-sm"
              role="menuitem"
            >
              {userIcon}Profile
            </Link>
            <Link
              href="/settings"
              className="flex gap-2 px-4 py-2 text-sm"
              role="menuitem"
            >
              {settingsIcon}Settings
            </Link>
            <Link
              href="/logout"
              className="flex gap-2 px-4 py-2 text-sm"
              role="menuitem"
            >
              {logoutIcon}Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
