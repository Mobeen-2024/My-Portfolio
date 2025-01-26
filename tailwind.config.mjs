/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
	screens: {
	  sm: '640px',
	  md: '768px',
	  lg: '960px',
	  xl: '1200px'
	},
	fontFamily: {
		primary: "var(--font-jertbrainsMono)",
	},
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
			form: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
        }
	},
		animation: {
		  "accoedion-down": "accordation-down 0,2s ease-out",
		  "accoedion-up": "accordation-up 0,2s ease-out"
		},
      },
	},
	plugins: [require("tailwindcss-animate")],
}