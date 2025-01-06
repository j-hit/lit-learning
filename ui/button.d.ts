import { LitElement } from 'lit';
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
export declare class MyButton extends LitElement implements MyButtonProps {
    static styles: import("lit").CSSResult[];
    size: string;
    shape: string;
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
//# sourceMappingURL=button.d.ts.map