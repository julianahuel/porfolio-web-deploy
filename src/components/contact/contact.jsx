import React from 'react'
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import style from './contact.module.css'
import SendIcon from '@mui/icons-material/Send'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () =>{

    const sendEmail = (e)=>{
        e.preventDefault()

        emailjs.sendForm( 'service_d40arvn' ,'template_7xoafv9', e.target, '1lxzPClWEZxKxQ_zv')
        .then(Swal.fire({
            title: 'Success',
            text: 'I’ll try my best to get back to you!',
            color: 'lightgray',
            icon: 'success',
            confirmButton: 'Cool',
            confirmButtonColor: '#0f477e',
            background:'#0e162aba'
        }))
        .then(e.target.reset())
    }

    return (
        <Container id='Contact'  sx={{marginTop:'5rem', textAlign:'-webkit-center'}}>
            <Box sx={{marginBottom:'4rem'}}>
                <Typography 
                fontFamily='Raleway'
                fontWeight='bold'
                color='#ccd6f6' 
                component='h3' 
                variant='h3' 
                sx={{textAlign:'center'}} >
                    CONTACT
                </Typography>
                <hr className={style.hrContact}/>
            </Box>

            <Typography width='30rem'>
                My inbox is always open. 
                If you have a question or just want to say hi, 
                I will try to answer you.
            </Typography>

            <Box onSubmit={sendEmail} component='form' height='25rem' width='25rem' sx={{display:'flex', flexDirection:'column', marginTop:'2rem', borderRadius:'10px', padding:'10px'}}>
                <TextField
                    variant='filled'
                    name= 'user_name'
                    required
                    label='Your name'
                    sx={{'& label ':{color:'gray'}, '& .MuiFilledInput-root':{'&:hover':{backgroundColor:'#0f3450cf'}, '& #mui-2': {color: '#ccd6f6', backgroundColor: '#062a46'}}, marginTop:'2rem', color:'white' }}
                />
                <TextField
                    name= 'user_email'
                    variant='filled'
                    required
                    type='email'
                    label='Your email'
                    sx={{'& label ':{color:'gray'}, '& .MuiFilledInput-root':{'&:hover':{backgroundColor:'#0f3450cf'}, '& #mui-3': {color: '#ccd6f6', backgroundColor: '#062a46'}}, marginTop:'2rem' }}
                />
                <TextField
                    name= 'user_message'
                    multiline
                    variant='filled'
                    rows={4}
                    required
                    label='Your message'
                    sx={{ '& .Mui-focused':{color: 'lightblue'} ,'& label ':{color:'gray'}, '& .MuiFilledInput-root':{ '&:hover':{backgroundColor:'#0f3450cf'} ,backgroundColor: '#062a46','& #mui-4': {color: '#ccd6f6'}}, marginTop:'2rem' }}
                />
                <Button type='submit' sx={{marginTop:'1rem', width:'100px'}} variant='outlined' endIcon={<SendIcon/>} >Send</Button>
            </Box>
        </Container>
    )
}

export default Contact