import Block from '../../core/Block';
import './LoginPage.css';

type Data = Record<string, string>;

export class LoginPage extends Block {
  static componentName = 'LoginPage';

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
        for (const ref in this.refs) {
          const inputElement = this.refs[ref].children[1] as HTMLInputElement;
          data[ref] = inputElement.value;
          this.validate(inputElement);
        }

        console.log('action/Login', data);
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
                <h1 class="popup__title">Вход</h1>
                <ul>
                    <li>
                        {{{Input
                                value="${values.login}"
                                error="${errors.login}"
                                ref="login"
                                id="login"
                                type="text"
                                placeholder="Логин"
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
                        <div style="height: 112px;"></div>
                    </li>
                </ul>
                {{{Button text="Авторизоваться" onClick=onLoad}}}
                <a href="#" class="popup__link">Нет аккаунта?</a>
            </form>
        </div>
    `;
  }
}
