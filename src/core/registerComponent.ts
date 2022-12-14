import Block from './Block';
import Handlebars, { HelperOptions } from 'handlebars';

interface BlockConstructable<Props = Record<string, unknown>> {
  new (props: Props): Block<object>;
  componentName: string;
}

export default function registerComponent<Props>(
  Component: BlockConstructable<Props>
) {
  Handlebars.registerHelper(
    Component.componentName ?? Component.name,
    function (
      this: Props,
      { hash: { ref, ...hash }, data, fn }: HelperOptions
    ) {
      if (data.root.children === undefined) {
        data.root.children = {};
      }

      if (data.root.refs === undefined) {
        data.root.refs = {};
      }

      const { children, refs } = data.root;

      /**
       * Костыль для того, чтобы передавать переменные
       * внутрь блоков вручную подменяя значение
       */
      (Object.keys(hash) as []).forEach((key: keyof Props) => {
        if (this[key] !== undefined && typeof this[key] === 'string') {
          hash[key] = hash[key].replace(
            new RegExp(`{{${String(key)}}}`, 'i'),
            this[key]
          );
        }
      });

      const component = new Component(hash);

      children[component.id] = component;

      if (ref !== undefined) {
        refs[ref] = component.getContent();
      }

      const contents = fn !== undefined ? fn(this) : '';

      return `<div data-id="${component.id}">${contents}</div>`;
    }
  );
}
