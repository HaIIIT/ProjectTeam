window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const header = document.querySelector(".top-box");

  // Header trượt xuống khi vào trang
  if (header) {
    header.classList.add("start");

    setTimeout(() => {
      header.classList.remove("start");
      header.classList.add("slide-down");
    }, 50);
  }

  // Hiển thị tên user nếu có
  const user = localStorage.getItem("loggedInUser");
  if (user && header) {
    const title = document.querySelector(".header-title");
    if (title) {
      title.textContent = "Bảng Đánh Giá";
    }
  }
});

// Nếu có nút logout thì thêm cái này
document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.querySelector(".logout-btn");
  const header = document.querySelector(".top-box");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      if (header) {
        header.classList.remove("slide-down");
        header.classList.add("slide-up");
      }

      document.body.classList.add("fade-out");

      setTimeout(() => {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
      }, 600);
    });
  }
});
/* */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");

    menuBtn.innerHTML = sideMenu.classList.contains("active") ? "✖" : "☰";
  });
});
