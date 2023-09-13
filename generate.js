const leftBrands = ["SYCL", "Sycl", "Cpp", "CPP", "C++", "one"];
const rightBrands = ["SYCL", "Sycl", "Cpp", "CPP", "C++", "++"];
const fonts = ["Comic Sans MS", "Papyrus", "Arial Black", "Times New Roman"];

function chooseFrom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

function generateSyclName(word_list) {
    let left, right;
    if (Math.random() > 0.3) {
        left = chooseFrom(word_list);
        right = chooseFrom(rightBrands);
        if (Math.random() > 0.3) {
            left = left.toProperCase();
        }
    } else {
        left = chooseFrom(leftBrands);
        right = chooseFrom(word_list);
    }
    if (left.charAt(left.length - 1) == left.charAt(left.length - 1).toLowerCase() && right.charAt(0) == right.charAt(0).toLowerCase()) {
        right = right.toProperCase();
    }
    return [left, right];
}

const { abs, min, max, round } = Math;

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from https://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1/3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1/3);
  }

  return [round(r * 255), round(g * 255), round(b * 255)];
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}
function generateStyle() {
    const leftFont = chooseFrom(fonts);
    const rightFont = chooseFrom(fonts);
    const leftColor = hslToRgb(Math.random(), 0.75, 0.5);
    const rightColor = hslToRgb(Math.random(), 0.75, 0.5);
    const scale = Math.random() * 200 + 300;
    const rot = Math.random() * 40 - 20;
    return [
        `margin-bottom: 3cm; color: white; transform: scale(${scale}%) rotate(${rot}deg)`,
        `font-family: ${leftFont}; color: rgb(${leftColor[0]}, ${leftColor[1]}, ${leftColor[2]})`,
        `font-family: ${rightFont}; color: rgb(${rightColor[0]}, ${rightColor[1]}, ${rightColor[2]})`
    ]
}