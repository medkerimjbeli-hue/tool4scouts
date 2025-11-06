function generateRandom() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const result = document.getElementById("result");
  const error = document.getElementById("error");

  if (isNaN(min) || isNaN(max)) {
    error.textContent = "يرجى إدخال قيم صحيحة.";
    return;
  }

  if (min >= max) {
    error.textContent = "الحد الأدنى يجب أن يكون أقل من الحد الأقصى.";
    return;
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  result.textContent = random;
  result.style.transform = "scale(1.2)";
  setTimeout(() => result.style.transform = "scale(1)", 300);
  error.textContent = "";
}

function pickName() {
  const namesInput = document.getElementById("names").value;
  const nameResult = document.getElementById("nameResult");

  if (!namesInput.trim()) {
    nameResult.textContent = "يرجى إدخال بعض الأسماء.";
    return;
  }

  const names = namesInput.split(",").map(name => name.trim()).filter(name => name);
  const chosen = names[Math.floor(Math.random() * names.length)];
  nameResult.textContent = `الاسم المختار: ${chosen}`;
}

function goToTreePage() {
  window.location.href = "tree.html";
}
