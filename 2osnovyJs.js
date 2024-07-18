let movies = {
"В поисках Немо":{releaseData:2003, duration:100, actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"], format:"DVD"}, 
"Звездные войны: Эпизод 4 - Возвращение джедая" : {releaseData:1983, duration:134, actors: ["Марк Хемилл", "Харрисон Форд", "Кэрри Фишер"], format:"DVD"},
"Гарри Поттер и Кубок огня":{releaseData:2005, duration:157, actors: ["Дэниель Рэдклифф", "Эмма Уотсон", "Рупперт Гринт"], format:"BLu-ray"}
};
let findingNemo = movies["В поисках Немо"];
let cars = {releaseData:2006, duration:117, actors: ["Оуэн Вилсон", "ЭБонни Хант", "Пол Ньюман"], format:"BLu-ray"};
movies ["Тачки"] = cars;

console.log(findingNemo.duration);
console.log(findingNemo.format);
console.log(cars.actors);
console.log(Object.keys(movies));
