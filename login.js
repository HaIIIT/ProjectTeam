// ===== HIỆU ỨNG LOAD TRANG =====
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const header = document.querySelector(".top-box");

  if (header) {
    header.classList.add("start");
    setTimeout(() => {
      header.classList.remove("start");
      header.classList.add("slide-down");
    }, 50);
  }
});

// ===== XỬ LÝ ĐĂNG NHẬP =====
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");
  const header = document.querySelector(".top-box");

  // ===== DANH SÁCH TÀI KHOẢN =====
  const users = [
    { username: "24004190", password: "k49@fit", role: "user" },
    { username: "24004206", password: "k49@fit", role: "user" },
    { username: "24004207", password: "k49@fit", role: "user" },
    { username: "24004181", password: "k49@fit", role: "user" },

    // ===== ADMIN =====
    { username: "admin", password: "admin123", role: "admin" }
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const found = users.find(
      (user) => user.username === username && user.password === password
    );

    if (found) {

      // ===== LƯU SESSION =====
      localStorage.setItem("loggedInUser", found.username);
      localStorage.setItem("role", found.role);

      // ===== HIỆU ỨNG CHUYỂN TRANG =====
      if (header) {
        header.classList.remove("slide-down");
        header.classList.add("slide-up");
      }

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "home.html";
      }, 600);

    } else {

      // ===== HIỆN POPUP LỖI =====
      const overlay = document.getElementById("overlay");
      const formBox = document.querySelector(".login-box");

      if (overlay) overlay.classList.add("active");

      if (formBox) {
        formBox.classList.add("shake");
        setTimeout(() => {
          formBox.classList.remove("shake");
        }, 400);
      }

      setTimeout(() => {
        if (overlay) overlay.classList.remove("active");
      }, 3000);
    }
  });
});