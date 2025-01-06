/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dateConverter } from './custom-converters/date-converter';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyElement = class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
        // observed attribute name is "myvalue"
        // Use the default converter
        this.myValue = 0;
        // Observed attribute will be called my-name
        this.myName = 'Ogden';
        /**
         * No observed attribute for this property.
         * The property will not be initialized from attributes in markup, and attribute changes won't affect it.
         */
        this.myData = {};
        /**
         * Property with a custom converter
         * Value of property "date" will reflect to attribute "date".
         * Reflecting properties to attributes should be done sparingly
         *
         * Reflecting properties of type object or array is not recommended.
         * This can cause large objects to serialize to the DOM which can result in poor performance.
         */
        this.date = new Date();
        /**
         * Boolean properties must default to false
         */
        this.active = false;
    }
    render() {
        const dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return html `
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <p>myValue = ${this.myValue}</p>
      <p>myName = ${this.myName}</p>
      <p>
        date = ${this.date.toLocaleDateString(navigator.language, dateOptions)}
      </p>

      <section>
        <p>active = ${this.active}</p>
        <button @click="${() => (this.active = !this.active)}">
          Toggle active
        </button>
      </section>
      <slot></slot>
    `;
    }
    _onClick() {
        this.count++;
        this.dispatchEvent(new CustomEvent('count-changed'));
    }
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name) {
        return `Hello, ${name}`;
    }
};
MyElement.styles = [
    css `
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }

      :host([active]) {
        border: 1px solid red;
      }
    `,
];
__decorate([
    property({
        hasChanged(newValue, oldValue) {
            return newValue?.toLowerCase() !== oldValue?.toLowerCase();
        },
    })
], MyElement.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "count", void 0);
__decorate([
    property({ type: Number })
], MyElement.prototype, "myValue", void 0);
__decorate([
    property({ attribute: 'my-name' })
], MyElement.prototype, "myName", void 0);
__decorate([
    property({ attribute: false })
], MyElement.prototype, "myData", void 0);
__decorate([
    property({ converter: dateConverter(navigator.language), reflect: true })
], MyElement.prototype, "date", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], MyElement.prototype, "active", void 0);
MyElement = __decorate([
    customElement('my-element')
], MyElement);
export { MyElement };
//# sourceMappingURL=my-element%20copy.js.map