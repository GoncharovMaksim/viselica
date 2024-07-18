let randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"]

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

console.log(pickRandomWord(randomWords));