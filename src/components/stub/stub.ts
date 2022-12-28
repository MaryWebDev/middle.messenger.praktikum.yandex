import Block from '../../core/Block';
import './stub.css';

interface StubProps {
  title: string;
  message: string;
}

export class Stub extends Block {
  static componentName = 'Stub';

  constructor(props: StubProps) {
    super(props);
  }

  render(): string {
    // language=hbs
    return `
        <div class="stub">
            <div class="stub__content">
                <h1 class="stub__title">{{title}}</h1>
                <p class="stub__text">{{message}}</p>
                <a href="" class="stub__prev">Назад к чатам</a>
            </div>
        </div>`;
  }
}
