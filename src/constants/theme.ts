export interface Theme {
  primary: string;
  alternativePrimary: string;
  secondary: string;
  background: string;
  text: string;
  disabled: string;
  neutral: string;
  online: string;
  purple: string;
}

export const lightTheme: Theme = {
  primary: '#002DE3',
  alternativePrimary: '#375FFF',
  secondary: '#F7F7FC',
  background: '#FFFFFF',
  text: '#0F1828',
  disabled: '#ADB5BD',
  neutral: '#EDEDED',
  online: '#2CC069',
  purple: '#D2D5F9',
};

export const darkTheme: Theme = {
  primary: '#375FFF',
  alternativePrimary: '#879FFF',
  secondary: '#152033',
  background: '#0F1828',
  text: '#F7F7FC',
  disabled: '#ADB5BD',
  neutral: '#152033',
  online: '#2CC069',
  purple: '#D2D5F9',
};

export const FontFamily = {
  regular: 'Mulish-Regular',
  semiBold: 'Mulish-SemiBold',
  bold: 'Mulish-Bold',
};
