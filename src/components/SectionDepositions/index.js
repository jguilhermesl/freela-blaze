import React, { useState } from 'react'

import print1 from '../../assets/print1.jpeg'
import print2 from '../../assets/print2.jpeg'
import print3 from '../../assets/print3.jpeg'
import print4 from '../../assets/print4.jpeg'

import './style.scss'

export function SectionDepositions() {
    return(
        <section className="sectionDepositions">
          <div className="contentSectionPhones">
            <h1 className="titleCustom">Depoimentos</h1>
              <div className="depositions">
                <img src={print1} alt="Print depoimento 1" />
                <img src={print2} alt="Print depoimento 2" />
                <img src={print3} alt="Print depoimento 3" />
                <img src={print4} alt="Print depoimento 4"/>
              </div>
          </div>
        </section>
    )
}