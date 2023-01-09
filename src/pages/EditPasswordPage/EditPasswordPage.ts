import Block from '../../core/Block';

type Data = Record<string, string>;

export class EditPasswordPage extends Block {
  static componentName = 'EditPasswordPage';

  protected getStateFromProps(): void {
    const defaultState = {
      oldPassword: '',
      password: '',
      password2: '',
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

        console.log('action/EditPassword', data);
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
                <div class="data">
                    <ul>
                        <li>
                            {{{InputProfile
                                    value="${values.oldPassword}"
                                    error="${errors.oldPassword}"
                                    ref="oldPassword"
                                    id="old_password"
                                    type="password"
                                    label="Старый пароль"
                                    placeholder="•••••••••"
                                    onChange=onChange
                                    onBlur=onBlur
                            }}}
                        </li>
                        <li>
                            {{{InputProfile
                                    value="${values.password}"
                                    error="${errors.password}"
                                    ref="password"
                                    id="password"
                                    type="password"
                                    label="Новый пароль"
                                    placeholder="•••••••••"
                                    onChange=onChange
                                    onBlur=onBlur
                            }}}
                        </li>
                        <li>
                            {{{InputProfile
                                    value="${values.password2}"
                                    error="${errors.password2}"
                                    ref="password2"
                                    id="password2"
                                    type="password"
                                    label="Повторите пароль"
                                    placeholder="•••••••••"
                                    onChange=onChange
                                    onBlur=onBlur
                            }}}
                        </li>
                    </ul>
                    {{{Button text="Сохранить" onClick=onLoad}}}
                </div>
            </div>
        </section>
    `;
  }
}
