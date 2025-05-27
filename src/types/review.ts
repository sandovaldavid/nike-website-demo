import type { ImageMetadata } from 'astro';

export interface Review {
    imgURL: ImageMetadata;
    customerName: string;
    rating: number;
    feedback: string;
}
