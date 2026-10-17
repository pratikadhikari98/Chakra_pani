(function () {
  var items = document.querySelectorAll(".res-item");
  items.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      items.forEach(function (r) { r.classList.remove("active"); });
      item.classList.add("active");
    });
  });
})();
(function () {
  var c = document.querySelector(".photo-post");
  if (!c) return;
  var like = c.querySelector(".act-like"), cnt = c.querySelector(".like-count"), liked = false, n = 0;
  like.addEventListener("click", function () {
    liked = !liked; n += liked ? 1 : -1; cnt.textContent = n;
    like.style.color = liked ? "#e0566b" : "";
    like.querySelector("svg").style.fill = liked ? "#e0566b" : "none";
  });
  var box = c.querySelector(".comment-box"), inp = c.querySelector(".comment-input"), list = c.querySelector(".comment-list");
  c.querySelector(".act-comment").addEventListener("click", function () {
    box.style.display = box.style.display === "none" ? "block" : "none";
    if (box.style.display === "block") inp.focus();
  });
  function send() {
    var t = inp.value.trim(); if (!t) return;
    var d = document.createElement("div"); d.textContent = t; list.appendChild(d); inp.value = "";
  }
  c.querySelector(".comment-send").addEventListener("click", send);
  inp.addEventListener("keydown", function (e) { if (e.key === "Enter") send(); });
  c.querySelector(".act-share").addEventListener("click", function () {
    var url = location.href;
    if (navigator.share) { navigator.share({ title: document.title, url: url }).catch(function () {}); }
    else if (navigator.clipboard) { navigator.clipboard.writeText(url).then(function () { alert("लिंक कपी भयो"); }); }
  });
})();