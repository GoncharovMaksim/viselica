let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Соединяем случайные строки в предложение: 
let randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!"; randomString;
console.log(randomString);