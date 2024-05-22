import React from 'react'
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Container = styled.div`
height: 60px;
color: #ffb700;
background: rgba( 0, 113, 146, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
z-index:2;
`;



const Navbar = () => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" color='white'>
        <Link underline="hover" color="white" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="white"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="white">Breadcrumbs</Typography>
      </Breadcrumbs>

    </Container>

  )
}

export default Navbar;