import React, { useState } from 'react'

import background from '../../assets/background.png'
import logo from '../../assets/logo.png'

import './style.scss'

export function SectionInitial() {
    return(
        <section className="sectionInitial">
          <div className="contentSectionInitial">
            <img src={logo} alt="Foto de Perfil Japa do Blaze"/>
            <h1>VOCÊ APRENDERÁ <span>DEFINITIVAMENTE A TER SUCESSO</span> NA BLAZE ONLINE COM A NOSSA METODOLOGIA!</h1>
            <p><span>OPORTUNIDADE ÚNICA</span> POIS ESTA SERÁ NOSSA TURMA BETA COM <span>80% DE DESCONTO!</span></p>
            <button type="button">QUERO FAZER PARTE</button>
            <img src={background} className="imgBg"/>
          </div>
        </section>
    )
}