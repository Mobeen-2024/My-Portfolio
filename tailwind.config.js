/** @type {import('tailwindcss').Config} */

export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the paths according to your project structure
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "15px",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  fontFamily: {
    primary: "var(--font-jetbrainsMono)",
  },
  extend: {
    colors: {
      primary: "#1c1c22",
      accent: {
        DEFAULT: "#00ff99",
        hover: "#00e187",
      },
    },

    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        form: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accoedion-down": "accordation-down 0,2s ease-out",
      "accoedion-up": "accordation-up 0,2s ease-out",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
