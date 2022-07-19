import { About } from '../about/about'
import { Header } from '../header/header'
import ResponsiveAppBar from '../navbar/NavBar'
import style from './page.module.css'
import {SocialMedia} from '../social/social'
import { Projects } from '../projects/projects'
import Contact from '../contact/contact'
import React from 'react'

export function Page(){
    return <div className={style.container}>
        <SocialMedia/>
        <header className={style.header}>
            <ResponsiveAppBar/>
            <Header/>
        </header>
        <About/>
        <Projects/>
        <Contact/>
        <footer className={style.footer}> Designed <p className={style.dAb}> & </p> Built by Julián Domínguez.</footer>
    </div>
    
}