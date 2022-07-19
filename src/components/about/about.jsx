import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import style from './about.module.css'
import worker from '../../img/worker.png'
import team from '../../img/Teamwork.png'
import study from '../../img/study.png'
import talk from '../../img/talk.png'
import me from '../../img/me.png'
import react from '../../img/react-logo.png'
import redux from '../../img/redux.png'
import postgres from '../../img/postgresql.png'
import sequelize from '../../img/sequelize.png'
import React from 'react'

export function About (){

    return <>
        <Container id='About' sx={{display:'flex', flexDirection: 'column', alignItems:'center'}} className={style.container} >
            {/* ABOUT TEXT*/}
            <Box sx={{marginBottom:'4rem'}}>
                <Typography 
                fontFamily='Raleway'
                fontWeight='bold'
                color='#ccd6f6' 
                component='h3' 
                variant='h3' 
                sx={{textAlign:'center'}} >
                    ABOUT
                </Typography>
                <hr className={style.hrAbout}/>
            </Box>
            {/* CARDS SOFT SKILLS */}
            <Box container sx={{display:'flex', flexDirection:'row'}} textAlign='center' justifyContent='center' alignItems='center'>
                
                {/* CARD 1 */}
                <Box sx={{height:'380px', marginRight:5}} >
                    <img height='250px' src={worker} alt='Lover'/>
                    <Typography >
                        Passionate
                    </Typography>
                    <hr className={style.hrCards}/>
                    <Typography color='#8892b0' fontSize={17}>
                        I am passionate about web development, this portfolio is an example
                         of it because it is made with tons of love.
                    </Typography>
                </Box>

                {/* CARD 2 */}
                <Box sx={{height:'380px', marginRight:5}} >
                    <img height='250px' src={team} alt='Coworker'/>
                    <Typography >
                        Coworker
                    </Typography>
                    <hr className={style.hrCards}/>
                    <Typography color='#8892b0' fontSize={17}>
                        I encourage my colleagues to always achieve more, by offering moral support and listening to them.
                    </Typography>
                </Box>

                {/* CARD 3 */}
                <Box sx={{height:'380px', marginRight:5}} >
                    <img height='250px' src={study} alt='Student'/>
                    <Typography >
                        Student
                    </Typography>
                    <hr className={style.hrCards}/>
                    <Typography color='#8892b0' fontSize={17}>
                        I like to be in constant learning, learn new and interesting technologies.
                    </Typography>
                </Box>

                {/* CARD 4 */}
                <Box sx={{height:'380px'}} >
                    <img height='250px' src={talk} alt=''/>
                    <Typography >
                        Initiative
                    </Typography>
                    <hr className={style.hrCards}/>
                    <Typography color='#8892b0' fontSize={17}>
                        Sometimes I like to propose new ideas or help colleagues with their problems.
                    </Typography>
                </Box>

            </Box>

            <Box container sx={{display:'flex', flexDirection:'row', marginTop:'6rem', justifyContent:'center', alignItems:'center'}}>
                {/* IMAGE */}
                <Box paddingRight={15}>
                    <img height='300px' src={me} alt='me'/>
                </Box>
                <Box width={450} height={350} sx={{displa:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography>
                        I am a Full Stack developer who has enjoyed the PC since I was a child and enjoyed it even more when I discovered this vocation a year and a half ago. 
                        I have big dreams because I want to be a great developer, so I study daily to be the best version of myself.
                    </Typography>
                    <br/>
                    <Typography >
                        Here are a few technologies I’ve been working with recently: <br/>
                    </Typography>
                    <br/>
                    <Box sx={{textAlign:'-webkit-center'}}>

                        {/* Javascript */}
                        <Accordion sx={{ disableGutters:true, width:'175px' ,color:'white', backgroundColor:'#00395a93'}}>
                            <AccordionSummary >
                                <ion-icon name="logo-javascript"></ion-icon>
                                <Typography marginLeft={1}>Javascript</Typography>
                            </AccordionSummary>
                        </Accordion>

                        {/* React */}
                        <Accordion disableGutters='true' sx={{width:'175px' ,color:'white', backgroundColor:'#00395a93'}}>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <img src={react} alt='React'/>
                                <Typography marginLeft={1}>React</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding:'5px', marginTop:'0', paddingTop:'0'}}>
                                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <img src={redux} alt='Redux'/>
                                    <Typography paddingLeft='.5rem' paddingRight='.5rem'>Redux</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        
                        {/* Node */}
                        <Accordion disableGutters='true' sx={{width:'175px' ,color:'white', backgroundColor:'#00395a93'}}>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <ion-icon name="logo-nodejs"></ion-icon>
                                <Typography marginLeft={1}>Node Js</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding:'5px', marginTop:'0', paddingTop:'0'}}>
                                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <ion-icon name="logo-nodejs"></ion-icon>
                                    <Typography paddingLeft='.5rem' paddingRight='.5rem'>Express js</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        {/* Postgres */}
                        <Accordion disableGutters='true' sx={{width:'175px' ,color:'white', backgroundColor:'#00395a93'}}>
                            <AccordionSummary expandIcon={<ExpandMore/>} >
                                <img src={postgres} alt='postgres'/>
                                <Typography marginLeft={1}>PostgreSQL</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding:'5px', marginTop:'0', paddingTop:'0'}}>
                                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <img height='20px' src={sequelize} alt='Sequelize'/>
                                    <Typography paddingLeft='.5rem' paddingRight='.5rem'>Sequelize</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                    </Box>  
                </Box>
            </Box>

        </Container>
    </>

}