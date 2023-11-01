function submitComplete() {
    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value;
    if (commentText.trim() === "") {
        alert("댓글 작성 필요");
        return;
    }
    const commentsBox = document.getElementById("comments");
    const commentDIV = document.createElement("div");
    commentDIV.className = "comment";
    commentDIV.textContent = commentText;
    commentsBox.appendChild(commentDIV);
    commentInput.value = "";
}

// 페이지
const images = [
    '../coding.jpg',
    '../ㅋ.png',
];
const imagesPerPage = 1;
let currentPage = 0;

const imagesContainer = document.querySelector("#img-container");
const prevButton = document.querySelector("#prevPage");
const nextButton = document.querySelector("#nextPage");

function displayImg(page) {
    const startIndex = page * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const pageImages = images.slice(startIndex, endIndex);

    imagesContainer.innerHTML = "";
    pageImages.forEach(images => {
        const imgElement = document.createElement("img");
        imgElement.src = images;
        imgElement.classList.add("image");
        imagesContainer.appendChild(imgElement);
    });
}

function updateButtons() {
    prevButton.disabled = currentPage === 0;
    nextButton.disabled = (currentPage + 1) * imagesPerPage >= images.length;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        displayImg(currentPage);
        updateButtons();
    }
});

nextButton.addEventListener("click", () => {
    if ((currentPage + 1) * imagesPerPage < images.length) {
        currentPage++;
        displayImg(currentPage);
        updateButtons();
    }
});

displayImg(currentPage);

// 이미지 업로드
document.querySelector("#uploadButton").addEventListener("click", function() {
    var fileInput = document.querySelector("#fileInput");
    var uploadImage = document.querySelector("#uploadImage");
    var imageContainer = document.querySelector("#imageContainer");

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
            uploadImage.src = e.target.result;
            imageContainer.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        alert("이미지 파일을 선택하세요.");
    }
});