/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "auto-fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
                "auto-fit-100": "repeat(auto-fill, minmax(150px, 1fr))",
            },
        },
        screens: {
            sm: "600px",
            // => @media (min-width: 640px) { ... }

            md: "960px",
            // => @media (min-width: 768px) { ... }

            lg: "1280px",
            // => @media (min-width: 1024px) { ... }

            xl: "1920px",
            // => @media (min-width: 1280px) { ... }

            xxl: "2560px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
