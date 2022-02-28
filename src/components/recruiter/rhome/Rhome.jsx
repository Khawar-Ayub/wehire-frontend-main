import React from 'react'
import Section1 from './section1/Section1'
import Rheader from '../rheader/Rheader'
import "./rhome.css"
import Section2 from './section2/Section2'

export default function Rhome() {
    return (
        <div className="rhome">
            <Rheader/>
            <Section1/>
            <Section2/>
        </div>
    )
}
