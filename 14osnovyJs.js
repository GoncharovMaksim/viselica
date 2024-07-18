let alphabet = "йцукенгшщзхъфывапролджэячсмитьбю";
let randomString = "";
while(randomString.length<50){randomString+= alphabet[Math.floor(Math.random()*alphabet.length)]; }
console.log(randomString)