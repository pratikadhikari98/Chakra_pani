(function () {
  // ─── CARD HOVER MICRO ───
  document.querySelectorAll(".clay-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, {
        rotateY: x * 4,
        rotateX: -y * 4,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 900
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "elastic.out(1,.6)"
      });
    });
  });
  // ─── HEADER NAV PILL: animated indicator ───
  const pills = document.querySelectorAll(".nav-pill");
  pills.forEach((p) => {
    p.addEventListener("click", (e) => {
      e.preventDefault();
      pills.forEach((x) => x.classList.remove("active"));
      p.classList.add("active");
    });
  });
  // Magnetic effect on header CTA
  const cta = document.querySelector(".header-cta");
  if (cta && !window.matchMedia("(pointer: coarse)").matches) {
    cta.addEventListener("mousemove", (e) => {
      const r = cta.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      gsap.to(cta, {
        x: x * 6,
        y: y * 6,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    cta.addEventListener("mouseleave", () => {
      gsap.to(cta, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1,.5)"
      });
    });
  }
  // Resource list: change active on click
  const resItems = document.querySelectorAll(".res-item");
  resItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      resItems.forEach((r) => r.classList.remove("active"));
      item.classList.add("active");
    });
  });
})();
