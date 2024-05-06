import Link from "next/link"
import {
    Home,
    LineChart,
    LucideIcon,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"

interface IMenus {
    name: string,
    icon: LucideIcon
}

export default function Sidebar() {

    const menus: IMenus[] = [
        { name: "Dashboard", icon: Home },
        { name: "Orders", icon: ShoppingCart },
        { name: "Products", icon: Package },
        { name: "Customers", icon: Users2 },
        { name: "Analytics", icon: LineChart },
    ]


    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                {
                    menus.map((menu, index: number) => {
                        return (
                            <TooltipProvider key={index}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={`/${menu.name.toLowerCase()}`}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            {
                                                <menu.icon className="h-5 w-5"></menu.icon>
                                            }
                                            <span className="sr-only">{menu.name}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">{menu.name}</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )
                    })
                }
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}
