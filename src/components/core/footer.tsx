import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const footerFeatures = [
        {
            href: "#ueberblick",
            name: "Datenextraktion",
        },
        {
            href: "#investitionsentscheidungen",
            name: "Investor Matching",
        },
        {
            href: "#investments",
            name: "Cashflow Analyse",
        },
        {
            href: "#praesentieren",
            name: "Präsentation",
        },
        {
            href: "#verhandeln",
            name: "Datenexport",
        },
    ];

    const footerSocials = [
        // Add your social links here
        // { href: "#", name: "Twitter", icon: <TwitterIcon /> },
        // { href: "#", name: "LinkedIn", icon: <LinkedInIcon /> },
    ];

    return (
        <footer className="text-neutral-400 px-4 pt-0 sm:px-6 lg:px-4 w-full">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-12">
                    {/* Links Column */}
                    <div className="flex gap-16">
                        {/* Column 1: Features */}
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-200 tracking-wide">Features</h3>
                            <ul className="mt-4 space-y-2">
                                {footerFeatures.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm hover:text-white transition-colors">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    
                        {/* Column 3: Legal */}
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-200 tracking-wide">Rechtliches</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <a href="#pricing" className="text-sm hover:text-white transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <Link href="/impressum" className="text-sm hover:text-white transition-colors">
                                        Impressum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/datenschutz" className="text-sm hover:text-white transition-colors">
                                        Datenschutz
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Contact/Socials */}
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-200 tracking-wide">Kontakt</h3>
                            <ul className="mt-4 space-y-2">
                                <li>
                                    <a href="#call-booking" className="text-sm hover:text-white transition-colors">
                                        Demo Buchen
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>

                {/* Logo and Slogan Column (Now on the right) */}
                <div className="text-right">
                    <div className="flex justify-end items-center gap-2">
                        <Image src="/logo.svg" alt="praedia Logo" width={32} height={32} />
                        <span className="text-xl font-semibold text-white">praedia</span>
                    </div>
                     <p className="mt-4 max-w-xs text-sm ml-auto">
                        Die KI-gestützte Plattform für bessere Immobilieninvestitionen.
                    </p>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="mt-12 pt-6 pb-6 text-center">
                <p className="text-sm font-light">
                    &copy; {new Date().getFullYear()} praedia. Alle Rechte vorbehalten.
                </p>
            </div>
        </footer>
    );
}
