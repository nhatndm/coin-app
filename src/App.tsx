import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

// APP ROUTE
import AppRoute from './route';

function App() {
  return (
    <Router>
      <Container maxW="8xl" height="full" display="flex" flexDirection="column" justifyContent="center">
        <AppRoute />
      </Container>
    </Router>
  );
}

export default App;
