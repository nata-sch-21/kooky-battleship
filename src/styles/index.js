const defaultTheme = {
  colors: {
    bgColor: '#133e69',
    textColor: '#fff',
  },
  font: {
    size: {

    },
  },
};

const getTheme = () => defaultTheme;

export default {
  colors: getTheme().colors,
  font: getTheme().font,
  borderRadius: 10,
};
