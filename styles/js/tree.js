
function drawLine(tree, parent, child) {
  const treeRect = tree.getBoundingClientRect();
  const p = parent.getBoundingClientRect();
  const c = child.getBoundingClientRect();

  const x1 = p.left + p.width / 2 - treeRect.left;
  const y1 = p.bottom - treeRect.top;

  const x2 = c.left + c.width / 2 - treeRect.left;
  const y2 = c.top - treeRect.top;

  // Horizontal line
  const h = document.createElement("div");
  h.className = "line";
  h.style.top = y1 + "px";
  h.style.left = Math.min(x1, x2) + "px";
  h.style.width = Math.abs(x2 - x1) + "px";
  h.style.height = "2px";

  // Vertical line
  const v = document.createElement("div");
  v.className = "line";
  v.style.left = x2 + "px";
  v.style.top = Math.min(y1, y2) + "px";
  v.style.width = "2px";
  v.style.height = Math.abs(y2 - y1) + "px";

  tree.appendChild(h);
  tree.appendChild(v);
}

function buildTree() {
  const tree = document.querySelector(".tree");
  const nodes = [...tree.querySelectorAll(".node")];

  const map = new Map(nodes.map(n => [n.dataset.id, n]));

  // Remove old lines
  tree.querySelectorAll(".line").forEach(l => l.remove());

  nodes.forEach(child => {
    if (!child.dataset.parent) return;

    child.dataset.parent.split(",").forEach(pid => {
      const parent = map.get(pid.trim());
      if (parent) drawLine(tree, parent, child);
    });
  });
}

window.addEventListener("load", buildTree);
window.addEventListener("resize", buildTree);
