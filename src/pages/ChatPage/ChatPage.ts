import Block from '../../core/Block';
import './ChatPage.css';

export class ChatPage extends Block {
  static componentName = 'ChatPage';

  render(): string {
    // language=hbs
    return `
        <section class='chats'>
            <div class='chat-wrapper'>
                <div class='profile-link'>
                    <p>Профиль &#12297;</p>
                </div>
                <input type='text' class='search' placeholder='Поиск'>
                <div class='chat-list'>
                    <ul>
                        <li>
                            {{{Chat
                                    contact="Киноклуб"
                                    time="10:20"
                                    unread=5
                                    outgoing=true
                                    text="Круто!"
                            }}}
                        </li>
                        <li>
                            {{{Chat
                                    contact="Илья"
                                    time="Пт"
                                    text="Изображение"
                            }}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class='chat'>
                <p>Выберите чат чтобы отправить сообщение</p>
            </div>
        </section>
    `;
  }
}
