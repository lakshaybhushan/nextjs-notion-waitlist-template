# Code Base Restructuring: Master Document

Dieses Dokument dient als zentrale Steuerung und Dokumentation für die gesamte Code-Restrukturierung.

## 0. Planungsübersicht

- **Phase 1: Bestandsaufnahme & Risiko-Assessment** - Abgeschlossen
- **Phase 2: Ordnerstruktur-Analyse & Soll-Konzept** - In Arbeit
- **Phase 3: Datei-Refactoring** - Pendent
- **Phase 4: Strukturverbesserungen** - Pendent
- **Phase 5: Umsetzungsplan** - Pendent
- **Phase 6: Validierung** - Pendent

---

## 1. Komponenten-Inventar

Vollständige Liste aller relevanten Dateien, Komponenten und Funktionen vor der Umstrukturierung.

### App-Struktur (`src/app`)
- `app/layout.tsx`: Root-Layout der Anwendung.
- `app/page.tsx`: Hauptseite der Anwendung.
- `app/globals.css`: Globale CSS-Stile.
- `app/datenschutz/page.tsx`: Datenschutz-Seite.
- `app/impressum/page.tsx`: Impressum-Seite.
- `app/api/mail/route.ts`: API-Endpunkt für den E-Mail-Versand.

### Komponenten (`src/components`)
- **Core Components (`core/`)**
  - `footer.tsx`: Footer der Seite.
  - `header.tsx`: Header der Seite.
- **Feature Components (`features/`)**
  - `bento-grid.tsx`: Komplexes Bento-Grid-Layout zur Feature-Darstellung.
  - `cta.tsx`: Call-to-Action Sektion im Hero-Bereich.
  - `form.tsx`: CTA-Buttons ("Mit Sales sprechen", "How does it work?").
  - `testimonials.tsx`: Testimonials-Sektion mit rotierendem Text.
  - `video.tsx`: Komponente zur Einbettung des Demo-Videos.
- **UI Components (`ui/`)**
  - `button.tsx`: Shadcn UI Button-Komponente.
  - `grid-background.tsx`: Animiertes Gitter im Hintergrund.
  - `navigation-menu.tsx`: Shadcn UI Navigationsmenü.
  - `shimmer-text.tsx`: Animierter Schimmer-Effekt für Text.
  - `sonner.tsx`: Komponente für Toast-Benachrichtigungen.
  - `text-blur.tsx`: Animierter Text-Unschärfe-Effekt.

### Hilfsfunktionen & Konfiguration (`src/lib`)
- `lib/animation-variants.ts`: Framer Motion Animationsvarianten.
- `lib/utils.ts`: Hilfsfunktionen (z.B. `cn` für `clsx`).

### E-Mails (`src/emails`)
- `index.tsx`: React-E-Mail-Template.

---

## 2. Abhängigkeits-Matrix

*Diese Sektion wird während der Analyse befüllt, um alle Import/Export-Beziehungen abzubilden.*

---

## 3. Migrations-Protokoll

Schritt-für-Schritt-Log aller geplanten und durchgeführten Änderungen.

| Datum | Aktion | Datei(en) | Beschreibung | Status |
|---|---|---|---|---|
| *tbd* | **Analyse** | `bento-grid.tsx` | Identifizierung von Sub-Komponenten zur Extraktion. | **Abgeschlossen** |
| *tbd* | **Refactor** | `bento-grid.tsx` | Aufteilung in kleinere, wiederverwendbare Komponenten. | **Abgeschlossen** |
| *tbd* | **Struktur** | `src/components` | Einführung einer neuen, logischeren Ordnerstruktur. | **Abgeschlossen** |

---

## 4. Feature-Checkliste

Stellt sicher, dass alle Features nach der Umstrukturierung erhalten bleiben.

- [ ] Header-Navigation funktioniert.
- [ ] Hero-Sektion mit CTA-Buttons wird korrekt angezeigt.
- [ ] Scroll-Funktionalität der CTA-Buttons funktioniert.
- [ ] Testimonials-Sektion funktioniert (Text rotiert).
- [ ] Demo-Video wird korrekt abgespielt.
- [ ] Bento-Grid wird mit allen Features und Animationen korrekt angezeigt.
- [ ] Pricing-Sektion funktioniert.
- [ ] Cal.com-Integration funktioniert.
- [ ] Footer wird korrekt angezeigt.
- [ ] Impressum- und Datenschutz-Seiten sind erreichbar.
- [ ] E-Mail-Versand über die API funktioniert (falls testbar).

---

## 5. Import-Tracking

Liste aller Import-Pfade, die während der Migration aktualisiert werden müssen.

*Wird während der Planung befüllt.*

---

## 6. Rollback-Plan

1.  Alle Änderungen werden in einem separaten Git-Branch durchgeführt.
2.  Vor Beginn der Umstrukturierung wird ein initialer Commit erstellt (`git commit -m "refactor: initial state before restructuring"`).
3.  Die Umstrukturierung erfolgt in kleinen, atomaren Batches. Nach jedem erfolgreichen Batch wird ein Commit erstellt.
4.  Bei kritischen Fehlern, die nicht sofort behoben werden können, kann der Branch mittels `git reset --hard <commit-hash>` auf einen früheren, stabilen Zustand zurückgesetzt werden.
