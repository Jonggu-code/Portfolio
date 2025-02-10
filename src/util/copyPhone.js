export const copyPhone = (text) => {
    // 동적으로 input 요소 생성
    const input = document.createElement("input");
    input.type = "text";
    input.value = text;

    // input을 DOM에 추가
    document.body.appendChild(input);

    // input 선택 및 복사
    input.select();
    document.execCommand("copy");

    // input 삭제
    document.body.removeChild(input);

    // 사용자에게 알림
    alert("전화번호가 복사되었습니다! (050-6875-8906)");
};
