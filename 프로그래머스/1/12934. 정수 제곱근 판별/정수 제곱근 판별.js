function solution(n) {
    const a = Math.sqrt(n); // 제곱근이 아니면 NaN 반환
    if (/^\d+$/.test(a)) { // 정수인지 확인
        return (a + 1) ** 2;
    }
    return -1;
}