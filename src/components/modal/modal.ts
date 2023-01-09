import Block from '../../core/Block';
import './modal.css';

export class Modal extends Block {
  static componentName = 'Modal';

  render(): string {
    // language=hbs
    return `
        <div class="modal">
            <p class="modal__title">{{title}}</p>
            <div class="modal__text">
                <p>Выберите файл на компьютере</p>
            </div>
            {{{Button text="Поменять"}}}
        </div>
    `;
  }
}
