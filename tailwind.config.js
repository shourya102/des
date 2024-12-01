import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors
                'primary-1': 'var(--color-primary-1)',
                'primary-2': 'var(--color-primary-2)',
                'primary-3': 'var(--color-primary-3)',
                'primary-4': 'var(--color-primary-4)',
                'primary-5': 'var(--color-primary-5)',
                // Secondary colors
                'secondary-1': 'var(--color-secondary-1)',
                'secondary-2': 'var(--color-secondary-2)',
                'secondary-3': 'var(--color-secondary-3)',
                'secondary-4': 'var(--color-secondary-4)',
                'secondary-5': 'var(--color-secondary-5)',
                // Neutral colors
                'neutral-1': 'var(--color-neutral-1)',
                'neutral-2': 'var(--color-neutral-2)',
                'neutral-3': 'var(--color-neutral-3)',
            },
            fontFamily: {
                poppins: ['var(--font-family-poppins)'],
            },
            fontSize: {
                'hero-title': 'var(--font-size-hero-title)',
                'h1': 'var(--font-size-h1)',
                'h2': 'var(--font-size-h2)',
                'h3': 'var(--font-size-h3)',
                'h4': 'var(--font-size-h4)',
                'body-xl': 'var(--font-size-body-xl)',
                'body-lg': 'var(--font-size-body-lg)',
                'body-md': 'var(--font-size-body-md)',
                'body-sm': 'var(--font-size-body-sm)',
                'body-xs': 'var(--font-size-body-xs)',
            },
            borderRadius: {
                sm: 'var(--border-radius-sm)',  // 10px / 16px
                md: 'var(--border-radius-md)',  // 20px / 16px
                lg: 'var(--border-radius-lg)',  // 30px / 16px
            },
            spacing: {
                sm: 'var(--spacing-sm)',  // 10px / 16px
                md: 'var(--spacing-md)',  // 20px / 16px
                lg: 'var(--spacing-lg)',  // 30px / 16px
                xl: 'var(--spacing-xl)',  // 40px / 16px
                max: 'var(--spacing-max)', // 100px / 16px
            },
            backgroundImage: {
                'black-silk-fabric': 'var(--image-black-silk-fabric-texture)',
                'colourful-background': 'var(--image-colourful-background)',
            },
            dropShadow: {
                '20x-10y': 'var(--shadow-20x-10y)',
                '0x-20y-20': 'var(--shadow-0x-20y-20)',
            },
            boxShadow: {
                '0x-20y-20': 'var(--shadow-0x-20y-20)',
            },
            textShadow: {
                '0x-10y-50': 'var(--shadow-0x-10y-50)',
            }
        },
    },
    plugins: [
        plugin(function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                {values: theme('textShadow')}
            )
        }),
    ],
}