import Block from '../../core/Block';

interface ChatProps {
  contact: string;
  time: string;
  text: string;
  id?: string | number;
  unread?: number;
  outgoing?: boolean;
}

export class Chat extends Block {
  static componentName = 'Chat';

  constructor({
    contact,
    time,
    text,
    id,
    unread,
    outgoing = false
  }: ChatProps) {
    super({
      contact,
      time,
      text,
      id,
      unread,
      outgoing
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class='chats__item' id={{id}}>
            <div class='chats__item-avatar'></div>
            <div class='chats__item-preview'>
                <div class='chats__item-content'>
                    <p class='chats__item-contact'>{{contact}}</p>
                    <p class='chats__item-message'>
                        {{#if outgoing}}
                            <span class='chats__sender'>Вы: </span>
                        {{/if}}
                        {{text}}
                    </p>
                </div>
                <div class='chats__item-info'>
                    <p class='chats__item-time'>{{time}}</p>
                    {{#if unread}}
                        <div class='chats__item-count'><p>{{unread}}</p></div>
                    {{/if}}
                </div>
            </div>
        </div>
    `;
  }
}
