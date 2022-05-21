import React from 'react'

import './styles/globalStyle.scss'

import { SectionDepositions } from './components/SectionDepositions'
import { SectionPhones } from './components/SectionPhones'
import { SectionCardExclusive } from './components/SectionCardExclusive'
import { SectionInitial } from './components/SectionInitial'
import { SectionTelegram } from './components/SectionTelegram'
import { SectionDoubts } from './components/SectionDoubts'
import { SectionPlans } from './components/SectionPlans'
import { Footer } from './components/Footer'
import { IconWhats } from './components/IconWhats'

function App() {
  return (
    <div className="App">

        <SectionInitial />
        <SectionCardExclusive />
        <SectionPhones />
        <SectionDepositions />
        <SectionTelegram />
        <SectionDoubts />
        <SectionPlans />
        <Footer />
        <IconWhats />
    </div>
  );
}

export default App;
