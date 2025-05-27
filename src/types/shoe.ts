import type { ImageMetadata } from 'astro';

export interface Shoe {
    thumbnail: ImageMetadata;
    bigShoe: ImageMetadata;
}

export interface ShoeSelectedEvent extends CustomEvent {
    detail: {
        bigShoe: {
            src: string;
        };
        thumbnail: {
            src: string;
        };
    };
}
