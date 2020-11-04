import React, { lazy, Suspense } from 'react'
import Footer from '../common/Footer';
import Contact from '../Contact';

//  IMPORT COMPONENTS
import FAQ from '../FAQ';
import Hero from "../Hero";
import Pricing from '../Pricing';

// CODE-SPLITTING
const About = lazy(() => import('../About'))
const Feature = lazy(() => import('../Feature'))
const Works = lazy(() => import('../Works'))

export default function Home() {
    return (
        <div id="home" className="main">
            <Hero />
            <Suspense fallback={<div>Loading ...</div>} >
                <About />
                <Feature />
                <Works />
            </Suspense>
            <FAQ />
            <Pricing/>
            <Contact />
            <Footer />
        </div>
    )
}
