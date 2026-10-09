/* ============================================================
   icons.js — Lucide-style SVG icon set
   ------------------------------------------------------------
   The ESP brand guide forbids emoji in formal materials.
   Every visual icon in the app uses this module. Stroke 1.5px,
   currentColor for stroke, no fill (unless noted) — matches
   Lucide / the ESP system spec.
   ============================================================ */

const ICONS = {
  // Bottom-nav icons
  home: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z"/>',
  map:  '<polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7"/><line x1="9" y1="4" x2="9" y2="17"/><line x1="15" y1="7" x2="15" y2="20"/>',
  chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',

  // Task / proof icons
  signature: '<path d="M3 18h18"/><path d="M5 13s2-5 5-5 4 4 7 2 4-3 4-3"/>',
  camera:    '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  quiz:      '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  check:     '<polyline points="20 6 9 17 4 12"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><polyline points="16 10 11 15 8 12"/>',

  // Misc
  arrowLeft: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  award:     '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  key:       '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
};

/**
 * Render an SVG icon as an HTML string.
 *   icon('home')              → 24px icon
 *   icon('camera', 18)        → 18px icon
 *   icon('check', 16, 'lime') → 16px icon with stroke color
 */
function icon(name, size, color) {
  size = size || 24;
  const inner = ICONS[name];
  if (!inner) return '';
  const stroke = color ? ` stroke="${color}"` : '';
  return `<svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"${stroke}>${inner}</svg>`;
}

// Map a task's proof type to its icon name
function taskIcon(task) {
  if (task.proof === "Signature") return "signature";
  if (task.proof === "Photo")     return "camera";
  if (task.proof === "Quiz")      return "quiz";
  return "check";
}

// Make available globally
window.icon = icon;
window.taskIcon = taskIcon;
window.ICONS = ICONS;
