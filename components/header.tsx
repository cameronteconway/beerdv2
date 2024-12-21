"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "./ui/navigation-menu";

import {
	Calculator,
	Calendar,
	MagnifyingGlass,
	Person,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./ui/command";
import { useState } from "react";

export default function Header() {
	const [open, setOpen] = useState<boolean>(false);

	const openSearch = () => {
		setOpen(!open);
	};

	const pathname = usePathname();

	return (
		<NavigationMenu className='fixed left-0 right-0 bottom-7 sm:bottom-auto sm:top-[17px] mx-auto rounded-full bg-white'>
			<NavigationMenuList className='rounded-full border border-input p-[6px]'>
				<NavigationMenuItem>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink
							aria-label='Go to homepage'
							active={pathname === "/" ? true : false}
							className='group inline-flex h-8 w-max items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-accent/50'
						>
							Beers
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href='/beers' legacyBehavior passHref>
						<NavigationMenuLink
							aria-label='See all beers'
							active={
								pathname === "/beers" || pathname.split("/")[1] === "beers"
									? true
									: false
							}
							className='group inline-flex h-8 w-max items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-accent/50'
						>
							Add Beer
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/* {user ? (
                    <NavigationMenuItem>
                        <Link href={'/account'} legacyBehavior passHref>
                            <NavigationMenuLink
                                aria-label='Go to my account'
                                active={
                                    pathname === '/account' ||
                                    pathname.split('/')[1] === 'account'
                                        ? true
                                        : false
                                }
                                className='group inline-flex h-8 w-max items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-accent/50'
                            >
                                Account
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ) : (
                    <NavigationMenuItem>
                        <Link href={'/login'} legacyBehavior passHref>
                            <NavigationMenuLink
                                aria-label='Login to my account'
                                active={
                                    pathname === '/login' ||
                                    pathname.split('/')[1] === 'login'
                                        ? true
                                        : false
                                }
                                className='group inline-flex h-8 w-max items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-accent/50'
                            >
                                Login
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )} */}
				<NavigationMenuItem>
					<NavigationMenuLink
						className='group inline-flex h-8 w-max items-center justify-center rounded-full bg-white py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-accent/50'
						aria-label='Open search'
					>
						<Button
							aria-label='Search beers'
							onClick={openSearch}
							className='group inline-flex h-8 w-max items-center justify-center rounded-full bg-transparent px-4 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-secondary focus:bg-accent focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-accent/50'
						>
							<MagnifyingGlass weight='bold' size={18} />
						</Button>
					</NavigationMenuLink>
					<CommandDialog open={open} onOpenChange={setOpen}>
						<CommandInput placeholder='Type to search...' />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup heading='Suggestions'>
								<CommandItem>
									<Calendar />
									<span>Calendar</span>
								</CommandItem>
								<CommandItem>
									<Person />
									<span>Search Emoji</span>
								</CommandItem>
								<CommandItem disabled>
									<Calculator />
									<span>Calculator</span>
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</CommandDialog>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
