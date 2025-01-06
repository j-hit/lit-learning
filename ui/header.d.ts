import { LitElement } from 'lit';
import { MyButton, MyButtonProps } from './button';
export interface MyHeaderProps {
    size: string;
    variant: string;
    shadow: boolean;
    heading: string;
    logo: string;
    buttons: (MyButtonProps & {
        text: string;
    })[];
}
export declare class MyHeader extends LitElement {
    static styles: import("lit").CSSResult[];
    size: string;
    variant: string;
    shadow: boolean;
    heading: string;
    logo: string;
    buttons: (MyButtonProps & {
        text: string;
    })[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-header': MyHeader;
        'my-button': MyButton;
    }
}
//# sourceMappingURL=header.d.ts.map