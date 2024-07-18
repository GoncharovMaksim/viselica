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
	let количествоПопыток = 10;
	let ответРазбитНаБуквы = ответ.split('');

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
						количествоПопыток
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
