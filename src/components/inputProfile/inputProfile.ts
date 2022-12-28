import Block from '../../core/Block';
import './inputProfile.css';

interface InputProfileProps {
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  id: string;
  label?: string;
  disabled?: boolean;
}

export class InputProfile extends Block {
  static componentName = 'InputProfile';

  constructor({
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    type = 'text',
    error,
    placeholder,
    value,
    id,
    label,
    disabled,
  }: InputProfileProps) {
    super({
      type,
      placeholder,
      value,
      error,
      id,
      label,
      disabled,
      events: { input: onChange, focusin: onFocus, focusout: onBlur },
    });
  }

  render(): string {
    // language=hbs
    return `
        <div class="row" tabindex="0">
            <label for="{{id}}" class="text">{{#if label}}{{label}}{{else}}{{placeholder}}{{/if}}</label>
            <input type="{{type}}"
                   id="{{id}}"
                   name="{{id}}"
                   placeholder="{{placeholder}}"
                   value="{{value}}" class="input"
                   {{#if disabled}}disabled{{/if}}>
            <p class="error">{{#if error}}{{error}}{{/if}}</p>
        </div>
    `;
  }
}
