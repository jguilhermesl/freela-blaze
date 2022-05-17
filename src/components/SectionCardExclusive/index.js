import React, { useState } from 'react'

import logo from '../../assets/logo.png'

import './style.scss'

export function SectionCardExclusive() {
    return(
        <section className="sectionCardExclusive">
          <div className="cardExclusive">
            <img src={logo} alt="" />
            <p>Você fará parte de uma turma EXCLUSIVA, serão apenas 100 vagas exclusivas para esta turma de teste, e ainda com 80% de desconto!</p>
            <span>Você quer ser um dos 100 exclusivos?</span>
          </div>
        </section>
    )
}