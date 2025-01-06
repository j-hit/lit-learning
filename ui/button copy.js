var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
/**
 * An example button.
 *
 */
let MyButton = class MyButton extends LitElement {
    constructor() {
        super(...arguments);
        this.size = 'large';
        this.variant = 'primary';
        this.shadow = false;
    }
    render() {
        const classes = { shadow: this.shadow };
        return html `
      <button class=${classMap(classes)} @click=${this._onClick}>
        <slot></slot>
      </button>
    `;
    }
    _onClick() {
        this.dispatchEvent(new CustomEvent('my-button-clicked'));
    }
};
MyButton.styles = [
    css `
      :host {
        display: block;
        max-width: 90ch;

        --my-button-background-color: orange;
        --my-button-color: white;
        --my-button-border: none;
        --my-button-font-size: 20px;
        --my-button-padding: 16px;

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
          height: 100%;
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

      .shadow {
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.8);
      }
    `,
];
__decorate([
    property({ type: String })
], MyButton.prototype, "size", void 0);
__decorate([
    property({ type: String })
], MyButton.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], MyButton.prototype, "shadow", void 0);
MyButton = __decorate([
    customElement('my-button')
], MyButton);
export { MyButton };
//# sourceMappingURL=button%20copy.js.map