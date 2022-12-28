import Block from '../../core/Block';
import './SignUpPage.css';

type Data = Record<string, string>;

export class SignUpPage extends Block {
  static componentName = 'SignUpPage';

  protected getStateFromProps(): void {
    const defaultState = {
      login: '',
      password: '',
      password2: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
    };

    this.state = {
      values: { ...defaultState },
      errors: { ...defaultState },
      onLoad: (e: Event) => {
        e.preventDefault();
        const data: Data = {};
        for (let ref in this.refs) {
          const inputElement = this.refs[ref].children[1] as HTMLInputElement;
          data[ref] = inputElement.value;
          this.validate(inputElement);
        }

        console.log('action/signUp', data);
      },
      onChange: (e: Event) => {
        (e.target as HTMLElement).nextElementSibling!.textContent = '';
      },
      onBlur: (e: Event) => {
        this.validate(e.target as HTMLInputElement);
      },
    };
  }

  render(): string {
    const { errors, values } = this.state;
    // language=hbs
    return `
        <div class="wrapper">
            <form class="popup">
                <h1 class="popup__title">Регистрация</h1>
                <ul class="popup__list">
                    <li>
                        {{{Input
                                value="${values.email}"
                                error="${errors.email}"
                                ref="email"
                                id="email"
                                type="email"
                                placeholder="Почта"
                                onChange=onChange
                                onBlur=onBlur
                        }}}
                    </li>
                    <li>
                        {{{Input
                                value="${values.login}"
                                error="${errors.login}"
                                ref="login"
                                id="login"
                                placeholder="Логин"
                                onChange=onChange
                                onBlur=onBlur
                        }}}
                    </li>
                    <li>
                        {{{Input
                                value="${values.firstName}"
                                error="${errors.firstName}"
                                ref="firstName"
                                id="first_name"
                                placeholder="Имя"
                                onChange=onChange
                                onBlur=onBlur
                        }}}
                    </li>
                    <li>
                        {{{Input
                                value="${values.lastName}"
                                error="${errors.lastName}"
                                ref="lastName"
                                id="last_name"
                                placeholder="Фамилия"
                                onChange=onChange
                                onBlur=onBlur
                        }}}
                    </li>
                    <li>
                        {{{Input
                                value="${values.phone}"
                                error="${errors.phone}"
                                type="tel"
                                ref="phone"
                                id="phone"
                                placeholder="Телефон"
                                onChange=onChange
                                onBlur=onBlur
                        }}}
                    </li>
                    <li>
                        {{{Input
                                value="${values.password}"
                                error="${errors.password}"
                                ref="password"
                                id="password"
                                type="password"
                                placeholder="Пароль"
                                onChange=onChange
                                onBlur=onBlur
                        }}}
                    </li>
                    <li>
                        {{{Input
                                value="${values.password2}"
                                error="${errors.password2}"
                                ref="password2"
                                id="password2"
                                type="password"
                                placeholder="Пароль (еще раз)"
                                onChange=onChange
                                onBlur=onBlur
                        }}}
                    </li>
                </ul>
                {{{Button text="Зарегистрироваться" onClick=onLoad}}}
                <a href="../LoginPage" class="popup__link">Войти</a>
            </form>
        </div>
    `;
  }
}
