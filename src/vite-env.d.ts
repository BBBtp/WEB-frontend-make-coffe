// Для файлов SVG
declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    const content: string;
    export default content;
}

// Для файлов PNG
declare module '*.png' {
    const content: string;
    export default content;
}

// Для файлов JPG/JPEG
declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

// Для файлов GIF
declare module '*.gif' {
    const content: string;
    export default content;
}

// Для файлов WEBP
declare module '*.webp' {
    const content: string;
    export default content;
}

// Для файлов ICO
declare module '*.ico' {
    const content: string;
    export default content;
}

// Для файлов BMP
declare module '*.bmp' {
    const content: string;
    export default content;
}
