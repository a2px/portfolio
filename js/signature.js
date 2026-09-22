(function () {
  function buildSignature() {
    var container = document.getElementById('hero-signature');
    if (!container || !window.opentype) {
      if (container) container.textContent = 'Ashley Xie';
      return;
    }

    fetch('/fonts/LastoriaBoldRegular.otf')
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) {
        var font = opentype.parse(buf);
        render(font);
      })
      .catch(function () { container.textContent = 'Ashley Xie'; });

    function render(font) {

      var text = 'Ashley Xie';
      var fontSize = 72;
      var svgNS = 'http://www.w3.org/2000/svg';

      // Build one SVG path element per non-space character
      var charPathData = [];
      var cursorX = 0;

      for (var i = 0; i < text.length; i++) {
        var ch = text[i];
        var glyph = font.charToGlyph(ch);
        var advance = (glyph.advanceWidth / font.unitsPerEm) * fontSize;

        if (ch !== ' ') {
          var p = font.getPath(ch, cursorX, 0, fontSize);
          charPathData.push(p.toPathData(4));
        }
        cursorX += advance;
      }

      // Bounding box for the full string (baseline at y=0)
      var fullPath = font.getPath(text, 0, 0, fontSize);
      var bb = fullPath.getBoundingBox();
      var pad = 4;
      var vbX = bb.x1 - pad;
      var vbY = bb.y1 - pad;
      var vbW = bb.x2 - bb.x1 + pad * 2;
      var vbH = bb.y2 - bb.y1 + pad * 2;

      // Fraction of the SVG height that is above the baseline (y=0)
      var baselineFrac = (-vbY) / vbH;

      var svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', [vbX, vbY, vbW, vbH].join(' '));
      svg.setAttribute('aria-hidden', 'true');
      svg.style.display = 'inline-block';
      svg.style.height = '1.35em';
      svg.style.width = 'auto';
      svg.style.overflow = 'visible';
      // Align baseline, then shift up to visually center with surrounding text
      svg.style.verticalAlign = (-((1 - baselineFrac) * 1.35) + 0.28).toFixed(3) + 'em';

      var pathEls = charPathData.map(function (d) {
        var el = document.createElementNS(svgNS, 'path');
        el.setAttribute('d', d);
        el.setAttribute('fill', 'currentColor');
        el.setAttribute('fill-opacity', '0');
        el.setAttribute('stroke', 'currentColor');
        el.setAttribute('stroke-width', '2.5');
        el.setAttribute('stroke-linecap', 'round');
        el.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(el);
        return el;
      });

      container.appendChild(svg);

      // Measure path lengths after layout, then trigger the draw animation
      requestAnimationFrame(function () {
        pathEls.forEach(function (el) {
          var len = el.getTotalLength();
          el.style.strokeDasharray = len;
          el.style.strokeDashoffset = len;
        });

        requestAnimationFrame(function () {
          pathEls.forEach(function (el, idx) {
            var strokeDelay = 0.15 + idx * 0.12;
            var fillDelay = strokeDelay + 0.55;
            el.style.transition = [
              'stroke-dashoffset 0.55s cubic-bezier(0.4,0,0.2,1) ' + strokeDelay.toFixed(2) + 's',
              'fill-opacity 0.25s ease ' + fillDelay.toFixed(2) + 's',
              'stroke-opacity 0.25s ease ' + fillDelay.toFixed(2) + 's'
            ].join(', ');
            el.style.strokeDashoffset = '0';
            el.style.fillOpacity = '1';
            el.style.strokeOpacity = '0';
          });
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSignature);
  } else {
    buildSignature();
  }
})();
