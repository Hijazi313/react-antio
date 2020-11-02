import React, { lazy, Suspense } from 'react'

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
        <div className="main">
            <Hero />
            <Suspense fallback={<div>Loading ...</div>} >
                <About />
                <Feature />
                <Works />
            </Suspense>
            <FAQ />
            <Pricing/>
        </div>
    )
}
