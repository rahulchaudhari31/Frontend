/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F2A52',
        'primary-dark': '#0A1F3D',
        accent: '#F5A623',
        'accent-light': '#FCE9C7',
        navy: '#004CA5',
        orange: '#F39308',
        'orange-dark': '#E07D00',
        olive: '#C9DB82',
        'olive-dark': '#C8D96F',
        light: '#F8FAFC',
        muted: '#64748B',
        'muted-dark': '#475569',
        'bg-section': '#F2EFEA',
        'text-body': '#5A6472',
      },
      fontFamily: {
        heading: ['Poppins', 'Sora', 'sans-serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 4px 16px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
