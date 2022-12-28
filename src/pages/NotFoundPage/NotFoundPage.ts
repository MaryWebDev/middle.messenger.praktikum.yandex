import Block from '../../core/Block';

export class NotFoundPage extends Block {
  static componentName = 'NotFoundPage';

  render(): string {
    // language=hbs
    return `
        {{{Stub title="404" message="Не туда попали"}}}
    `;
  }
}
