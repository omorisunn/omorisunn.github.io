// 研究树移动端手势：单指拖动平移，双指捏合缩放
(function () {
  window.__adFixStarted = true;
  const isMobile = () => window.matchMedia("(max-width: 900px)").matches;
  const MIN_SCALE = 0.3;
  const MAX_SCALE = 2.5;
  let tree = null;
  let container = null;
  let state = { scale: 0.8, x: 0, y: 0 };
  let gesture = null;

  function resetState(el, holder) {
    tree = el;
    container = holder;
    el.style.setProperty("touch-action", "none", "important");
    const holderW = holder.clientWidth || window.innerWidth;
    const treeW = el.offsetWidth;
    state = {
      scale: 0.8,
      x: Math.max(0, (holderW - treeW * 0.8) / 2),
      y: 0,
    };
    apply();
  }

  function apply() {
    if (!tree) return;
    tree.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
    tree.style.transformOrigin = "0 0";
  }

  function findHolder(target) {
    const el = target.closest(".l-time-study-tree");
    if (!el) return null;
    el.style.setProperty("touch-action", "none", "important");
    return { el, holder: el.parentElement };
  }

  document.addEventListener("touchstart", e => {
    if (!isMobile() || e.touches.length === 0) return;
    const found = findHolder(e.target);
    if (!found) return;
    tree = found.el;
    container = found.holder;
    if (e.touches.length === 1) {
      gesture = {
        mode: "pan",
        id: e.touches[0].identifier,
        lastX: e.touches[0].clientX,
        lastY: e.touches[0].clientY,
      };
    } else if (e.touches.length === 2) {
      const t0 = e.touches[0];
      const t1 = e.touches[1];
      gesture = {
        mode: "pinch",
        id0: t0.identifier,
        id1: t1.identifier,
        startDist: Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY),
        startScale: state.scale,
        startX: state.x,
        startY: state.y,
        midX: (t0.clientX + t1.clientX) / 2,
        midY: (t0.clientY + t1.clientY) / 2,
      };
      e.preventDefault();
    }
  }, { passive: true });

  document.addEventListener("touchmove", e => {
    if (!isMobile() || !gesture || !tree) return;
    if (gesture.mode === "pan") {
      const t = Array.from(e.touches).find(t => t.identifier === gesture.id);
      if (!t) return;
      state.x += t.clientX - gesture.lastX;
      state.y += t.clientY - gesture.lastY;
      gesture.lastX = t.clientX;
      gesture.lastY = t.clientY;
      apply();
    } else if (gesture.mode === "pinch") {
      const t0 = Array.from(e.touches).find(t => t.identifier === gesture.id0);
      const t1 = Array.from(e.touches).find(t => t.identifier === gesture.id1);
      if (!t0 || !t1) return;
      const dist = Math.hypot(t1.clientX - t0.clientX, t1.clientY - t0.clientY);
      if (dist === 0) return;
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, gesture.startScale * dist / gesture.startDist));
      const ratio = next / state.scale;
      state.x = gesture.midX - (gesture.midX - gesture.startX) * ratio;
      state.y = gesture.midY - (gesture.midY - gesture.startY) * ratio;
      state.scale = next;
      apply();
    }
    e.preventDefault();
  }, { passive: false });

  function endGesture() {
    gesture = null;
  }
  document.addEventListener("touchend", endGesture);
  document.addEventListener("touchcancel", endGesture);

  const observer = new MutationObserver(() => {
    if (!isMobile()) return;
    const el = document.querySelector(".l-time-study-tree");
    if (el && el !== tree) resetState(el, el.parentElement);
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  setInterval(() => {
    if (!isMobile()) return;
    const el = document.querySelector(".l-time-study-tree");
    if (el && el !== tree) resetState(el, el.parentElement);
  }, 500);
  window.__adFixReady = true;
})();
