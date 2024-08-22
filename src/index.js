import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Tạo theme tùy chỉnh nếu cần
const theme = createTheme({
  // Cấu hình theme tùy chỉnh nếu cần
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
