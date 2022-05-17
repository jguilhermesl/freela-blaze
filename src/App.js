import React, { useState } from 'react'

import logo from './assets/logo.png'
import cel1 from './assets/cel1.png'
import cel2 from './assets/cel2.png'
import print1 from './assets/print1.jpeg'
import print2 from './assets/print2.jpeg'
import print3 from './assets/print3.jpeg'
import print4 from './assets/print4.jpeg'

import background from './assets/background.png'

import './styles/globalStyle.scss'

import { SectionDepositions } from './components/SectionDepositions'
import { SectionPhones } from './components/SectionPhones'
import { SectionCardExclusive } from './components/SectionCardExclusive'
import { SectionInitial } from './components/SectionInitial'
import { SectionTelegram } from './components/SectionTelegram'
import { SectionDoubts } from './components/SectionDoubts'

function App() {
  return (
    <div className="App">

        <SectionInitial />
        <SectionCardExclusive />
        <SectionPhones />
        <SectionDepositions />
        <SectionTelegram />
        <SectionDoubts />

    </div>
  );
}

export default App;
