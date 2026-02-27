// =======================
// IMPORT FIREBASE
// =======================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// =======================
// FIREBASE CONFIG
// =======================

const firebaseConfig = {
  apiKey: "AIzaSyDzM7R0ouQEhDSUzuU9qgIWA3i1R6nUEFw",
  authDomain: "project-team-e56f5.firebaseapp.com",
  projectId: "project-team-e56f5",
  storageBucket: "project-team-e56f5.firebasestorage.app",
  messagingSenderId: "133552329351",
  appId: "1:133552329351:web:8fef87ddc422f9d3a59e22",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// =======================
// CHỜ DOM LOAD XONG
// =======================

document.addEventListener("DOMContentLoaded", () => {
  // ===== HEADER ANIMATION =====
  const header = document.querySelector(".top-box");

  if (header) {
    header.classList.add("start");
    setTimeout(() => {
      header.classList.remove("start");
      header.classList.add("slide-down");
    }, 50);
  }

  // ===== LOGOUT =====
  const logoutBtn = document.querySelector(".logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
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

  // ===== MENU =====
  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");

  if (menuBtn && sideMenu) {
    menuBtn.addEventListener("click", () => {
      sideMenu.classList.toggle("active");
      menuBtn.classList.toggle("active");
      menuBtn.innerHTML = sideMenu.classList.contains("active") ? "✖" : "☰";
    });
  }

  // ===== MODAL =====
  const modal = document.getElementById("registerModal");
  const registerBtn = document.querySelector(".register-btn");

  if (registerBtn && modal) {
    registerBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  window.closeModal = function () {
    if (modal) modal.style.display = "none";
  };
  window.closeSuccess = function () {
  const successModal = document.getElementById("successModal");
  if (successModal) successModal.style.display = "none";
};

  // ===== FORM SUBMIT (CHỈ 1 LẦN DUY NHẤT) =====
  const form = document.getElementById("registerForm");

  if (!form) {
    console.error("Không tìm thấy registerForm!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const mssv = document.getElementById("mssv").value;
    const sensor = document.getElementById("sensor").value;

    console.log("DATA:", fullname, mssv, sensor);

    try {
      await addDoc(collection(db, "registrations"), {
        fullname,
        mssv,
        sensor,
        status: "pending",
        created_at: new Date(),
      });

      form.reset();

      if (modal) modal.style.display = "none";

      document.getElementById("successModal").style.display = "flex";
    } catch (error) {
      console.error("Lỗi Firebase:", error);
      alert("Lỗi khi gửi dữ liệu!");
    }
  });
});
