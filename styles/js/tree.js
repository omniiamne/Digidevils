function connectNodes(parent, child) {
  const p = parent.getBoundingClientRect();
  const c = child.getBoundingClientRect();

  const x1 = p.left + p.width / 2 + window.scrollX;
  const y1 = p.bottom + window.scrollY;

  const x2 = c.left + c.width / 2 + window.scrollX;
  const y2 = c.top + window.scrollY;

  // Горизонтальная линия
  const h = document.createElement("div");
  h.className = "line";
  h.style.top = y1 + "px";
  h.style.left = Math.min(x1, x2) + "px";
  h.style.width = Math.abs(x2 - x1) + "px";
  h.style.height = "2px";

  // Вертикальная линия
  const v = document.createElement("div");
  v.className = "line";
  v.style.left = x2 + "px";
  v.style.top = y1 + "px";
