// ===== LƯU THÔNG BÁO =====
function saveAnnouncement() {
    const input = document.getElementById("announcementInput");

    if (!input) {
        alert("Không tìm thấy ô nhập thông báo!");
        return;
    }

    const text = input.value.trim();

    if (text === "") {
        alert("Vui lòng nhập thông báo!");
        return;
    }

    localStorage.setItem("announcement", text);
    alert("Đã lưu thông báo thành công!");

    input.value = "";
}


// ===== HIỂN THỊ DANH SÁCH ĐÁNH GIÁ =====
window.onload = function () {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewList = document.getElementById("reviewList");

    if (reviewList) {
        if (reviews.length === 0) {
            reviewList.innerHTML = "<p>Chưa có đánh giá nào.</p>";
        } else {
            reviews.forEach((review, index) => {
                const div = document.createElement("div");
                div.className = "review-item";
                div.innerHTML = `
                    <p>${review}</p>
                    <button onclick="deleteReview(${index})">Xóa</button>
                `;
                reviewList.appendChild(div);
            });
        }
    }
};


// ===== XÓA ĐÁNH GIÁ =====
function deleteReview(index) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    location.reload();
}