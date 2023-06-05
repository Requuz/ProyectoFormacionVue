module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: [{
            mytheme: {

                "primary": "#fff",

                "secondary": "#0a0a0a",

                "accent": "#0a0a0a",

                "neutral": "#0a0a0a",

                "base-100": "#0a0a0a",

                "info": "#90A7F3",

                "success": "#42D1C5",

                "warning": "#f8b530",

                "error": "#c62b1c",
            },
        }, ],
        rtl: false,
    },
}