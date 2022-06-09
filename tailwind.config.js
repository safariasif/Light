module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm_smobile: '320px',
      sm_mmobile: '375px',
      sm_lmobile: '425px',
      sm: '640px',
      md: '875px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      lxl: '1900px',
    },
    height: {
      100: '100px',
      195: '195px',
      300: '300px',
      400: '400px',
      500: '574px',
      580: '580px',
    },
    backgroundColor: {
      bgWave: '#1E3D59',
      white: '#ffffff',
      gray: '#F1F1F1',
    },
    textColor: {
      textWave: '#1E3D59',
      white: '#fff',
      black: '#000000',
      red: '#D92E09 ',
    },
  },
  plugins: [],
};
