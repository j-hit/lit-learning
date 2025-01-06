var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
let MyHeader = class MyHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.size = 'large';
        this.variant = 'primary';
        this.shadow = false;
        this.heading = 'Your title here';
        this.logo = '🌍';
        this.buttons = [];
    }
    render() {
        const classes = { shadow: this.shadow };
        return html `
      <header class=${classMap(classes)}>
        <div>${this.logo}</div>
        <h1>${this.heading}</h1>
        <my-button variant="secondary" shape="square">X</my-button>
        ${this.buttons
            ? html `
              <section class="button-group">
                ${this.buttons.map((button) => html `<my-button
                      variant=${button.variant}
                      size=${button.size}
                      shape=${button.shape}
                      ?shadow=${button.shadow}
                      >${button.text}</my-button
                    >`)}
              </section>
            `
            : null}
      </header>
    `;
    }
};
MyHeader.styles = [
    css `
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
__decorate([
    property({ type: String })
], MyHeader.prototype, "size", void 0);
__decorate([
    property({ type: String })
], MyHeader.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean })
], MyHeader.prototype, "shadow", void 0);
__decorate([
    property({ type: String })
], MyHeader.prototype, "heading", void 0);
__decorate([
    property({ type: String })
], MyHeader.prototype, "logo", void 0);
__decorate([
    property({ type: Array })
], MyHeader.prototype, "buttons", void 0);
MyHeader = __decorate([
    customElement('my-header')
], MyHeader);
export { MyHeader };
//# sourceMappingURL=header.js.map