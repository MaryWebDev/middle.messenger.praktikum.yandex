import Block from '../../core/Block';
import './input.css';

interface InputProps {
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  id: string;
  label?: string;
}

export class Input extends Block {
  static componentName = 'Input';

  constructor({
    onChange,
    onFocus,
    onBlur,
    type = 'text',
    error,
    placeholder,
    value,
    id,
    label,
  }: InputProps) {
    super({
      type,
      placeholder,
      value,
      error,
      id,
      label,
      events: { input: onChange, focusin: onFocus, focusout: onBlur },
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="popup__row" tabindex="0">
            <label for="{{id}}" class="popup__text">{{#if label}}{{label}}{{else}}{{placeholder}}{{/if}}</label>
            <input type="{{type}}" 
                   id="{{id}}" 
                   name="{{id}}" 
                   placeholder="{{placeholder}}"
                   value="{{value}}" class="popup__input">
            <p class="popup__error">{{#if error}}{{error}}{{/if}}</p>
        </div>
    `;
  }
}
