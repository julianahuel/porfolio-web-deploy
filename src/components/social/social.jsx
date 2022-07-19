import React from 'react'
import { Box, IconButton, ButtonGroup, Link, Typography } from "@mui/material"
import './social.module.css'
import style from './social.module.css'

export const SocialMedia = ()=>{
    return <>
        <Box 
            position='fixed' 
            sx={{
                width: 40,
                position: 'fixed',
                bottom: 0,
                left: 40,
                right: 'auto',
                zIndex: 10,
                color: '#a8b2d1'
                }}
            >
            <ButtonGroup  orientation='vertical'  >

                <IconButton >
                    <Link sx={{color:'#8892b0', '&:hover':{color: 'lightgray'}}}  target="_blank" rel="noopener" href='https://www.linkedin.com/in/julián-dominguez/'>
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </Link> 
                </IconButton>

                <IconButton >
                    <Link sx={{color:'#8892b0', '&:hover':{color: 'lightgray'}}}  target="_blank" rel="noopener" href='https://github.com/julianahuel'>
                        <ion-icon name="logo-github"></ion-icon>
                    </Link> 
                </IconButton>

                <IconButton >
                    <Link sx={{color:'#8892b0', '&:hover':{color: 'lightgray'}}} target="_blank" rel="noopener" href='https://www.instagram.com/julianahuel/'>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </Link> 
                </IconButton>

            </ButtonGroup>
            <hr className={style.hrSocial}/>
        </Box>
        <Box
        position='fixed' 
        sx={{
            width: 40,
            position: 'fixed',
            bottom: 0,
            right: 40,
            left: 'auto',
            zIndex: 10,
            color: '#a8b2d1',
            display:'flex',
            flexDirection:'column'
            }}
        >
            <Typography sx={{fontSize:13}} className={style.email}>
                <Link underline='none' sx={{color:'#8892b0', '&:hover':{color: 'lightgray'}}}  target="_blank" rel="noopener" href='mailto:julian1dominguez@hotmail.com'>
                    julian1dominguez@hotmail.com
                </Link>
            </Typography>
            <hr className={style.hrSocial}/>
        </Box>
    </>
}   
