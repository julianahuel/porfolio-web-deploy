import React from 'react'
import { Container, Box, Typography, Card, CardMedia, CardContent, Stack, Pagination, Paper, useTheme, MobileStepper, Button } from "@mui/material"
import style from './projects.module.css'
import { countries0, countries1, countries2, countries3, countries4, pokemon0, pokemon1, pokemon2, task, task1, task2 } from '../../img/index.js'
import { useState } from "react"
import { autoPlay } from 'react-swipeable-views-utils'
import SwipeableViews from 'react-swipeable-views'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

const countriesImg = [
    { name: countries0, class: 'countries0' },
    { name: countries1, class: 'countries1' },
    { name: countries2, class: 'countries2' },
    { name: countries3, class: 'countries3' },
    { name: countries4, class: 'countries4' }
]

const pokemonsImg = [
    { name: pokemon0, class: 'pokemon0' },
    { name: pokemon1, class: 'pokemon1' },
    { name: pokemon2, class: 'pokemon2' }
]
const tasksImg = [
    { name: task, class: 'task0' },
    { name: task1, class: 'task1' },
    { name: task2, class: 'task2' }
]

export const Projects = () => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
    const theme = useTheme()
    const [activeStepCountry, setActiveStepCountry] = React.useState(0)
    const [activeStepPokemon, setActiveStepPokemon] = React.useState(0)
    const [activeStepTask, setActiveStepTask] = React.useState(0)
    const maxStepsCountries = countriesImg.length
    const maxStepsPokemons = pokemonsImg.length
    const maxStepsTasks = tasksImg.length

    const handleNextCountry = () => {
        setActiveStepCountry((prevActiveStep) => prevActiveStep + 1)
    }
    const handleBackCountry = () => {
        setActiveStepCountry((prevActiveStep) => prevActiveStep - 1)
    }
    const handleStepChangeCountry = (step) => {
        setActiveStepCountry(step)
    }

    // 

    const handleNextPokemon = () => {
        setActiveStepPokemon((prevActiveStep) => prevActiveStep + 1)
    }
    const handleBackPokemon = () => {
        setActiveStepPokemon((prevActiveStep) => prevActiveStep - 1)
    }
    const handleStepChangePokemon = (step) => {
        setActiveStepPokemon(step)
    }

    // 
    
    const handleNextTask = () => {
        setActiveStepTask((prevActiveStep) => prevActiveStep + 1)
    }
    const handleBackTask = () => {
        setActiveStepTask((prevActiveStep) => prevActiveStep - 1)
    }
    const handleStepChangeTask = (step) => {
        setActiveStepTask(step)
    }

    return <>
        <Container id='Projects' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10rem', scrollMarginTop: '100px' }}>
            <Box sx={{ marginBottom: '6rem' }}>
                <Typography
                    fontFamily='Raleway'
                    fontWeight='bold'
                    color='#ccd6f6'
                    component='h3'
                    variant='h3'
                    sx={{ textAlign: 'center' }} >
                    PERSONAL PROJECTS
                </Typography>
                <hr className={style.hrAbout} />
            </Box>

            {/* proyect 1 */}
            <Card sx={{ backgroundColor: '#062a46', borderRadius: '12px', color: 'white', height: '450px', width: '110%' }}>
                <CardContent sx={{ '&:last-child': { paddingBottom: 0 }, padding: 0, display: 'flex', flexDirection: 'row', height: '100%' }} >
                    <Box padding='1rem' width='50%' sx={{ textAlign: 'center', alignSelf: 'center' }}>
                        <Typography fontFamily='Fira Code' color='#ffe9a9' fontWeight='bold' component='h3' variant='h3' marginBottom='25px'>
                            Countries App
                        </Typography>
                        <Typography color='lightgray'>
                            SPA to search, browse and view information on each of the countries in the world and add tourist activities,
                            the season of the year in which the activity should be done, the duration of the activity and its difficulty.
                            The info of an api is brought and the data is modeled with POSTGRESQL and SEQUELIZE,
                            to make the routes use NODE JS AND EXPRESS and for the client part use REACT and REDUX.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', margin: 0, padding: 0, flexDirection: 'column', width: '50%' }}>
                        {/* <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'background.default',
                            }}
                        >
                            <Typography>{countriesImg[activeStep].class}</Typography>
                        </Paper> */}

                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStepCountry}
                            onChangeIndex={handleStepChangeCountry}
                            enableMouseEvents
                        >
                            {countriesImg.map((step, index) => (
                                <div key={step.class}>
                                    {Math.abs(activeStepCountry - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 400,
                                                display: 'block',
                                                maxWidth: 620,
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.name}
                                            alt={step.class}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            variant="progress"
                            steps={maxStepsCountries}
                            style={{ backgroundColor: '#062a46' }}
                            position="static"
                            activeStep={activeStepCountry}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNextCountry}
                                    disabled={activeStepCountry === maxStepsCountries - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBackCountry} disabled={activeStepCountry === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>

                </CardContent>
            </Card>

            {/* proyect 2 */}
            <Card sx={{ backgroundColor: '#062a46', borderRadius: '12px', color: 'white', height: '450px', width: '110%', marginTop: '2rem' }}>
                {/* proyect 1 */}
                <CardContent sx={{ '&:last-child': { paddingBottom: 0 }, padding: 0, display: 'flex', flexDirection: 'row', height: '100%' }} >
                    <Box padding='1rem' width='50%' sx={{ textAlign: 'center', alignSelf: 'center' }}>
                        <Typography fontFamily='Fira Code' color='#ffe9a9' fontWeight='bold' component='h3' variant='h3' marginBottom='25px'>
                            Pokemon App
                        </Typography>
                        <Typography color='lightgray'>
                            SPA to search, browse and view information on all the pokemons with all their abilities
                            and characteristics of each one, you can add your own pokemons and add the characteristics you want.
                            The info of an api is brought and the data is modeled with POSTGRESQL and SEQUELIZE,
                            to make the routes use NODE JS AND EXPRESS and for the client part use REACT and REDUX.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', margin: 0, padding: 0, flexDirection: 'column', width: '50%' }}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStepPokemon}
                            onChangeIndex={handleStepChangePokemon}
                            enableMouseEvents
                        >
                            {pokemonsImg.map((step, index) => (
                                <div key={step.class}>
                                    {Math.abs(activeStepPokemon - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 400,
                                                display: 'block',
                                                maxWidth: 620,
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.name}
                                            alt={step.class}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            variant="progress"
                            steps={maxStepsPokemons}
                            style={{ backgroundColor: '#062a46' }}
                            position="static"
                            activeStep={activeStepPokemon}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNextPokemon}
                                    disabled={activeStepPokemon === maxStepsPokemons - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBackPokemon} disabled={activeStepPokemon === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>

                </CardContent>
            </Card>

            {/* proyect 3 */}
            <Card sx={{ backgroundColor: '#062a46', borderRadius: '12px', color: 'white', height: '450px', width: '110%', marginTop: '2rem' }}>
                {/* proyect 1 */}
                <CardContent sx={{ '&:last-child': { paddingBottom: 0 }, padding: 0, display: 'flex', flexDirection: 'row', height: '100%' }} >
                    <Box padding='1rem' width='50%' sx={{ textAlign: 'center', alignSelf: 'center' }}>
                        <Typography fontFamily='Fira Code' color='#ffe9a9' fontWeight='bold' component='h3' variant='h3' marginBottom='25px'>
                            Task App
                        </Typography>
                        <Typography color='lightgray'>
                            Task App to create, edit and delete your own tasks or reminders
                            so you don't forget to study programming, drink water and exercise.
                            CRUD made with Node js, Express, PostgreSQL and Sequelize, Frontend
                            made with React and Material UI.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', margin: 0, padding: 0, flexDirection: 'column', width: '50%' }}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStepTask}
                            onChangeIndex={handleStepChangeTask}
                            enableMouseEvents
                        >
                            {tasksImg.map((step, index) => (
                                <div key={step.class}>
                                    {Math.abs(activeStepTask - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 400,
                                                display: 'block',
                                                maxWidth: 620,
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.name}
                                            alt={step.class}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            variant="progress"
                            steps={maxStepsTasks}
                            style={{ backgroundColor: '#062a46' }}
                            position="static"
                            activeStep={activeStepTask}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNextTask}
                                    disabled={activeStepTask === maxStepsTasks - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBackTask} disabled={activeStepTask === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>

                </CardContent>
            </Card>

        </Container>
    </>
}