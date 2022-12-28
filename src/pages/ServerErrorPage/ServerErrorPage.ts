import Block from '../../core/Block';

export class ServerErrorPage extends Block {
  static componentName = 'ServerErrorPage';

  render(): string {
    // language=hbs
    return `
      {{{Stub title="500" message="Мы уже фиксим"}}}
    `;
  }
}
