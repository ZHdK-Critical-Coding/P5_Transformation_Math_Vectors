# P5.js: Vectors

[Deutsch](README_DE.md)

Two eyes follow the mouse. `p5.Vector` is used to limit the pupil movement
to the eyeball, and helper lines and points show the vectors involved. A
starting point for working with directions and distances using vectors.

Further reading: [Nature of Code – Vectors](https://natureofcode.com/vectors/),
[p5.Vector reference](https://p5js.org/reference/p5/p5.Vector/)

## Installation

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Move the mouse over the canvas.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not used).

## Coding Help

- **`sketch.js` → `draw()`**: computes the sizes from the canvas width:
  `eyeRadius` (width / 8), `pupilRadius` (eyeRadius / 6) and `maxOffset`,
  the furthest the pupil may move from the centre. Creates the two eye
  positions with `createVector()` and calls `drawEye()` for each.
- **`drawEye()`**: draws the eyeball, then builds `dir`, the vector from
  the eye centre to the mouse. If `dir.mag()` is larger than `maxOffset`,
  `dir.setMag(maxOffset)` shortens it without changing its direction. The
  pupil is drawn at `p5.Vector.add(center, dir)`.
- **Visualisation**: the line from the eye centre to the mouse, and red
  dots at the centre, at the mouse and where that line crosses the eyeball
  (the same direction scaled to `eyeRadius`). Remove this block for plain
  eyes.
