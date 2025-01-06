import { LitElement } from 'lit';
/**
 * An example button.
 *
 */
export declare class MyButton extends LitElement {
    static styles: import("lit").CSSResult[];
    size: string;
    variant: string;
    shadow: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
//# sourceMappingURL=button%20copy.d.ts.map