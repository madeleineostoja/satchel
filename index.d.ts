declare module "clearfix" {
    /**
     * Simple clearfix
     */
    export const clearFix = "\n  &::after{\n    content: '';\n    display: block;\n    clear: both;\n  }\n";
}
declare module "aspect/aspect" {
    type Options = {
        mode: 'expandable' | 'absolute' | 'lite';
    };
    /**
     * Constrain a box to an aspect ratio
     * @param x X aspect
     * @param y Y aspect
     */
    export function aspectRatio(x: number, y: number, options?: Options): string;
}
declare module "color/color" {
    /**
     * Generate rgba colours from a hex code
     * @param hex Hex code
     * @param alpha Alpha amout
     */
    export function rgba(hex: string, alpha?: number): string;
    /**
     * Generate Hex colours from an rgb(a) string
     * @param r Red channel
     * @param g Green channel
     * @param b Blue channel
     */
    export function hex(r: number, g: number, b: number): string;
}
declare module "fluid/fluid" {
    /**
     * Create fluid sizes based on viewport width
     * Ideal for responsive font-size
     * @param property Property to apply responsive size to
     * @param min Minimum property size
     * @param max Maximum property size
     * @param options Configuration options for the sizing
     */
    export function fluid(property: string, min: string, max: string, opts?: {
        minScreenSize?: string;
        maxScreenSize?: string;
    }): string;
}
declare module "font/font" {
    /**
     * Font face declaration generator
     * @param family Name of the font family
     * @param path Path to the font file (without file extension)
     * @param formats Array of formats to generate
     * @param options Font options
     */
    export function fontFace(family: string, path: string, formats?: string[], opts?: {
        weight?: string | number;
        style?: string;
        display?: string;
    }): string;
}
declare module "position/position" {
    /**
     * Set positioning properties with shorthand values
     * @param position Position property to generate
     * @param values Shorthand value string
     */
    export function position(position: string, values: string): string;
}
declare module "range/range" {
    /**
     * Mixin for styling inconsistent <input type="range" />
     * @param css CSS to apply to track and thumb
     */
    export function range({ track, thumb }?: {
        track?: string;
        thumb?: string;
    }): string;
}
declare module "reset/reset" {
    const RESETS: {
        button: string;
        input: string;
    };
    /**
     * Element specific resets
     * @param element Element to reset
     */
    export function reset(element: keyof typeof RESETS): string;
}
declare module "subgrid/subgrid" {
    /**
     * Basic 'display: subgrid' shim
     */
    export const subgrid = "\n  display: grid;\n  grid-column: 1 / 99;\n  grid: inherit;\n  grid-gap: inherit;\n  grid-template-columns: inherit;\n";
    /**
     * Shim grid row auto-placement in IE11
     * @param n Number of rows to shim
     */
    export function msGridRows(n?: number): string;
}
