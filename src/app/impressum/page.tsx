import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Zurück zur Startseite
                </Link>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-8">Impressum</h1>
                    
                    <p className="text-lg mb-6">Angaben gemäß § 5 DDG</p>
                    
                    <div className="space-y-6 text-neutral-300 leading-relaxed">
                        <p>
                            nyka Technologies UG (haftungsbeschränkt)<br />
                            <br />
                            Hauptstraße 23<br />
                            40789 Monheim am Rhein<br />
                        </p>

                        <p>
                            <strong className="text-white">Vertreten durch:</strong><br />
                            Jamil Hashemi<br />
                        </p>

                        <p>
                            <strong className="text-white">Registereintrag:</strong><br />
                            Eintragung im Handelsregister.<br />
                            Registergericht: Düsseldorf<br />
                            Registernummer: 108983<br />
                        </p>

                        <div>
                            <strong className="text-white">Haftungsausschluss:</strong><br /><br />
                            
                            <strong className="text-white">Haftung für Inhalte</strong><br /><br />
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br /><br />
                            
                            <strong className="text-white">Haftung für Links</strong><br /><br />
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br /><br />
                            
                            <strong className="text-white">Urheberrecht</strong><br /><br />
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br /><br />
                            
                            <strong className="text-white">Datenschutz</strong><br /><br />
                            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.<br />
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.<br />
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br />
                        </div>

                        <div className="pt-8 border-t border-neutral-800 text-sm text-neutral-500">
                            <p>
                                Impressum von{" "}
                                <a 
                                    href="https://websitewissen.com" 
                                    className="text-neutral-400 hover:text-white transition-colors"
                                    rel="dofollow"
                                >
                                    WebsiteWissen.com
                                </a>
                                , dem Ratgeber für{" "}
                                <a 
                                    href="https://websitewissen.com/wordpress-website-erstellen" 
                                    className="text-neutral-400 hover:text-white transition-colors"
                                    rel="dofollow"
                                >
                                    WordPress-Websites
                                </a>
                                ,{" "}
                                <a 
                                    href="https://websitewissen.com/wordpress-hosting-vergleich" 
                                    className="text-neutral-400 hover:text-white transition-colors"
                                    rel="dofollow"
                                >
                                    WordPress-Hosting
                                </a>
                                {" "}und{" "}
                                <a 
                                    href="https://websitewissen.com/website-kosten" 
                                    className="text-neutral-400 hover:text-white transition-colors"
                                    rel="dofollow"
                                >
                                    Website-Kosten
                                </a>
                                {" "}nach einem Muster von{" "}
                                <a 
                                    href="https://www.kanzlei-hasselbach.de/" 
                                    className="text-neutral-400 hover:text-white transition-colors"
                                    rel="dofollow"
                                >
                                    Kanzlei Hasselbach Rechtsanwälte
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
