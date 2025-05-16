function calculate() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const years = parseInt(document.getElementById("years").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
    document.getElementById("result").innerText = "올바른 숫자를 입력해주세요.";
    return;
  }

  const amount = principal * Math.pow(1 + rate, years);
  const result = amount.toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW"
  });

  document.getElementById("result").innerText = `예상 금액: ${result}`;
}
