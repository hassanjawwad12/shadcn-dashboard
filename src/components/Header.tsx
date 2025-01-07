'use client'
import { useState } from "react"
import { BellIcon } from "lucide-react"
import { CommandDemo } from "./Command"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

const Header = () => {

    const [notifications, setNotifications] = useState<any>([
        {
            text: "Your subscription has been renewed.",
            date: "02-01-2025",
            read: true,
        },
        {
            text: "New feature update available! Check it out now.",
            date: "01-25-2025",
            read: false,
        },
        {
            text: "Your payment was successful.",
            date: "01-20-2025",
            read: false,
        },
        {
            text: "Reminder: Your free trial ends in 3 days.",
            date: "01-18-2025",
            read: true,
        },
      
    ]);

    return (
        <div className="grid grid-cols-2 gap-4 border-b p-4">
            <CommandDemo />
            <div className="flex items-center justify-end">

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'outline'} size={'icon'}>
                            <div
                                className={`h-3 w-3 absolute top-3 right-3 rounded-full my-1 ${!notifications.find((x: any) => x.read === true) ? "bg-green-500" : "bg-blue-200"}`}
                            />
                            <BellIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {notifications.map((item: any, index: number) =>
                            <DropdownMenuItem
                                className="flex items-start gap-2 cursor-pointer
                             hover:bg-neutral-50 transition p-1" key={index}>
                                <div
                                    className={`h-3 w-3 rounded-full my-1 ${!item.read ? "bg-green-500" : "bg-blue-200"}`}
                                />
                                <div>
                                    <p>{item.text}</p>
                                    <p className="text-xs text-neutral-500">{item.date}</p>
                                </div>
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Header