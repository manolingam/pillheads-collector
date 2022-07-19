import { extendTheme } from '@chakra-ui/react';

import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  base: '320px',
  md: '620px',
  lg: '1020px'
});

const colors = {
  brand: {
    yellowOne: '#F3FD2B',
    yellowTwo: '#F9FF80',
    yellowThree: '#DAE05A',
    purpleOne: '#5C1E94',
    purpleTwo: '#5C1E94'
  }
};

const fonts = {
  disketMono: 'disket_monoregular',
  hansonBold: 'hansonbold',
  roboto: "'Roboto', sans-serif"
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints
});
