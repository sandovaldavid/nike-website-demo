import type { ImageMetadata } from 'astro';

export interface Service {
    imgURL: ImageMetadata;
    label: string;
    subtext: string;
}
