// 라디오 버튼 이벤트 처리
const genderResult = document.querySelector("#genderResult");
const maleRadio = document.querySelector("#maleRadio");
const femaleRadio = document.querySelector("#femaleRadio");
const otherRadio = document.querySelector("#otherRadio");

maleRadio.addEventListener("change", updateGenderResult)
femaleRadio.addEventListener("change", updateGenderResult);
otherRadio.addEventListener("change", updateGenderResult);
function updateGenderResult() {
    if (maleRadio.checked) {
        genderResult.textContent = "선택된 성별 : 남성";
    } else if (femaleRadio.checked) {
        genderResult.textContent = "선택된 성별 : 여성";
    } else if (otherRadio.checked) {
        genderResult.textContent = "선택된 성별 : 기타";
    }
}

// 체크 박스 이벤트 처리
const fruitsResult = document.querySelector("#fruitsResult");
const appleCheckbox = document.querySelector("#appleCheckbox");
const bananaCheckbox = document.querySelector("#bananaCheckbox");
const orangeCheckbox = document.querySelector("#orangeCheckbox");

appleCheckbox.addEventListener("change", updateFruitsResult);
bananaCheckbox.addEventListener("change", updateFruitsResult);
orangeCheckbox.addEventListener("change", updateFruitsResult);

/*
updateFruitsResult = change 이벤트가 발생할 때 실행
현재 선택된 체크박스를 확인하고 선택된 과일 항목을 배열에 추가한 다음 결과 메시지 업데이트
*/
function updateFruitsResult() {
    const selectFruits = [];
    /*
    appleCheckbox.checked = checked의 속성을 사용해서 각 체크박스의 선택 여부를 확인하고,
    선택된 과일 항목을 selectFruits 배열에 추가
    */
    if (appleCheckbox.checked) {
        selectFruits.push("사과");
    }
    if (bananaCheckbox.checked) {
        selectFruits.push("바나나");
    }
    if (orangeCheckbox.checked) {
        selectFruits.push("오렌지");
    }
    fruitsResult.textContent = "선택된 과일 : " + selectFruits.join(", ");
}