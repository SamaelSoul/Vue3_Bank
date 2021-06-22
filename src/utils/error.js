const ERROR_CODE = {
    EMAIL_NOT_FOUND: 'Пользователь с указанным Email не был найден',
    INVALID_PASSWORD: 'Вы ввели неверный пароль',
    auth: 'Пожалуйста, войдите в систему'
}

export function error(code) {
    return ERROR_CODE[code] ? ERROR_CODE[code] : 'Неизвестная ошибка...'
}