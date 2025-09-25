# Code Base Restructuring: Master Tracking

Dieses Dokument dient als zentrale Anlaufstelle für die Planung, Durchführung und Dokumentation der Codebase-Umstrukturierung gemäß `refactoring.md`.

## 0. Setup und Dokumentation

- **Master-Datei**: `RESTRUCTURING_MASTER.md` (dieses Dokument) wurde erstellt.
- **Prinzipien**: Zero Tolerance für Feature-Verlust. Implementierung in kleinen, validierten Batches. Kontinuierliche Dokumentation.

---

## 1. Komponenten-Inventar

Vollständige Liste aller bestehenden Komponenten, Funktionen und Features.

### `app/`
- **`api/mail/route.ts`**: API-Endpunkt für den E-Mail-Versand.
- **`api/notion/route.ts`**: API-Endpunkt für die Anbindung an die Notion-Datenbank.
- **`favicon.ico`**: Favicon der Webseite.
- **`globals.css`**: Globale CSS-Stile.
- **`layout.tsx`**: Hauptlayout der Next.js-Anwendung.
- **`opengraph-image.png`**: Bild für Open Graph Metadaten.
- **`page.tsx`**: Hauptseite der Anwendung.
- **`twitter-image.png`**: Bild für Twitter Cards.

### `components/`
- **`cta.tsx`**: Call-to-Action-Sektion.
- **`footer.tsx`**: Footer der Seite.
- **`form.tsx`**: E-Mail-Eingabeformular.
- **`grid-background.tsx`**: Hintergrund mit Gittermuster.
- **`header.tsx`**: Header der Seite.
- **`kokonutui/bento-grid.tsx`**: Bento-Grid-Layout zur Feature-Darstellung.
- **`testimonials.tsx`**: Testimonials-Sektion.
- **`ui/`**: Allgemeine UI-Komponenten.
  - **`button.tsx`**: Standard-Button.
  - **`enhanced-btn.tsx`**: Button mit erweitertem Styling.
  - **`input.tsx`**: Standard-Eingabefeld.
  - **`shimmer-text.tsx`**: Text mit Schimmer-Effekt.
  - **`sonner.tsx`**: Komponente für Benachrichtigungen (Toasts).
  - **`text-blur.tsx`**: Text mit Weichzeichner-Effekt.

### `emails/`
- **`index.tsx`**: E-Mail-Template (wahrscheinlich mit React Email).

### `lib/`
- **`animation-variants.ts`**: Framer Motion Animationsvarianten.
- **`utils.ts`**: Hilfsfunktionen (z.B. `cn` für `clsx`).

### `public/`
- Diverse Vektor- und Bilddateien für Logos und die UI.

### Konfigurationsdateien
- `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `components.json`, `package.json`, etc.

---

## 2. Abhängigkeits-Matrix

Detaillierte Map aller Import/Export Beziehungen.

- **`app/page.tsx`**:
  - `sonner` -> `toast`
  - `react` -> `useState`
  - `@/components/cta`
  - `@/components/form`
  - `@/components/header`
  - `@/components/footer`
  - `@/components/kokonutui/bento-grid`
  - `next/image`
  - `framer-motion`
  - `@/components/testimonials`
  - `@/components/grid-background`
- **`app/layout.tsx`**:
  - `geist/font/sans` -> `GeistSans`
  - `geist/font/mono` -> `GeistMono`
  - `@/components/ui/sonner` -> `Toaster`
  - `@vercel/analytics/react` -> `Analytics`
- **`components/cta.tsx`**:
  - `framer-motion`
  - `@/components/ui/text-blur`
  - `@/components/ui/shimmer-text`
  - `@/lib/animation-variants`
- **`components/form.tsx`**:
  - `next/link`
  - `react` -> `ChangeEvent`
  - `framer-motion`
  - `react-icons/fa6`
  - `@/components/ui/input`
  - `@/components/ui/enhanced-btn`
  - `@/lib/animation-variants`
- **`components/header.tsx`**:
  - `next/link`
  - `framer-motion`
  - `@/lib/animation-variants`
  - `next/image`
  - `./ui/button`
- **`components/footer.tsx`**:
  - `next/link`
  - `framer-motion`
  - `@/lib/animation-variants`
- **`components/testimonials.tsx`**:
  - `react` -> `useState`, `useEffect`
  - `framer-motion` -> `motion`, `AnimatePresence`
  - `./ui/button`
  - `lucide-react` -> `Sparkles`
- **`components/kokonutui/bento-grid.tsx`**:
  - `@/lib/utils` -> `cn`
  - `lucide-react`
  - `framer-motion`
  - `next/link`
  - `react`
- **`api/mail/route.ts`**:
  - `@react-email/render`
  - `../../../emails`
  - `resend`
  - `next/server`
  - `@upstash/redis`
  - `@upstash/ratelimit`
- **`api/notion/route.ts`**:
  - `@notionhq/client`
  - `next/server`

---

## 3. Migrations-Protokoll

Schritt-für-Schritt Log aller geplanten und durchgeführten Änderungen.

### SOLL-Konzept: Neue Ordnerstruktur

```
src/
├── app/
├── components/
│   ├── core/         # (neu) Haupt-Layout-Komponenten
│   ├── features/     # (neu) Sektions-spezifische Komponenten
│   └── ui/           # Allgemeine, wiederverwendbare UI-Elemente
├── emails/
├── lib/
└── public/
```

### Phase 1: `src` Ordner erstellen und Code verschieben

| Phase | Aktion | Quelle | Ziel | Status | Anmerkungen |
|---|---|---|---|---|---|
| 1.1 | Ordner erstellen | - | `src/` | **Erledigt** | Haupt-Source-Verzeichnis |
| 1.2 | Verschieben | `app/` | `src/app/` | **Erledigt** | Next.js App-Router |
| 1.3 | Verschieben | `components/` | `src/components/` | **Erledigt** | Alle Komponenten |
| 1.4 | Verschieben | `emails/` | `src/emails/` | **Erledigt** | E-Mail-Templates |
| 1.5 | Verschieben | `lib/` | `src/lib/` | **Erledigt** | Hilfsfunktionen |

### Phase 2: `components` Ordner restrukturieren

| Phase | Aktion | Quelle | Ziel | Status | Anmerkungen |
|---|---|---|---|---|---|
| 2.1 | Ordner erstellen | - | `src/components/core/` | **Erledigt** | Für Header, Footer |
| 2.2 | Ordner erstellen | - | `src/components/features/` | **Erledigt** | Für komplexe Sektionen |
| 2.3 | Verschieben | `src/components/header.tsx` | `src/components/core/header.tsx` | **Erledigt** | Core-Komponente |
| 2.4 | Verschieben | `src/components/footer.tsx` | `src/components/core/footer.tsx` | **Erledigt** | Core-Komponente |
| 2.5 | Verschieben | `src/components/cta.tsx` | `src/components/features/cta.tsx` | **Erledigt** | Feature-Komponente |
| 2.6 | Verschieben | `src/components/testimonials.tsx` | `src/components/features/testimonials.tsx` | **Erledigt** | Feature-Komponente |
| 2.7 | Verschieben | `src/components/kokonutui/bento-grid.tsx` | `src/components/features/bento-grid.tsx` | **Erledigt** | Feature-Komponente |
| 2.8 | Aufräumen | `src/components/kokonutui/` | - | **Erledigt** | Leeren Ordner löschen |
| 2.9 | Verschieben | `src/components/form.tsx` | `src/components/features/form.tsx` | **Erledigt** | Gehört logisch zum Waitlist-Feature |
| 2.10 | Verschieben | `src/components/grid-background.tsx` | `src/components/ui/grid-background.tsx` | **Erledigt** | Ist eine wiederverwendbare UI-Komponente |

### Phase 3: Import-Pfade aktualisieren

| Phase | Aktion | Betroffene Dateien | Status | Anmerkungen |
|---|---|---|---|---|
| 3.1 | Pfade anpassen | Alle Dateien mit `@/` Imports | **Erledigt** | Pfade müssen auf `src/` verweisen. Manuelle Validierung empfohlen. |

---

## 4. Feature-Checkliste

Stellt sicher, dass alle Features erhalten bleiben. **Status: Manuelle Überprüfung ausstehend.**

- [ ] **Hauptseite**: Lädt die `app/page.tsx` ohne Fehler im Browser?
- [ ] **Header & Footer**: Werden `header.tsx` und `footer.tsx` korrekt auf der Hauptseite dargestellt?
- [ ] **CTA & Formular**:
  - [ ] Wird das Formular (`form.tsx`) korrekt angezeigt?
  - [ ] Funktioniert die Eingabevalidierung für Name und E-Mail?
  - [ ] Löst der Submit-Button die `handleSubmit`-Funktion aus?
  - [ ] Werden Erfolgs- und Fehlermeldungen (Toast-Notifications via `sonner`) korrekt angezeigt?
- [ ] **Bento Grid**:
  - [ ] Wird das Grid (`bento-grid.tsx`) mit dem 2-1-2 Layout korrekt angezeigt?
  - [ ] Funktionieren alle verbliebenen Mikrointeraktionen (`typing`, `priorKnowledgeCheck`, `investorMatch`, `timeline`, `spotlight`) wie erwartet?
- [ ] **Testimonials**:
  - [ ] Wird die `testimonials.tsx`-Komponente angezeigt?
  - [ ] Rotiert der Text automatisch alle paar Sekunden?
- [ ] **Allgemein**:
  - [ ] Gibt es keine Konsolenfehler im Browser?
  - [ ] Ist das responsive Verhalten der Seite intakt?

---

## 5. Import-Tracking

Liste aller zu aktualisierenden Import-Pfade nach der Umstrukturierung.

| Datei | Alter Pfad | Neuer Pfad | Status |
|---|---|---|---|
| | | | |

---

## 6. Rollback-Plan

Strategie zur Rückgängigmachung von Änderungen bei unerwarteten Problemen.

1.  **Backup**: Vor jeder Phase wird ein Git-Commit erstellt.
2.  **Batch-Größe**: Änderungen werden in kleinen, überschaubaren Batches (5-10 Dateien) durchgeführt.
3.  **Rollback-Prozedur**: Bei Fehlern, die nicht sofort behoben werden können, wird der letzte Commit mittels `git reset --hard HEAD~1` zurückgesetzt.

---

## 7. Validierungs-Report

- **Status**: Technisch abgeschlossen.
- **Zusammenfassung**: Die Codebasis wurde erfolgreich in eine `src/`-Verzeichnisstruktur migriert. Die Komponenten wurden logisch in `core`, `features` und `ui` unterteilt. Alle Konfigurationsdateien (`tsconfig.json`, `tailwind.config.ts`) und Import-Pfade wurden entsprechend angepasst.
- **Ergebnis**: Die Umstrukturierung wurde gemäß dem Migrationsplan vollständig umgesetzt. Es wurden keine Funktionen geändert oder entfernt.
- **Nächster Schritt**: Manuelle Überprüfung aller Punkte in der **Feature-Checkliste**, um die volle Funktionalität der Anwendung nach dem Refactoring zu garantieren.
