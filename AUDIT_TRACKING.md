# Code Base Audit: Tracking

Dieses Dokument verfolgt die Analyse und Bereinigung der Codebasis gemäß den Anweisungen in `audit.md`.

## 0. Setup und Dokumentation

- **Tracking-Datei**: `AUDIT_TRACKING.md` (dieses Dokument) wurde erstellt.
- **Prinzipien**: Es werden nur Löschungen durchgeführt, kein Refactoring. Alle Features müssen erhalten bleiben.

---

## 1. Komponenten-Inventar

Hier werden alle Komponenten und ihre Funktionen aufgelistet.

- `cta.tsx`: Call-to-Action Sektion.
- `footer.tsx`: Footer der Seite.
- `form.tsx`: Formular zur Eingabe von E-Mail-Adressen für die Warteliste.
- `grid-background.tsx`: Hintergrund mit Gittermuster.
- `header.tsx`: Header der Seite.
- `testimonials.tsx`: Testimonials-Sektion.
- `icons/`: Verschiedene Icon-Komponenten.
  - `anthropic-dark.tsx`
  - `anthropic.tsx`
  - `deepseek.tsx`
  - `gemini.tsx`
  - `mistral.tsx`
  - `open-ai-dark.tsx`
  - `open-ai.tsx`
- `kokonutui/bento-grid.tsx`: Bento-Grid-Layout zur Darstellung von Features.
- `ui/`: UI-Elemente.
  - `button.tsx`: Standard-Button.
  - `enhanced-btn.tsx`: Button mit erweitertem Styling.
  - `input.tsx`: Standard-Input-Feld.
  - `particles.tsx`: Partikel-Animation.
  - `shimmer-text.tsx`: Text mit Schimmer-Effekt.
  - `sonner.tsx`: Komponente für Benachrichtigungen.
  - `text-blur.tsx`: Text mit Blur-Effekt.

---

## 2. Abhängigkeits-Map

Diese Sektion zeigt, welche Komponente von welcher anderen genutzt wird.

- **`app/page.tsx`** (Hauptseite) nutzt:
  - `components/cta.tsx`
  - `components/form.tsx`
  - `components/header.tsx`
  - `components/footer.tsx`
  - `components/testimonials.tsx`
  - `components/grid-background.tsx`
  - `components/kokonutui/bento-grid.tsx`
  - `components/ui/particles.tsx` (auskommentiert)

*Wird erweitert...*

---

## 3. Bereinigungslog

Hier werden alle geplanten und durchgeführten Änderungen dokumentiert.

| Element | Pfad | Grund für Entfernung | Status |
|---|---|---|---|
| `Image` component | `app/page.tsx` | Auskommentiert, scheint nicht verwendet zu werden. | **Geplant** |
| `Particles` component | `app/page.tsx` | Auskommentiert, scheint nicht verwendet zu werden. | **Geplant** |
| `Mic`, `Plus` (lucide-react) | `components/kokonutui/bento-grid.tsx` | Importiert, aber in keiner aktiven `feature`-Komponente verwendet. | **Geplant** |
| `Clock`, `Sparkles`, `Zap` (lucide-react) | `components/kokonutui/bento-grid.tsx` | Werden nur in `MetricsFeature` genutzt, das aber keiner `BentoItem` zugewiesen ist. | **Geplant** |
| `IconsFeature`-Komponente und alle `components/icons/*` | `components/kokonutui/bento-grid.tsx` | Das `icons`-Feature wird keiner `BentoItem` zugewiesen. | **Geplant** |
| `CounterAnimation`, `ChartAnimation` | `components/kokonutui/bento-grid.tsx` | Die Features `counter` und `chart` werden nicht genutzt. | **Geplant** |
| `AIInput_Voice` | `components/kokonutui/bento-grid.tsx` | Die Komponente wird definiert, aber nirgends aufgerufen. | **Erledigt** |
| `sample-db.png` | `public/` | Wird nur in der `README.md` referenziert, nicht in der App selbst. | **Erledigt** |
| `screenshot.png` | `public/` | Wird nur in einem auskommentierten Code-Block in `app/page.tsx` verwendet. | **Erledigt** |
| `components/ui/particles.tsx` | `components/ui/` | Komponente wurde nirgends verwendet. | **Erledigt** |
| `components/icons/*` | `components/` | Alle Icons waren ungenutzt nach Entfernung von `IconsFeature`. | **Erledigt** |

---

## 4. Funktionalitäts-Checkliste

Diese Checkliste stellt sicher, dass alle ursprünglichen Features nach der Bereinigung noch funktionieren.

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
