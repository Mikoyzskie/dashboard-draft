import { PanelLeft, Package2, Home, ShoppingCart, Package, Users2, LineChart, Search, LucideIcon, Settings } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"

interface IMenus {
    name: string,
    icon: LucideIcon
}

export default function Header({ children }: { children: React.ReactNode }) {

    const links: IMenus[] = [
        { name: "Dashboard", icon: Home },
        { name: "Orders", icon: ShoppingCart },
        { name: "Products", icon: Package },
        { name: "Customers", icon: Users2 },
        { name: "Analytics", icon: LineChart },
        { name: "Settings", icon: Settings },
    ]

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        {
                            links.map((link, index: number) => {
                                return (
                                    <Link
                                        key={index}
                                        href={`/${link.name.toLowerCase()}`}
                                        className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    >
                                        {
                                            <link.icon className="h-5 w-5" ></link.icon>
                                        }
                                        {link.name}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </SheetContent>
            </Sheet>
            {children}
            <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                    >
                        <Image
                            src="/avatar.jpg"
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden w-full rounded-full"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
