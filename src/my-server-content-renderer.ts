/* eslint-disable @typescript-eslint/no-explicit-any */
import {LitElement, TemplateResult} from 'lit';
import {html, unsafeStatic} from 'lit/static-html.js';

import {customElement} from 'lit/decorators.js';

import {spread} from '@open-wc/lit-helpers';

type ServerElement = {
  element: string;
  props: {
    children?: string | ServerElement[];
    [key: string]: string | boolean | ServerElement[] | undefined;
  };
};

@customElement('my-server-content-renderer')
export class MyServerContentRenderer extends LitElement {
  private content: ServerElement[] = [
    {
      element: 'my-button',
      props: {
        size: 'small',
        shape: 'rectangle',
        variant: 'secondary',
        '.shadow': true,
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
        '.shadow': false,
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
  ];

  private renderContent(content: ServerElement): TemplateResult {
    const tag = content.element as keyof HTMLElementTagNameMap;
    const props = content.props;
    const children = props.children || [];
    const propsWithoutChildren = {...content.props, children: undefined};

    return html`<${unsafeStatic(tag)} ${spread(propsWithoutChildren)}>
      ${
        typeof children === 'string'
          ? children
          : children.map((child) => this.renderContent(child))
      }
    </${unsafeStatic(tag)}>`;
  }

  override render() {
    return html`
      <div>${this.content.map((item) => this.renderContent(item))}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-server-content-renderer': MyServerContentRenderer;
  }
}
