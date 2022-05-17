import React, { useState } from 'react'

import cel1 from '../../assets/cel1.png'
import cel2 from '../../assets/cel2.png'

import background from '../../assets/background.png'

import './style.scss'

export function SectionPhones() {
    return(
        <section className="sectionPhones">
            <div className="contentSectionPhones">
                <h1> Sala de Sinais VIP para Jogadores no Crash e Double da plataforma de apostas Blaze. </h1>
                <div className="photosPhones">
                    <img src={cel1} alt="" />
                    <img src={cel2} alt="" />
                </div>
                <span>Faça parte da melhor sala de sinais.</span>
                <button type="button">QUERO FAZER PARTE</button>
            </div>
            <img src={background} className="imgBg"/>
      </section>
    )
}