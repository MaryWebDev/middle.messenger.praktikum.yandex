export const ERRORS = {
  passwordNotMatch: 'Пароли не совпадают',
  first_name: 'Первая буква - заглавная, допустимы только буквы и "-"',
  last_name: 'Первая буква - заглавная, допустимы только буквы и "-"',
  login: 'От 3 до 20 символов, латиница, допустимы цифры, "_" или "-"',
  email: 'Невалидный email',
  password:
    'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  phone: 'Невалидный номер телефона',
  empty: 'Поле обязательно для заполнения',
  message: 'Введите текст сообщения',
};

export const REG = {
  login: /^[A-z][A-z0-9_\-]{2,19}$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  first_name: /^[A-ZА-Я][A-zА-я\-]*/,
  last_name: /^[A-ZА-Я][A-zА-я\-]*/,
  phone: /^\+?[0-9]{10,15}/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/,
};
