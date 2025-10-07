import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Image from "next/image";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 backdrop-blur-sm"
    >
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between p-4">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/brand-asset-01.svg" alt="logo" width={24} height={24} />
            <span className="font-bold text-white">praedia</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div variants={itemVariants} className="hidden md:flex items-center gap-6">
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
          <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-lg font-semibold">
            <Link href="#call-booking">Mit Sales sprechen</Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div variants={itemVariants} className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-semibold text-white">Features</span>
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="text-neutral-400 hover:text-white transition-colors pl-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {feature.title}
                </Link>
              ))}
            </div>
            <Link
              href="#pricing"
              className="text-neutral-400 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-lg font-semibold w-full">
              <Link href="#call-booking" onClick={() => setMobileMenuOpen(false)}>
                Mit Sales sprechen
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
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
