// CSS Module
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.styl' {
    const classes: { [key: string]: string };
    export default classes;
}

// CSS
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

// Images
declare module "*.jpg" {
    export default string;
}
declare module "*.png" {
    export default string;
}
declare module "*.svg" {
    export default string;
}
declare module "*.jpeg" {
    export default string;
}
declare module "*.gif" {
    export default string;
}

declare module "react-classset" {
    const cx: (classes: { [K: string]: any }) => string;
    export default cx;
}