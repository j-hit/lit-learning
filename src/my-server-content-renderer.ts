/* eslint-disable @typescript-eslint/no-explicit-any */
import {LitElement, TemplateResult} from 'lit';
import {html, unsafeStatic} from 'lit/static-html.js';

import {customElement} from 'lit/decorators.js';

import {spread} from '@open-wc/lit-helpers';

@customElement('my-server-content-renderer')
export class MyServerContentRenderer extends LitElement {
  private content = [
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

  private renderContent(content: any): TemplateResult {
    const tag = content.element as keyof HTMLElementTagNameMap;
    const props = content.props;
    const children: string | any[] = props.children || [];
    const propsWithoutChildren = {...content.props, children: undefined};

    return html`<${unsafeStatic(tag)} ${spread(propsWithoutChildren)}>
      ${
        typeof children === 'string'
          ? children
          : children.map((child: any) => this.renderContent(child))
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
