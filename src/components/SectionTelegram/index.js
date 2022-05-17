import React, { useState } from 'react'

import background from '../../assets/background.png'

import { FaTelegramPlane } from 'react-icons/fa'

import './style.scss'

export function SectionTelegram() {
    return(
        <section className="sectionTelegram">
            <div className="contentSectionTelegram">
                <h1 className="titleCustom">Conheça nosso grupo gratuito</h1>
                <a href="" target="_blank" className="iconTelegram">
                    <FaTelegramPlane />
                </a>
                <span>CANAL FREE [DOUBLE]</span>
                <span>Chamar @japadablaze</span>
            </div>
            <img src={background} className="imgBg"/>
      </section>
    )
}