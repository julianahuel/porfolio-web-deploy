import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createTheme , ThemeProvider} from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  typography:{
    fontFamily: ['source-code-pro','Raleway', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    'monospace'].join(',')
  }
})


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

