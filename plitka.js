const areaInput = document.getElementById("area");
const ourPriceInput = document.getElementById("ourPrice");
const calculateBtn = document.getElementById("calculateBtn");
const resultBox = document.getElementById("resultBox");

function formatMoney(amount) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(amount));
}

function calculateSavings() {
  const area = Number(areaInput.value);
  const ourPrice = Number(ourPriceInput.value);

  if (!area || !ourPrice || area <= 0 || ourPrice <= 0) {
    resultBox.innerHTML = "<p>Введите корректные положительные значения.</p>";
    return;
  }

  const competitorPrice = ourPrice * 1.2;
  const ourTotal = area * ourPrice;
  const competitorTotal = area * competitorPrice;
  const savings = competitorTotal - ourTotal;

  resultBox.innerHTML = `
    <p>💡 Площадь: <strong>${area} м²</strong></p>
    <p>🏷️ У нас: <strong>${formatMoney(ourTotal)} ₽</strong></p>
    <p>🏪 У конкурента: <strong>${formatMoney(competitorTotal)} ₽</strong></p>
    <p>🎉 Ваша выгода: <strong>${formatMoney(savings)} ₽</strong></p>
  `;
}

calculateBtn.addEventListener("click", calculateSavings);
