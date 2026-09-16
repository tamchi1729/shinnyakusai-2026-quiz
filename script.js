const correctAnswer = "ろまんらんまん";

const hints = [
  {
    number: 1,
    text: "第1問の場所ヒントをここに入れます。"
  },
  {
    number: 2,
    text: "第2問の場所ヒントをここに入れます。"
  },
  {
    number: 3,
    text: "第3問の場所ヒントをここに入れます。"
  },
  {
    number: 4,
    text: "第4問の場所ヒントをここに入れます。"
  },
  {
    number: 5,
    text: "第5問の場所ヒントをここに入れます。"
  },
  {
    number: 6,
    text: "第6問の場所ヒントをここに入れます。"
  },
  {
    number: 7,
    text: "第7問の場所ヒントをここに入れます。"
  },
  {
    number: 8,
    text: "第8問の場所ヒントをここに入れます。"
  },
  {
    number: 9,
    text: "第9問の場所ヒントをここに入れます。"
  },
  {
    number: 10,
    text: "第10問の場所ヒントをここに入れます。"
  }
];

const answerInput = document.getElementById("answer");
const unlockButton = document.getElementById("unlockButton");
const message = document.getElementById("message");
const hintSection = document.getElementById("hintSection");
const hintList = document.getElementById("hintList");

function normalizeAnswer(value) {
  return value
    .trim()
    .replace(/\s/g, "")
    .toLowerCase();
}

function showHints() {
  hintList.innerHTML = "";

  hints.forEach((hint) => {
    const card = document.createElement("article");
    card.className = "hint-card";

    const number = document.createElement("div");
    number.className = "hint-number";
    number.textContent = `第${hint.number}問`;

    const text = document.createElement("p");
    text.className = "hint-text";
    text.textContent = hint.text;

    card.appendChild(number);
    card.appendChild(text);
    hintList.appendChild(card);
  });

  hintSection.classList.remove("hidden");
}

function checkAnswer() {
  const answer = normalizeAnswer(answerInput.value);

  if (answer === correctAnswer) {
    message.textContent =
      "合言葉を確認しました。秘密の案内所が開きます。";

    showHints();
    unlockButton.disabled = true;
    unlockButton.textContent = "案内書を開きました";

    hintSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    message.textContent =
      "合言葉が少し違うようです。暗号をもう一度確認してください。";
  }
}

unlockButton.addEventListener("click", checkAnswer);

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});
