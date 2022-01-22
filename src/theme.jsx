import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#24292e',
    secondary: '#0366d6',
    bg: '#ffffff'
  },
  fontSizes: {
    body: 14,
    subheading: 18
  },
  fonts: {
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },
  img: {
    width: 50,
  }
};

export default theme;