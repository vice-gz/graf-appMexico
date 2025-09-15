function updateColor(hexDisplay, rangeInput, stripeEl, baseHue) {
  let value = rangeInput.value; // luminosidad 20–80
  let hsl = `hsl(${baseHue}, 80%, ${value}%)`;

  hexDisplay.textContent = hsl;
  stripeEl.style.backgroundColor = hsl;

  document.getElementById(`${stripeEl.id.replace('Stripe', 'Box')}`).style.backgroundColor = hsl;
}

document.getElementById('greenRange').addEventListener('input', function(e) {
  updateColor(document.getElementById('greenHex'), e.target, document.getElementById('greenStripe'), 120);
});

document.getElementById('redRange').addEventListener('input', function(e) {
  updateColor(document.getElementById('redHex'), e.target, document.getElementById('redStripe'), 0);
});

// inicializar
updateColor(document.getElementById('greenHex'), document.getElementById('greenRange'), document.getElementById('greenStripe'), 120);
updateColor(document.getElementById('redHex'), document.getElementById('redRange'), document.getElementById('redStripe'), 0);
// Convierte HSL a HEX
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

  let R = Math.round((r + m) * 255);
  let G = Math.round((g + m) * 255);
  let B = Math.round((b + m) * 255);

  return "#" + [R, G, B].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
}

function updateColor(hexDisplay, rangeInput, stripeEl, baseHue) {
  let value = rangeInput.value; // luminosidad 20–80
  let hsl = `hsl(${baseHue}, 80%, ${value}%)`;
  let hex = hslToHex(baseHue, 80, value);

  hexDisplay.textContent = hex;
  stripeEl.style.backgroundColor = hsl;
  document.getElementById(`${stripeEl.id.replace('Stripe', 'Box')}`).style.backgroundColor = hsl;
}

document.getElementById('greenRange').addEventListener('input', function(e) {
  updateColor(document.getElementById('greenHex'), e.target, document.getElementById('greenStripe'), 120);
});

document.getElementById('redRange').addEventListener('input', function(e) {
  updateColor(document.getElementById('redHex'), e.target, document.getElementById('redStripe'), 0);
});

// Inicializar
updateColor(document.getElementById('greenHex'), document.getElementById('greenRange'), document.getElementById('greenStripe'), 120);
updateColor(document.getElementById('redHex'), document.getElementById('redRange'), document.getElementById('redStripe'), 0);
