import Block from '../../core/Block';
import './icon.css';

interface IconProps {
  name: string;
}

export class Icon extends Block {
  static componentName = 'Icon';

  render(): string {
    // language=hbs
    return `
        <div class="icon">
            <div class="icon__container">
                <p class="icon__text">Поменять аватар</p>
                <div class="icon__img"></div>
            </div>
            <p class="icon__name">{{name}}</p>
        </div>
    `;
  }
}
