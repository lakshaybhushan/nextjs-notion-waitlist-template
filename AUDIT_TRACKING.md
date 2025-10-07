# Code Base Audit Tracking

Dieses Dokument verfolgt die systematische Analyse und Bereinigung der Codebase.

## 1. Komponenten-Inventar

Hier wird eine vollständige Liste aller bestehenden Komponenten und Funktionen geführt.

### Komponenten (`src/components`)
- `core/footer.tsx`
- `core/header.tsx`
- `features/bento-grid.tsx`
- `features/cta.tsx`
- `features/form.tsx`
- `features/testimonials.tsx`
- `features/video.tsx`
- `ui/button.tsx`
- `ui/enhanced-btn.tsx`
- `ui/grid-background.tsx`
- `ui/input.tsx`
- `ui/navigation-menu.tsx`
- `ui/shimmer-text.tsx`
- `ui/sonner.tsx`
- `ui/text-blur.tsx`

### API Routes (`src/app/api`)
- `api/mail/route.ts`
- `api/notion/route.ts`

### E-Mail Templates (`src/emails`)
- `emails/index.tsx`

### Library Funktionen (`src/lib`)
- `lib/animation-variants.ts`
- `lib/utils.ts`

## 2. Abhängigkeits-Map

Hier wird dokumentiert, welche Komponente welche andere Komponente oder Funktion nutzt.

*Wird im nächsten Schritt befüllt.*

## 3. Bereinigungslog

Hier werden alle zur Löschung vorgeschlagenen und schlussendlich gelöschten Elemente mit Begründung dokumentiert.

| Datei / Komponente      | Status      | Begründung                                       |
| ----------------------- | ----------- | ------------------------------------------------ |
| `ui/enhanced-btn.tsx`   | Zu löschen  | Wird nach Formular-Umbau nicht mehr genutzt.   |
| `ui/input.tsx`          | Zu löschen  | Wird nach Formular-Umbau nicht mehr genutzt.   |
| `api/notion/route.ts`   | Zu löschen  | Wird nach Formular-Umbau nicht mehr genutzt.   |
| `public/sample-db.png`  | Zu löschen  | Wird nur in der README verwendet, nicht in der App. |
| `public/screenshot.png` | Zu löschen  | Wird nicht in der App verwendet.                |
| `public/waitlist-logo.png` | Zu löschen  | Wird nach E-Mail-Template-Update nicht mehr genutzt. |

## 4. Funktionalitäts-Checkliste

Diese Liste stellt sicher, dass alle wichtigen Features nach der Bereinigung weiterhin funktionieren.

- [ ] Header-Navigation funktioniert
- [ ] Hero-Sektion wird korrekt angezeigt
- [ ] "Mit Sales sprechen" Button scrollt zur Cal.com Sektion
- [ ] "How does it work?" Button scrollt zur How-it-works Sektion
- [ ] Testimonials werden korrekt angezeigt
- [ ] Demo-Video wird abgespielt
- [ ] Bento-Grid wird korrekt angezeigt
- [ ] Pricing-Tabelle wird korrekt angezeigt
- [ ] Cal.com Embed wird geladen und ist interaktiv
- [ ] Footer-Links funktionieren
- [ ] Impressum-Seite ist erreichbar
- [ ] Datenschutz-Seite ist erreichbar
