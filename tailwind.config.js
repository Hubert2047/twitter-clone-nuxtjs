/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                dim: {
                    50: '#5F99F7',
                    100: '#5F99F7',
                    200: '#38444d',
                    300: 'rgba(255, 255, 255, 0.05)',
                    400: '#253341',
                    500: '#5F99F7',
                    600: '#5F99F7',
                    700: '#16181c',
                    800: '#162d40',
                    900: '#000000',
                },
                dark: {
                    100: 'rgba(29, 155, 240, 0.1)',
                    200: 'rgb(215, 219, 220)',
                    300: 'rgb(47, 51, 54)',
                    text: {
                        100: 'rgb(113, 118, 123)',
                    },
                },
            },
        },
    },
    plugins: [],
}
