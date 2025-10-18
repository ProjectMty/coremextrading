export default {
content: [
"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
container: { center: true, padding: "1rem" },
colors: {
brand: {
green: "#00A86B", // Verde principal CoreMex
blue: "#0072CE", // Azul secundario CoreMex
dark: "#0A0F1C",
light: "#F5F7FA",
},
},
backgroundImage: {
"core-gradient": "linear-gradient(135deg, #00A86B 0%, #0072CE 100%)",
},
fontFamily: {
poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
},
boxShadow: {
soft: "0 8px 30px rgba(0,0,0,0.06)",
},
borderRadius: {
xl: "1rem",
'2xl': "1.25rem",
}
},
},
plugins: [],
} satisfies import('tailwindcss').Config;