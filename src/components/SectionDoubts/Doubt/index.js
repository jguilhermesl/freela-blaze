import React, { useState } from 'react'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import './style.scss'

export function Doubt({ question, answer }) {
    const [isDoubtOpen, setIsDoubtOpen] = useState(false)

    return (
        <div className="doubt">
            <h1 onClick={ () => setIsDoubtOpen(!isDoubtOpen) } className={`${isDoubtOpen && 'doubtOpen'}`}>{question} {isDoubtOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />} </h1>
            <div className={`answer ${isDoubtOpen ? 'answerOn' : 'answerOff'}`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}