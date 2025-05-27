import type { ImageMetadata } from 'astro';

export interface Product {
    imgURL: ImageMetadata;
    name: string;
    price: string;
}
