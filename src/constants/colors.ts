export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export const lightTheme: Theme = {
  primary: '#007bff',
  secondary: '#6c757d',
  background: '#f8f9fa',
  text: '#343a40',
};

export const darkTheme: Theme = {
  primary: '#17a2b8',
  secondary: '#28a745',
  background: '#343a40',
  text: '#f8f9fa',
};
