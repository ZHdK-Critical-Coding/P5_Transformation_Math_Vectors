# P5.js: Vectors

[English](readme.md)

Zwei Augen folgen der Maus. Mit `p5.Vector` wird die Bewegung der Pupille
auf den Augapfel begrenzt, Hilfslinien und Punkte zeigen die beteiligten
Vektoren. Ein Ausgangspunkt, um mit Richtungen und Abständen als Vektoren
zu arbeiten.

Weiterlesen: [Nature of Code – Vectors](https://natureofcode.com/vectors/),
[p5.Vector-Referenz](https://p5js.org/reference/p5/p5.Vector/)

## Installation

Voraussetzungen: Visual Studio Code mit der Erweiterung Live Server und ein
aktueller Browser.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet).

## Ausführen

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. Die Maus über die Zeichenfläche bewegen.

## Coding-Hilfe

- **`sketch.js` → `draw()`**: berechnet die Grössen aus der Breite der
  Zeichenfläche: `eyeRadius` (Breite / 8), `pupilRadius` (eyeRadius / 6)
  und `maxOffset`, wie weit sich die Pupille höchstens von der Mitte
  entfernen darf. Erstellt die zwei Augenpositionen mit `createVector()` und
  ruft für jede `drawEye()` auf.
- **`drawEye()`**: zeichnet den Augapfel und bildet dann `dir`, den Vektor
  von der Augenmitte zur Maus. Ist `dir.mag()` grösser als `maxOffset`,
  kürzt `dir.setMag(maxOffset)` ihn, ohne die Richtung zu ändern. Die
  Pupille wird bei `p5.Vector.add(center, dir)` gezeichnet.
- **Visualisierung**: die Linie von der Augenmitte zur Maus sowie rote
  Punkte in der Mitte, bei der Maus und dort, wo die Linie den Augapfel
  schneidet (dieselbe Richtung, auf `eyeRadius` skaliert). Für schlichte
  Augen diesen Block entfernen.
