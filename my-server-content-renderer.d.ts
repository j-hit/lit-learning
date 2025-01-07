import { LitElement, TemplateResult } from 'lit';
export declare class MyServerContentRenderer extends LitElement {
    static styles: import("lit").CSSResult[];
    /**
     * Image this content coming from an API response
     *  */
    private content;
    private renderContent;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-server-content-renderer': MyServerContentRenderer;
    }
}
//# sourceMappingURL=my-server-content-renderer.d.ts.map