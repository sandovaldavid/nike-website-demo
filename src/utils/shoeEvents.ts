import type { Shoe, ShoeSelectedEvent } from '../types';

export const dispatchShoeSelection = (shoe: Shoe) => {
    window.dispatchEvent(
        new CustomEvent('shoeSelected', {
            detail: {
                bigShoe: shoe.bigShoe,
                thumbnail: shoe.thumbnail,
            },
        }) as ShoeSelectedEvent
    );
};

export const handleShoeSelection = (event: Event) => {
    const shoeEvent = event as ShoeSelectedEvent;
    const mainImage = document.querySelector('img[alt="shoe collection"]');

    if (mainImage) {
        mainImage.setAttribute('src', shoeEvent.detail.bigShoe.src);
        updateShoeCardsVisualState(shoeEvent);
    }
};

const updateShoeCardsVisualState = (shoeEvent: ShoeSelectedEvent) => {
    document.querySelectorAll('[data-shoe]').forEach((element) => {
        const shoe = JSON.parse(element.getAttribute('data-shoe') || '{}');
        const parent = element.closest('.border-2');

        if (parent) {
            parent.classList.toggle(
                'border-coral-red',
                shoe.bigShoe.src === shoeEvent.detail.bigShoe.src
            );
            parent.classList.toggle(
                'border-transparent',
                shoe.bigShoe.src !== shoeEvent.detail.bigShoe.src
            );
        }
    });
};
