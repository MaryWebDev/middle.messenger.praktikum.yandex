import Block from '../../core/Block';
type Data = Record<string, string>;

export class EditProfilePage extends Block {
  static componentName = 'EditProfilePage';

  protected getStateFromProps(): void {
    this.state = {
      values: {
        email: 'i@marnix.ru',
        login: 'MaryWD',
        firstName: 'Mary',
        lastName: 'Ivanuschenko',
        displayName: 'Mary I',
        phone: '+79035940494',
      },
      errors: {
        email: '',
        login: '',
        firstName: '',
        lastName: '',
        displayName: '',
        phone: '',
      },
      onLoad: (e: Event) => {
        e.preventDefault();
        const data: Data = {};
        for (const ref in this.refs) {
          const inputElement = this.refs[ref].children[1] as HTMLInputElement;
          data[ref] = inputElement.value;
          this.validate(inputElement);
        }

        console.log('action/EditProfilePage', data);
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
    const { values, errors } = this.state;

    // language=hbs
    return `
        <section class="profile">
            <nav class="nav">
                <div class="nav__control">
                    <p class="nav__control_type_prev">&larr;</p>
                </div>
            </nav>
            <div class="content">
                {{{Icon}}}
                <form class="data">
                    <ul>
                        <li>
                            {{{InputProfile
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
                            {{{InputProfile
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
                            {{{InputProfile
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
                            {{{InputProfile
                                    value="${values.lastName}"
                                    error="${errors.lastName}"
                                    ref="lastName"
                                    id="second_name"
                                    placeholder="Фамилия"
                                    onChange=onChange
                                    onBlur=onBlur
                            }}}
                        </li>
                        <li>
                            {{{InputProfile
                                    value="${values.displayName}"
                                    error="${errors.displayName}"
                                    ref="displayName"
                                    id="display_name"
                                    placeholder="Имя в чате"
                                    onChange=onChange
                                    onBlur=onBlur
                            }}}
                        </li>
                        <li>
                            {{{InputProfile
                                    value="${values.phone}"
                                    error="${errors.phone}"
                                    ref="phone"
                                    id="phone"
                                    placeholder="Телефон"
                                    onChange=onChange
                                    onBlur=onBlur
                            }}}
                        </li>
                    </ul>
                    {{{Button text="Сохранить" onClick=onLoad}}}
                </form>
            </div>
        </section>
    `;
  }
}
