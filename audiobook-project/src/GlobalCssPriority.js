import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

const GlobalCssPriority = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      {children}
    </StyledEngineProvider>
  );
};

export default GlobalCssPriority;
