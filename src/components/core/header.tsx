import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Image from "next/image";
import { Button } from "../ui/button";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const features: { title: string; href: string }[] = [
    {
        title: "Datenextraktion",
        href: "#ueberblick",
    },
    {
        title: "Investor Matching",
        href: "#investitionsentscheidungen",
    },
    {
        title: "Cashflow Analyse",
        href: "#investments",
    },
    {
        title: "Präsentation",
        href: "#praesentieren",
    },
    {
        title: "Datenexport",
        href: "#verhandeln",
    }
]

export default function Header() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 backdrop-blur-sm"
    >
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between p-4">
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={24} height={24} />
            <span className="font-bold text-white">whisper</span>
          </Link>
          <div className="flex items-center gap-4">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-3 p-4">
                                {features.map((feature) => (
                                    <ListItem
                                        key={feature.title}
                                        title={feature.title}
                                        href={feature.href}
                                    />
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
                Pricing
            </Link>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-lg font-semibold">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
