var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement } from 'lit/decorators.js';
import { spread } from '@open-wc/lit-helpers';
let MyServerContentRenderer = class MyServerContentRenderer extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Image this content coming from an API response
         *  */
        this.content = [
            {
                element: 'my-button',
                props: {
                    size: 'small',
                    shape: 'rectangle',
                    variant: 'secondary',
                    '?shadow': true,
                    children: [
                        {
                            element: 'span',
                            props: {
                                children: 'Button 1',
                            },
                        },
                    ],
                },
            },
            {
                element: 'my-button',
                props: {
                    size: 'small',
                    shape: 'rectangle',
                    variant: 'secondary',
                    '?shadow': false,
                    children: [
                        {
                            element: 'span',
                            props: {
                                children: 'Button 2',
                            },
                        },
                    ],
                },
            },
            {
                element: 'my-header',
                props: {
                    heading: 'Digi, your personal assistant',
                    logo: '🐔',
                    buttons: [
                        {
                            size: 'small',
                            shape: 'rectangle',
                            variant: 'secondary',
                            shadow: true,
                            text: 'My header button 1',
                        },
                        {
                            size: 'small',
                            shape: 'rectangle',
                            variant: 'secondary',
                            shadow: false,
                            text: 'My header button 2',
                        },
                    ],
                },
            },
        ];
    }
    renderContent(content) {
        const tag = content.element;
        const props = content.props;
        const children = props.children || [];
        const propsWithoutChildren = { ...content.props, children: undefined };
        const propsWithFlatStructure = Object.entries(propsWithoutChildren).reduce((acc, [key, value]) => {
            if (typeof value === 'object') {
                acc[key] = JSON.stringify(value);
            }
            else {
                acc[key] = value;
            }
            return acc;
        }, {});
        return html `<${unsafeStatic(tag)} ${spread(propsWithFlatStructure)}>
      ${typeof children === 'string'
            ? children
            : children.map((child) => this.renderContent(child))}
    </${unsafeStatic(tag)}>`;
    }
    render() {
        return html `${this.content.map((item) => this.renderContent(item))}`;
    }
};
MyServerContentRenderer.styles = [
    css `
      :host {
        display: grid;
        gap: 16px;
      }
    `,
];
MyServerContentRenderer = __decorate([
    customElement('my-server-content-renderer')
], MyServerContentRenderer);
export { MyServerContentRenderer };
//# sourceMappingURL=my-server-content-renderer.js.map