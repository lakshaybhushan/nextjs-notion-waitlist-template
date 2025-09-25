**# Code Base Restructuring: Ordnerstruktur & Refactoring**

Bitte führe eine umfassende Analyse und Optimierung der Code Base Struktur des [Name der App oder des Ordners] durch:

**## 0. Setup und Dokumentation (KRITISCH)**
- Erstelle sofort eine zentrale Master-Datei "RESTRUCTURING_MASTER.md" mit folgenden Sektionen:
  - **Komponenten-Inventar**: Vollständige Liste aller bestehenden Komponenten, Funktionen und Features
  - **Abhängigkeits-Matrix**: Detaillierte Map aller Import/Export Beziehungen
  - **Migrations-Protokoll**: Schritt-für-Schritt Log aller geplanten und durchgeführten Änderungen
  - **Feature-Checkliste**: To-Do-Liste zur Überprüfung dass ALLE Features erhalten bleiben
  - **Import-Tracking**: Liste aller zu aktualisierenden Import-Pfade
  - **Rollback-Plan**: Dokumentation für eventuelle Rückgängigmachung

**## 1. Vorbereitung (MEHRSTUFIGER PROZESS)**
**Da dies ein komplexer, vielschichtiger Prozess ist, MUSS jeder Schritt intensiv vorbereitet werden:**

### Phase 1A: Bestandsaufnahme
- **To-Do**: [ ] Erstelle komplettes Inventar aller Dateien und Ordner
- **To-Do**: [ ] Dokumentiere jede Komponente mit ihrer Funktion
- **To-Do**: [ ] Erstelle Abhängigkeitsbaum aller Module
- **To-Do**: [ ] Liste alle Import/Export Statements auf
- **WICHTIG**: Keine Datei darf übersehen werden - 100% Vollständigkeit erforderlich

### Phase 1B: Risiko-Assessment
- **To-Do**: [ ] Identifiziere kritische Pfade (Core-Funktionalitäten)
- **To-Do**: [ ] Markiere besonders komplexe Abhängigkeiten
- **To-Do**: [ ] Definiere Test-Checkpoints für jede Phase
- **To-Do**: [ ] Erstelle Backup-Strategie

**## 2. Ordnerstruktur-Analyse (SYSTEMATISCH)**
### Phase 2A: IST-Zustand
- **Aktuelle Struktur bewerten:** Analysiere die bestehende Ordnerstruktur auf Logik und Konsistenz
- **To-Do**: [ ] Jeder Ordner einzeln analysieren und dokumentieren
- **To-Do**: [ ] Problembereiche identifizieren und priorisieren
- **Best Practices prüfen:** Vergleiche mit modernen Frontend/Backend Strukturierungsstandards
- **Skalierbarkeit bewerten:** Prüfe ob die Struktur für zukünftiges Wachstum der Codebase geeignet ist
- **Naming Conventions:** Überprüfe Konsistenz der Ordner- und Dateinamen

### Phase 2B: SOLL-Konzept
- **To-Do**: [ ] Neue Ordnerstruktur entwerfen
- **To-Do**: [ ] Jede Komponente dem neuen Ordner zuweisen
- **To-Do**: [ ] Migrationspfad für jede Datei planen

**## 3. Datei-Refactoring (SCHRITTWEISE)**
**### Phase 3A: Große Dateien aufteilen:**
- **To-Do**: [ ] Identifiziere Dateien > 200-300 Zeilen Code
- **To-Do**: [ ] Prüfe auf SOLID-Prinzipien Verletzungen für jede große Datei
- **To-Do**: [ ] Erkenne logische Trennlinien für Aufteilung
- **To-Do**: [ ] Extrahiere wiederverwendbare Komponenten/Module
- **To-Do**: [ ] Teste jede Aufteilung einzeln

**### Phase 3B: Kleine Dateien zusammenführen:**
- **To-Do**: [ ] Finde sehr kleine, zusammengehörige Dateien
- **To-Do**: [ ] Identifiziere ähnliche Funktionalitäten die konsolidiert werden können
- **To-Do**: [ ] Prüfe auf über-fragmentierte Module
- **To-Do**: [ ] Teste jede Zusammenführung einzeln

**## 4. Strukturverbesserungen (DETAILLIERTE PLANUNG)**
- **To-Do**: [ ] **Komponenten-Organisation:** Logische Gruppierung von UI-Komponenten planen
- **To-Do**: [ ] **Utility-Funktionen:** Zentrale Sammlung von Helper-Functions strukturieren
- **To-Do**: [ ] **Constants/Config:** Zentralisierung von Konfigurationsdateien planen
- **To-Do**: [ ] **Types/Interfaces:** Strukturierung von TypeScript Definitionen (falls vorhanden)
- **To-Do**: [ ] Import-Pfade für jede Verschiebung vorausplanen

**## 5. Umsetzungsplan (ULTRA-DETAILLIERT)**
### Phase 5A: Master-Migration-Plan
- **To-Do**: [ ] Erstelle detaillierte Übersicht der geplanten Änderungen (jede einzelne Datei)
- **To-Do**: [ ] Priorisiere Änderungen nach Aufwand/Nutzen
- **To-Do**: [ ] Definiere Batch-Größen (max. 5-10 Dateien pro Batch)
- **To-Do**: [ ] Erstelle Test-Checkpoints nach jedem Batch

### Phase 5B: Import-Update-Strategie
- **To-Do**: [ ] Liste ALLE zu ändernden Import-Statements auf
- **To-Do**: [ ] Erstelle Suchen-und-Ersetzen-Patterns
- **To-Do**: [ ] Definiere Validierungsschritte für jeden Import-Update

**## 6. Kontinuierliche To-Do-Listen Verwaltung**
- **Nutze To-Do-Listen INTENSIV für jeden Mikroschritt**
- **Erstelle separate Listen für:**
  - [ ] Jede zu verschiebende Datei
  - [ ] Jeden zu aktualisierenden Import
  - [ ] Jede zu testende Funktionalität
  - [ ] Jeden Validierungsschritt
- **Hake jeden Schritt ab und dokumentiere in RESTRUCTURING_MASTER.md**

**## 7. Validierung (UMFASSEND)**
- **To-Do**: [ ] **Funktionalität:** Alle Features müssen nach Refactoring weiterhin funktionieren
- **To-Do**: [ ] Teste jede Komponente einzeln
- **To-Do**: [ ] Validiere alle User-Flows
- **To-Do**: [ ] Überprüfe Build-Prozess
- **To-Do**: [ ] Verifiziere alle Import/Export Pfade

**## Deliverables (VOLLSTÄNDIG DOKUMENTIERT)**
1. **RESTRUCTURING_MASTER.md**: Zentrale Dokumentation des gesamten Prozesses
2. **Ist-Analyse:** Dokumentation der aktuellen Struktur mit identifizierten Problemen
3. **Soll-Konzept:** Vorgeschlagene neue Struktur mit Begründung
4. **Migration-Plan:** Schritt-für-Schritt Anleitung für die Umstrukturierung
5. **Refactored Code:** Implementierung der optimierten Struktur
6. **Validierungs-Report:** Nachweis dass alle Features erhalten sind

**## KRITISCHE Hinweise für vielschichtigen Prozess**
- **ZERO TOLERANCE für Feature-Verlust**: Jede bestehende Funktion muss 1:1 erhalten bleiben
- **Schritt-für-Schritt Pflicht**: Niemals mehr als 5-10 Dateien gleichzeitig bearbeiten
- **Kontinuierliche Dokumentation**: Jeder Mikroschritt muss in To-Do-Listen und Master-Datei erfasst werden
- **Validierung nach jedem Batch**: Nach jeder kleinen Änderung testen
- **Rollback-Bereitschaft**: Jederzeit muss ein Rücksprung möglich sein

**Vorgehen:** 
1. **ZUERST**: Erstelle RESTRUCTURING_MASTER.md und alle Inventare
2. **DANN**: Führe mehrstufige Analyse durch (Phase 1A, 1B, 2A, 2B...)
3. **ANSCHLIESSEND**: Präsentiere Findings mit komplettem Migrations-Plan
4. **NUR DANN**: Starte schrittweise Implementierung in kleinen Batches
5. **KONTINUIERLICH**: Aktualisiere To-Do-Listen und Dokumentation

**Finale Kontrolle:** Am Ende muss anhand der RESTRUCTURING_MASTER.md lückenlos nachvollziehbar sein, dass alle ursprünglichen Komponenten und Funktionen vollständig erhalten und korrekt migriert wurden.