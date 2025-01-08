'use client';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import UserItem from "./UserItem";
import { User, Mail, CreditCard, Bell, Settings, Lock, FileText } from 'lucide-react';
import { JSX } from "react";
import  Link  from "next/link";

// Define types for the menu items and groups
type MenuItem = {
  link: string;
  text: string;
  icon ?: JSX.Element;
};

type MenuGroup = {
  group: string;
  items: MenuItem[];
};

const Sidebar = () => {
  // Define the menu list with proper typing
  const menuList: MenuGroup[] = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Mail />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Lock />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <FileText />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, key) => (
                  <CommandItem key={key} className="flex gap-2 cursor-pointer">
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>
        <Link href="/team" className="flex items-center gap-2">
          <Settings/>
          <span>Team Settings</span>   
         </Link>
      </div>
    </div>
  );
};

export default Sidebar;