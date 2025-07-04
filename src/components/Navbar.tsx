"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ui/Theme-toggle";
import Image from "next/image";
import { whatsappLinkCorporate, whatsappLinkCustom, whatsappLinkLostTrails } from "@/constants/destinations";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-foreground transition-colors backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-primary">
            Lost Trails
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Experiences</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500/50 to-green-700/50 p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                            href="/lost-trails-journeys"
                          >
                            <Image
                              src="/images/cover.png"
                              alt="Lost Trails Journeys"
                              fill
                              className="object-cover z-10"
                            />
                            <div className="mb-2 text-lg font-medium text-white relative z-10">
                             Lost Trails Journeys
                            </div>
                            <p className="text-sm leading-tight text-white/90 relative z-10">
                              Curated journeys to the most breathtaking unexplored places
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href={whatsappLinkCorporate} title="Offbeat Corporate">
                        Explore untouched areas of India with us.
                      </ListItem>
                      <ListItem href="/destinations" title="Curated Trips">
                        Discover secluded forests and mountains.
                      </ListItem>
                      <ListItem href={whatsappLinkCustom} title="Custom Experiences">
                        Live the limitless possibilities.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/destinations" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Destinations
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Who We Are
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild>
              <Link href="/request-invite">Request Invite</Link>
            </Button>
            <Button asChild>
              <ThemeToggle/>
            </Button>

          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button asChild >
              <ThemeToggle/>
            </Button>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="experiences" className="border-none">
                      <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">
                        Experiences
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-3 pl-4">
                          <Link
                            href="/lost-trails-journeys"
                            className="text-base font-medium hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            Lost Trails Journeys
                          </Link>
                          <Link
                            href={whatsappLinkCorporate}
                            className="text-base font-medium hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            Offbeat Corporate
                          </Link>
                          <Link
                            href="/destinations"
                            className="text-base font-medium hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            Curated Trips
                          </Link>
                          <Link
                            href={whatsappLinkCustom}
                            className="text-base font-medium hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            Custom Experiences
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link
                    href="/destinations"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Destinations
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/blog"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Button asChild className="mt-4">
                    <Link href="/request-invite" onClick={() => setIsOpen(false)}>
                      Request Invite
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

function navigationMenuTriggerStyle() {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  );
}

export default Navbar;
