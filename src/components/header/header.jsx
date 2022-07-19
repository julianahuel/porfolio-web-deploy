import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import style from './header.module.css'


export const Header = ()=>{
    return <Container id='Home' className={style.container}>
        <Box className={style.text}>

            <h1 
            // variant='h1'
            // sx={{fontSize:50}}
            // color='lightgray'
            className={style.h1}
            >
                Hi! My name is Julián Domínguez.
            </h1>

            <Typography 
            variant='h2' 
            component='h2'
            sx={{fontSize:23}}
            color='#ccd6f6'
            fontFamily='Raleway'
            // className={style.h2}
            >
                Software Developer
            </Typography>

        </Box>
    </Container>
    
}