function ответыДляВиселицы() {
	const ответы = [
		'взаимность',
		'претендент',
		'секундомер',
		'автомобиль',
		'авантюрист',
		'облачность',
		'наблюдение',
		'штукатурка',
		'укротитель',
		'виолончель',
		'заговорщик',
		'клубничник',
		'антарктика',
		'яблоко',
		'банан',
		'груша',
		'апельсин',
		'лимон',
		'арбуз',
		'дыня',
		'клубника',
		'малина',
		'вишня',
		'черешня',
		'персик',
		'абрикос',
		'слива',
		'ананас',
		'кокос',
		'манго',
		'киви',
		'гранат',
		'виноград',
		'орех',
		'миндаль',
		'фундук',
		'кешью',
		'арахис',
		'фисташка',
		'грецкий',
		'лесной',
		'каштан',
		'кедр',
		'морковь',
		'картофель',
		'капуста',
		'огурец',
		'помидор',
		'перец',
		'баклажан',
		'кабачок',
		'тыква',
		'свекла',
		'редис',
		'лук',
		'чеснок',
		'шпинат',
		'салат',
		'петрушка',
		'укроп',
		'базилик',
		'мята',
		'розмарин',
		'лаванда',
		'ромашка',
		'одуванчик',
		'клевер',
		'подорожник',
		'крапива',
		'ландыш',
		'тюльпан',
		'роза',
		'лилия',
		'нарцисс',
		'гвоздика',
		'пион',
		'хризантема',
		'георгин',
		'астра',
		'фиалка',
		'незабудка',
		'колокольчик',
		'василек',
		'мак',
		'подсолнух',
		'лотос',
		'орхидея',
		'кактус',
		'алоэ',
		'фикус',
		'пальма',
		'береза',
		'дуб',
		'сосна',
		'ель',
		'липа',
		'тополь',
		'ива',
		'осина',
		'рябина',
		'клен',
		'каштан',
		'яблоня',
		'груша',
		'вишня',
		'слива',
		'абрикос',
		'персик',
		'черешня',
		'орех',
		'виноград',
	];
	const выборСлучайногоОтвета = Math.floor(Math.random() * ответы.length);
	const ответ = ответы[выборСлучайногоОтвета];
	return ответ.toUpperCase();
}

function конецИгры(ответ, выигрыш) {
	const asciiВиселица = '\n____\n|/ |\n| @\n| /|\\\n| / \\\n|\n=====';
	let сообщение = '';
	if (выигрыш) {
		сообщение = 'Поздравляю, вы выиграли! Было загадано слово: ' + ответ;
		alert(сообщение);
		return сообщение;
	} else {
		сообщение =
			'Очень жаль, вы проиграли! Было загадано слово: ' + ответ + asciiВиселица;
		alert(сообщение);
		return сообщение;
	}
}

function сыграемВВиселицу() {
	const ответ = ответыДляВиселицы();

	let визуальноеОтображениеДляПользователя = [];
	let количествоПопыток = 7;
	let ответРазбитНаБуквы = ответ.split('');

	let человечек = [
		'\n____\n',
		'|/ |\n',
		'| @\n',
		'| /|\\\n',
		'| / \\\n',
		'|\n',
		'=====',
	];
	let частиЧеловечка = [];

	for (i = 0; i < ответРазбитНаБуквы.length; i++) {
		визуальноеОтображениеДляПользователя.push(' __ ');
	}

	function проверкаБукв(буква) {
		буква = буква.toUpperCase();

		for (let i = 0; i < ответРазбитНаБуквы.length; i++) {
			if (буква === ответРазбитНаБуквы[i]) {
				визуальноеОтображениеДляПользователя[i] = ответРазбитНаБуквы[i];
				ответРазбитНаБуквы[i] = null;
			}
		}

		if (!визуальноеОтображениеДляПользователя.includes(буква)) {
			количествоПопыток = количествоПопыток - 1;
			частиЧеловечка += человечек.shift();
		}
		if (
			визуальноеОтображениеДляПользователя.includes(' __ ') &&
			количествоПопыток > 0
		) {
			console.log(количествоПопыток);

			проверкаБукв(
				prompt(
					'Введите букву' +
						'\nСлово: ' +
						визуальноеОтображениеДляПользователя.join('') +
						'\nОсталось попыток: ' +
						количествоПопыток +
						частиЧеловечка
				)
			);
		} else {
			if (количествоПопыток > 0) {
				return конецИгры(ответ, 'выигрыш');
			} else {
				return конецИгры(ответ, false);
			}
		}
	}
	проверкаБукв(
		prompt(
			'Введите букву' +
				'\nСлово: ' +
				визуальноеОтображениеДляПользователя.join('')
		)
	);
}

сыграемВВиселицу();
