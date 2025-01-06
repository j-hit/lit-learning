import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {MyButton, MyButtonProps} from './button';

export interface MyHeaderProps {
  size: string;
  variant: string;
  shadow: boolean;
  heading: string;
  logo: string;
  buttons: (MyButtonProps & {text: string})[];
}

@customElement('my-header')
export class MyHeader extends LitElement {
  static override styles = [
    css`
      :host {
        display: block;

        --my-header-background-color: orange;
        --my-header-color: white;
        --my-header-border: none;
        --my-header-font-size: 20px;
        --my-header-padding: 16px;

        header {
          background-color: var(--my-header-background-color, lightgray);
          border: var(--my-header-border, none);
          font-size: var(--my-header-font-size);
          padding: var(--my-header-padding);
          color: var(--my-header-color, white);
          display: grid;
          grid-template-columns: 50px 1fr min-content;
          align-items: center;
        }
      }

      :host([size='small']) {
        --my-header-padding: 8px;
        --my-header-font-size: 14px;
      }

      :host([variant='secondary']) {
        --my-header-background-color: white;
        --my-header-color: black;
        --my-header-border: 1px solid orange;
      }

      .shadow {
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.8);
      }

      .button-group {
        display: flex;
        gap: 8px;
      }
    `,
  ];

  @property({type: String})
  size = 'large';

  @property({type: String})
  variant = 'primary';

  @property({type: Boolean})
  shadow = false;

  @property({type: String})
  heading = 'Your title here';

  @property({type: String})
  logo = '🌍';

  @property({type: Array})
  buttons: (MyButtonProps & {text: string})[] = [];

  override render() {
    const classes = {shadow: this.shadow};

    return html`
      <header class=${classMap(classes)}>
        <div>${this.logo}</div>
        <h1>${this.heading}</h1>
        <my-button variant="secondary" shape="square">X</my-button>
        ${this.buttons
          ? html`
              <section class="button-group">
                ${this.buttons.map(
                  (button) =>
                    html`<my-button
                      variant=${button.variant}
                      size=${button.size}
                      shape=${button.shape}
                      ?shadow=${button.shadow}
                      >${button.text}</my-button
                    >`
                )}
              </section>
            `
          : null}
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-header': MyHeader;
    'my-button': MyButton;
  }
}
