import {LitElement, TemplateResult, css} from 'lit';
import {html, unsafeStatic} from 'lit/static-html.js';

import {customElement} from 'lit/decorators.js';

import {spread} from '@open-wc/lit-helpers';

type ServerElement = {
  element: string;
  props: {
    children?: string | ServerElement[];
    [key: string]: string | boolean | ServerElement[] | undefined | unknown;
  };
};

@customElement('my-server-content-renderer')
export class MyServerContentRenderer extends LitElement {
  static override styles = [
    css`
      :host {
        display: grid;
        gap: 16px;
      }
    `,
  ];

  /**
   * Image this content coming from an API response
   *  */
  private content: ServerElement[] = [
    {
      element: 'my-button',
      props: {
        size: 'small',
        shape: 'rectangle',
        variant: 'secondary',
        '?shadow': true,
        children: [
          {
            element: 'span',
            props: {
              children: 'Button 1',
            },
          },
        ],
      },
    },
    {
      element: 'my-button',
      props: {
        size: 'small',
        shape: 'rectangle',
        variant: 'secondary',
        '?shadow': false,
        children: [
          {
            element: 'span',
            props: {
              children: 'Button 2',
            },
          },
        ],
      },
    },
    {
      element: 'my-header',
      props: {
        heading: 'Digi, your personal assistant',
        logo: '🐔',
        buttons: [
          {
            size: 'small',
            shape: 'rectangle',
            variant: 'secondary',
            shadow: true,
            text: 'My header button 1',
          },
          {
            size: 'small',
            shape: 'rectangle',
            variant: 'secondary',
            shadow: false,
            text: 'My header button 2',
          },
        ],
      },
    },
  ];

  private renderContent(content: ServerElement): TemplateResult {
    const tag = content.element as keyof HTMLElementTagNameMap;
    const props = content.props;
    const children = props.children || [];
    const propsWithoutChildren = {...content.props, children: undefined};

    const propsWithFlatStructure = Object.entries(propsWithoutChildren).reduce(
      (acc, [key, value]) => {
        if (typeof value === 'object') {
          acc[key] = JSON.stringify(value);
        } else {
          acc[key] = value as string | undefined;
        }
        return acc;
      },
      {} as Record<string, string | undefined>
    );

    return html`<${unsafeStatic(tag)} ${spread(propsWithFlatStructure)}>
      ${
        typeof children === 'string'
          ? children
          : children.map((child) => this.renderContent(child))
      }
    </${unsafeStatic(tag)}>`;
  }

  override render() {
    return html`${this.content.map((item) => this.renderContent(item))}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-server-content-renderer': MyServerContentRenderer;
  }
}
