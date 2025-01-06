/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * The name to say "Hello" to.
     */
    name: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    myValue: number;
    myName: string;
    /**
     * No observed attribute for this property.
     * The property will not be initialized from attributes in markup, and attribute changes won't affect it.
     */
    myData: {};
    /**
     * Property with a custom converter
     * Value of property "date" will reflect to attribute "date".
     * Reflecting properties to attributes should be done sparingly
     *
     * Reflecting properties of type object or array is not recommended.
     * This can cause large objects to serialize to the DOM which can result in poor performance.
     */
    date: Date;
    /**
     * Boolean properties must default to false
     */
    active: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
//# sourceMappingURL=my-element%20copy.d.ts.map