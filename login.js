window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const header = document.querySelector(".top-box");

  // Header trượt xuống khi load
  if (header) {
    header.classList.add("start");
    setTimeout(() => {
      header.classList.remove("start");
      header.classList.add("slide-down");
    }, 50);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("loginForm");
  let header = document.querySelector(".top-box");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = [
      { username: "24004190", password: "k49@fit" },
      { username: "24004206", password: "k49@fit" },
      { username: "24004207", password: "k49@fit" },
      { username: "24004181", password: "k49@fit" },
    ];

    let found = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (found) {
      localStorage.setItem("loggedInUser", username);

      // Header trượt lên
      if (header) {
        header.classList.remove("slide-down");
        header.classList.add("slide-up");
      }

      // Fade out body
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "home.html";
      }, 600);
    } else {
        let overlay = document.getElementById("overlay");
        let formBox = document.querySelector(".login-box");
        if (overlay) {
          overlay.classList.add("active");
        }
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
