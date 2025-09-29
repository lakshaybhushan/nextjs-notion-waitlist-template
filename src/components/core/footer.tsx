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

    const footerNavs = [
        {
            href: "#pricing",
            name: "Pricing",
        },
    ];

    const footerSocials = [
        // Add your social links here
        // { href: "#", name: "Twitter", icon: <TwitterIcon /> },
        // { href: "#", name: "LinkedIn", icon: <LinkedInIcon /> },
    ];

    return (
        <footer className="bg-black text-neutral-400 px-4 pt-16 sm:px-6 lg:px-8 w-full border-t border-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12">
                    {/* Links Column */}
                    <div className="flex flex-grow justify-center gap-16">
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
                        
                        {/* Column 2: Navigation */}
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-200 tracking-wide">Navigation</h3>
                            <ul className="mt-4 space-y-2">
                                {footerNavs.map((item) => (
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
                        <Image src="/logo.svg" alt="whisper Logo" width={32} height={32} />
                        <span className="text-xl font-semibold text-white">whisper</span>
                    </div>
                     <p className="mt-4 max-w-xs text-sm ml-auto">
                        Die KI-gestützte Plattform für bessere Immobilieninvestitionen.
                    </p>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="mt-12 pt-6 pb-6 border-t border-neutral-800 text-center">
                <p className="text-sm font-light">
                    &copy; {new Date().getFullYear()} whisper. Alle Rechte vorbehalten.
                </p>
            </div>
        </footer>
    );
}
