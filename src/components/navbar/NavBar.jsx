import * as React from 'react';
import {AppBar,Box, Toolbar, IconButton,Container,Avatar,Button,Tooltip} from '@mui/material';
import {ThemeProvider,createTheme } from '@mui/material/styles'
import img from '../../img/profile2.jpg'

const pages = [{name:'About', href: '#About'}, {name:'Projects', href:'#Projects'}, {name:'Contact', href:'#Contact'}];

const ResponsiveAppBar = () => {

  let theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00395ac7',
      },
    },
  })

  return (
    <ThemeProvider theme = {theme}>
      <AppBar position="fixed" component='nav' sx= {{backgroundColor:"#fff0"}}>
        <Container maxWidth="xl" >
          <Toolbar disableGutters  >
            
            <Box sx={{ml:20,flexGrow:2, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  value = 'Home'
                  // onClick={handleClick}
                  href='#Home'
                  key={'Home'}
                  sx={{ mr:1, my: 2.7, color: '#ccd6f6', display: 'block' , fontSize:15, '&:hover': {backgroundColor: '#00395ac7'} }}
                  variant='outlined'
                  aria-label="text button group"
                  size= 'large'
                  >
                  Home
                </Button>
              {pages.map((page) => (
                
                <Button
                  href={page.href}
                  value={page.name}
                  key={page.name}
                  sx={{ mr:1, my: 3, color: '#ccd6f6', display: 'block' , fontSize:15, '&:hover': {backgroundColor: '#00395ac7'} }}
                  variant='text'
                  aria-label="text button group"
                >
                  {page.name}
                </Button>

              ))}
            </Box>
            <Box >
              <Tooltip title="Julián Domínguez">
                <IconButton sx={{mr:20 ,p: 2 }}>
                  <Avatar alt="JD" src={img} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>

  );
};
export default ResponsiveAppBar;
