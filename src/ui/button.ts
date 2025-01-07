import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

export interface MyButtonProps {
  size: string;
  shape: string;
  variant: string;
  shadow: boolean;
}

/**
 * An example button.
 *
 */
@customElement('my-button')
export class MyButton extends LitElement implements MyButtonProps {
  static override styles = [
    css`
      :host {
        display: block;
        max-width: 90ch;
        flex-shrink: 0;

        --my-button-background-color: orange;
        --my-button-color: white;
        --my-button-border: none;
        --my-button-font-size: 20px;
        --my-button-padding: 16px;
        --my-button-aspect-ratio: unset;

        button {
          background-color: var(--my-button-background-color, lightgray);
          border: var(--my-button-border, none);
          font-size: var(--my-button-font-size);
          padding: var(--my-button-padding);
          color: var(--my-button-color, white);

          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          width: 100%;
          aspect-ratio: var(--my-button-aspect-ratio, unset);
          border-radius: 8px;
        }
      }

      :host([size='small']) {
        --my-button-padding: 8px;
        --my-button-font-size: 14px;
      }

      :host([variant='secondary']) {
        --my-button-background-color: white;
        --my-button-color: black;
        --my-button-border: 1px solid orange;
      }

      :host([shape='square']) {
        --my-button-aspect-ratio: 1 / 1;
      }

      .shadow {
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.8);
      }
    `,
  ];

  @property({type: String})
  size = 'large';

  @property({type: String})
  shape = 'rectangle';

  @property({type: String})
  variant = 'primary';

  @property({type: Boolean})
  shadow = false;

  override render() {
    const classes = {shadow: this.shadow};

    return html`
      <button class=${classMap(classes)} @click=${this._onClick}>
        <slot></slot>
      </button>
    `;
  }

  private _onClick() {
    this.dispatchEvent(new CustomEvent('my-button-clicked'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
