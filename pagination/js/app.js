const images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
];
const imagesPerPage = 2;    // 한 페이지에 표시되는 이미지 수
let currentPage = 0;    // 현재 페이지 표시

const imageContainer = document.querySelector(".img-container");
const prevButton = document.querySelector("#prevPage");
const nextButton = document.querySelector("#nextPage");

/*
diplayImg(page) : page는 현재 페이지 번호를 나타냄
                  호출될 때마다 페이지를 전환하고 해당 페이지의 이미지를 표시하는데 사용
                  함수를 호출하는 공간에서 page 값을 전달하면 함수는 해당 페이지에 해당하는 이미지를 표시
                  display(0) : 첫 번재 페이지에 해당하는 이미지 표시
                  display(1) : 두 번째 "
*/
function displayImg(page) { // 이미지 표시 함수의 시작
    const startIndex = page * imagesPerPage;    // 현재 페이지 번호(page)와 페이지 당 이미지 수(imagesPerPage)를 곱해서 시작 인덱스를 계산 // 페이지 내에서 표시할 이미지의 첫번째 이미지 인덱스를 나타냄
    const endIndex = startIndex + imagesPerPage;    // 시작 인덱스에 페이지당 이미지 수를 더해서 종료 인덱스를 계산 // 페이지 내에서 표시할 마지막 이미지 다음 인덱스를 나타냄
    const pageImages = images.slice(startIndex, endIndex);  // 시작 인덱스에 페이지 당 이미지 수를 더해서 종료 인덱스를 계산 // 페이지 내에서 표시할 이미지의 마지막 이미지 다음 인덱스를 표시 // 이미지 배열(images)에서 시작 인덱스와 종료 인덱스 사이에 이미지를 추출해서 pageImages 배열에 저장 이 배열은 현재 페이지에 표시될 이미지들을 담고 있음
    
    imageContainer.innerHTML = '';  // 이미지 표시할 컨테이너 초기화
    pageImages.forEach(images => {  // 배열에 있는 이미지들을 반복 처리
        const imgElement = document.createElement("img");   // 각 이미지를 표시하기 위한 <img>태그 요소 생성
        imgElement.src = images;    // <img>태그의 src속성을 images(현재 이미지의 파일 경로)로 설정
        imgElement.classList.add('image');  // <img>태그에 image클래스를 추가하여 추후 이미지 스타일을 적용
        imageContainer.appendChild(imgElement);
    });
}

function updateButtons() {  // 버튼 업데이트
/* prevButton.disabled 이전 버튼 활성화 비활성화 시키는 기능
첫번째 페이지일 경우에는 이전 버튼을 비활성화 시켜 이전 버튼을 클릭하지 못하도록
*/
    prevButton.disabled = currentPage === 0;

    // 마지막 페이지에서 다음 버튼을 클릭할 수 없도록
    nextButton.disabled = (currentPage + 1) * imagesPerPage >= images.length;    // 다음 페이지에 해당하는 이미지가 이미지 배열을 벗어나는지 확인. 다음 페이지에 이미지가 더이상 없을 때 다음 버튼 비활성화
    /* (currentPage + 1) * imagesPerPage : 다음 페이지에 해당하는 이미지의 첫번째 인덱스
    images.length : images 배열의 길이로, 페이지를 넘어갈 수 있는 이미지의 전체 수
    */
}

prevButton.addEventListener("click", () => { // 이전 버튼에 대한 클릭 이벤트. 사용자가 이전 버튼을 클릭할 때 이 함수가 선택됨
    if (currentPage > 0) { // 현재 페이지 번호가 0보다 클 경우에만 실행
        currentPage --; // 현재 페이지 감소시켜 이전 페이지로 이동
        displayImg(currentPage); // 새로운 현재 페이지에 해당하는 이미지 표시
        updateButtons();
    }
});

nextButton.addEventListener("click", () => { // 다음 페이지로 이동 가능한지 확인
    if ((currentPage + 1) * imagesPerPage < images.length) {
        currentPage++;  // 현재 페이지 증가시켜 다음 페이지로 이동
        displayImg(currentPage);
        updateButtons();
    }
});

displayImg(currentPage);