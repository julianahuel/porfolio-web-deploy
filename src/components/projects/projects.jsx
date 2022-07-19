import React from 'react'
import { Container, Box, Typography, Card, CardMedia, CardContent, Stack, Pagination } from "@mui/material"
import style from './projects.module.css'
import countries0  from '../../img/countries.png'
import countries1  from '../../img/countries1.png'
import countries2  from '../../img/countries2.png'
import countries3  from '../../img/countries3.png'
import countries4  from '../../img/countries4.png'
import pokemon0  from '../../img/pokemons.png'
import pokemon1  from '../../img/pokemons1.png'
import pokemon2  from '../../img/pokemons2.png'
import task from '../../img/taskApp.png'
import task1 from '../../img/taskApp1.png'
import task2 from '../../img/taskApp2.png'
import { useState } from "react"

export const Projects = ()=>{

    const countriesImg = [
        {name: countries0, class:'countries0'}, 
        {name: countries1, class:'countries1'}, 
        {name: countries2, class:'countries2'}, 
        {name: countries3, class:'countries3'}, 
        {name: countries4, class:'countries4'}
    ]

    const pokemonImg = [
        {name: pokemon0, class:'pokemon0'}, 
        {name: pokemon1, class:'pokemon1'}, 
        {name: pokemon2, class:'pokemon2'}
    ]
    
    const taskImg = [
        {name: task, class:'task0'}, 
        {name: task1, class:'task1'}, 
        {name: task2, class:'task2'}
    ]

    const [pageCountries, setPageCountries] = useState(1)
    const [pagePokemon, setPagePokemon] = useState(1)
    const [pageTask, setPageTask] = useState(1)

    const handleChangeCountries = (event ,value) =>{
        event.preventDefault()
        setPageCountries(value)
    }
    const handleChangePokemon = (event ,value) =>{
        event.preventDefault()
        setPagePokemon(value)
    }
    const handleChangeTask= (event ,value) =>{
        event.preventDefault()
        setPageTask(value)
    }

    return <>
        <Container id='Projects' sx={{display:'flex', flexDirection: 'column', alignItems:'center', marginTop:'10rem', scrollMarginTop: '100px'}}>
            <Box sx={{marginBottom:'6rem'}}>
                <Typography 
                fontFamily='Raleway'
                fontWeight='bold'
                color='#ccd6f6' 
                component='h3' 
                variant='h3' 
                sx={{textAlign:'center'}} >
                    PROJECTS
                </Typography>
                <hr className={style.hrAbout}/>
            </Box>

                {/* proyect 1 */}
            <Card sx={{backgroundColor:'#062a46',borderRadius :'12px', color:'white', height:'450px', width:'110%'}}>
                <CardContent  sx={{ '&:last-child':{paddingBottom:0}, padding:0, display:'flex', flexDirection:'row', height:'100%' }} >
                    <Box padding='1rem' width='50%' sx={{textAlign:'center' , alignSelf:'center'}}>
                        <Typography fontFamily='Fira Code' color='#ffe9a9' fontWeight='bold' component='h3' variant='h3' marginBottom='25px'>
                            Countries App
                        </Typography>
                        <Typography  color='lightgray'> 
                            SPA to search, browse and view information on each of the countries in the world and add tourist activities, 
                            the season of the year in which the activity should be done, the duration of the activity and its difficulty. 
                            The info of an api is brought and the data is modeled with POSTGRESQL and SEQUELIZE,
                            to make the routes use NODE JS AND EXPRESS and for the client part use REACT and REDUX.
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', margin:0, padding:0 ,flexDirection:'column', width:'50%'}}>
                        <CardMedia sx={{
                            width: '100%',
                            height: '100%',
                            position:'static',
                        }}  component='img' image={countriesImg[pageCountries-1].name} />

                        <Stack position='absolute' spacing={2}>
                            <Pagination 
                            color='primary' 
                            sx={{ 
                                backgroundColor:'#00edff2b', 
                                marginLeft:'215px', 
                                marginTop:'400px', 
                                borderRadius:'10px'
                            }} 
                            value={pageCountries} 
                            onChange={handleChangeCountries} 
                            count={countriesImg.length} 
                            shape='rounded'/>
                        </Stack>
                    </Box>

                </CardContent>
            </Card>
                {/* proyect 2 */}
            <Card sx={{backgroundColor:'#062a46',borderRadius :'12px', color:'white', height:'450px', width:'110%', marginTop:'2rem'}}>
                {/* proyect 1 */}
                <CardContent  sx={{ '&:last-child':{paddingBottom:0}, padding:0, display:'flex', flexDirection:'row', height:'100%' }} >
                    <Box padding='1rem' width='50%' sx={{textAlign:'center' , alignSelf:'center'}}>
                        <Typography fontFamily='Fira Code' color='#ffe9a9' fontWeight='bold' component='h3' variant='h3' marginBottom='25px'>
                            Pokemon App
                        </Typography>
                        <Typography  color='lightgray'> 
                            SPA to search, browse and view information on all the pokemons with all their abilities 
                            and characteristics of each one, you can add your own pokemons and add the characteristics you want. 
                            The info of an api is brought and the data is modeled with POSTGRESQL and SEQUELIZE,
                            to make the routes use NODE JS AND EXPRESS and for the client part use REACT and REDUX.
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', margin:0, padding:0 ,flexDirection:'column', width:'50%'}}>
                        <CardMedia sx={{
                            width: '100%',
                            height: '100%',
                            position:'static',
                        }}  component='img' image={pokemonImg[pagePokemon-1].name} />

                        <Stack position='absolute' spacing={2}>
                            <Pagination 
                            color='primary' 
                            sx={{ 
                                backgroundColor:'#00edff2b', 
                                marginLeft:'215px', 
                                marginTop:'400px', 
                                borderRadius:'10px'
                            }} 
                            value={pagePokemon} 
                            onChange={handleChangePokemon} 
                            count={pokemonImg.length} 
                            shape='rounded'/>
                        </Stack>
                    </Box>

                </CardContent>
            </Card>
                {/* proyect 3 */}
            <Card sx={{backgroundColor:'#062a46',borderRadius :'12px', color:'white', height:'450px', width:'110%', marginTop:'2rem'}}>
                {/* proyect 1 */}
                <CardContent  sx={{ '&:last-child':{paddingBottom:0}, padding:0, display:'flex', flexDirection:'row', height:'100%' }} >
                    <Box padding='1rem' width='50%' sx={{textAlign:'center' , alignSelf:'center'}}>
                        <Typography fontFamily='Fira Code' color='#ffe9a9' fontWeight='bold' component='h3' variant='h3' marginBottom='25px'>
                            Task App
                        </Typography>
                        <Typography  color='lightgray'> 
                            Task App to create, edit and delete your own tasks or reminders 
                            so you don't forget to study programming, drink water and exercise. 
                            CRUD made with Node js, Express, PostgreSQL and Sequelize, Frontend 
                            made with React and Material UI.
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex', margin:0, padding:0 ,flexDirection:'column', width:'50%'}}>
                        <CardMedia sx={{
                            width: '100%',
                            height: '100%',
                            position:'static',
                        }}  component='img' image={taskImg[pageTask-1].name} />

                        <Stack position='absolute' spacing={2}>
                            <Pagination 
                            color='primary' 
                            sx={{ 
                                backgroundColor:'#00edff2b', 
                                marginLeft:'215px', 
                                marginTop:'400px', 
                                borderRadius:'10px'
                            }} 
                            value={pagePokemon} 
                            onChange={handleChangeTask} 
                            count={taskImg.length} 
                            shape='rounded'/>
                        </Stack>
                    </Box>

                </CardContent>
            </Card>
            
        </Container>
    </>
}