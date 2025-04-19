/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./.storybook/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#2C73F7',    // puedes ajustar según tu token
                    secondary: '#00214D'
                },
            }
        }
    },
    plugins: [],
}
