**# Code Base Audit: Bereinigung überflüssiger Elemente**

Bitte führe eine systematische Analyse der gesamten Code Base des [Name der App oder des Ordners] durch mit folgendem Fokus:

**## 0. Setup und Dokumentation**
- Erstelle sofort eine zentrale Tracking-Datei "AUDIT_TRACKING.md" mit folgenden Sektionen:
  - **Komponenten-Inventar**: Vollständige Liste aller bestehenden Komponenten und Funktionen
  - **Abhängigkeits-Map**: Welche Komponente nutzt welche andere
  - **Bereinigungslog**: Dokumentation aller geplanten und durchgeführten Änderungen
  - **Funktionalitäts-Checkliste**: To-Do-Liste zur Überprüfung dass alle Features erhalten bleiben
- **WICHTIG**: Alle bestehenden Komponenten und Funktionen müssen 1:1 übernommen werden - es dürfen KEINE Features verloren gehen

**## 1. Datei-Audit**
- Identifiziere ungenutzte Dateien (JavaScript, CSS, HTML, Config-Dateien)
- Finde verwaiste Assets (Bilder, Icons, Fonts die nicht referenziert werden)
- Prüfe auf doppelte oder redundante Dateien
- Erkenne temporäre/Test-Dateien die versehentlich committet wurden
- **Dokumentiere jeden Fund in der AUDIT_TRACKING.md**

**## 2. Code-Audit**
- Analysiere ungenutzte Funktionen und Methoden
- Finde nicht referenzierte Variablen und Konstanten
- Identifiziere dead code (unerreichbare Code-Pfade)
- Prüfe auf ungenutzte Import/Export Statements
- **Aktualisiere kontinuierlich die Abhängigkeits-Map**

**## 3. Bereinigungsplan**
- Erstelle eine detaillierte Liste aller zu entfernenden Elemente
- Dokumentiere warum jedes Element als überflüssig eingestuft wird
- **Nutze die To-Do-Liste Feature intensiv**: Erstelle spezifische Aufgaben für jeden Bereinigungsschritt
- Stelle sicher, dass nach der Bereinigung alle Features weiterhin funktionieren

**## 4. To-Do-Listen Management**
- Erstelle separate To-Do-Listen für:
  - [ ] Jede Komponente die geprüft werden muss
  - [ ] Jeden geplanten Löschvorgang
  - [ ] Funktionalitätstests nach der Bereinigung
  - [ ] Finale Überprüfung aller Features
- **Hake ab und dokumentiere jeden abgeschlossenen Schritt**

**## Wichtige Hinweise**
- Führe **nur Löschungen** durch, **KEIN Refactoring**
- **ZERO TOLERANCE für Feature-Verlust**: Jede bestehende Funktion muss erhalten bleiben
- Teste nach jeder größeren Bereinigung die Funktionalität
- Dokumentiere alle vorgenommenen Änderungen in der AUDIT_TRACKING.md
- Nutze To-Do-Listen als primäres Organisationstool während des gesamten Prozesses

**Vorgehen:** 
1. Erstelle zuerst die AUDIT_TRACKING.md Datei
2. Führe die Analyse durch und dokumentiere alles
3. Präsentiere deine Findings
4. Erstelle detaillierte To-Do-Listen für die Bereinigung
5. Starte erst dann mit der Bereinigung

**Finale Kontrolle:** Am Ende muss anhand der AUDIT_TRACKING.md überprüfbar sein, dass alle ursprünglichen Komponenten und Funktionen vollständig erhalten geblieben sind.