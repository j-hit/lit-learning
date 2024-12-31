/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {dateConverter} from './custom-converters/date-converter';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }

    :host([active]) {
      border: 1px solid red;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property({
    hasChanged(newValue: string, oldValue: string) {
      return newValue?.toLowerCase() !== oldValue?.toLowerCase();
    },
  })
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  // observed attribute name is "myvalue"
  // Use the default converter
  @property({type: Number})
  myValue = 0;

  // Observed attribute will be called my-name
  @property({attribute: 'my-name'})
  myName = 'Ogden';

  /**
   * No observed attribute for this property.
   * The property will not be initialized from attributes in markup, and attribute changes won't affect it.
   */
  @property({attribute: false})
  myData = {};

  /**
   * Property with a custom converter
   * Value of property "date" will reflect to attribute "date".
   * Reflecting properties to attributes should be done sparingly
   *
   * Reflecting properties of type object or array is not recommended.
   * This can cause large objects to serialize to the DOM which can result in poor performance.
   */
  @property({converter: dateConverter(navigator.language), reflect: true})
  date = new Date();

  /**
   * Boolean properties must default to false
   */
  @property({type: Boolean, reflect: true})
  active = false;

  override render() {
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return html`
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

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
