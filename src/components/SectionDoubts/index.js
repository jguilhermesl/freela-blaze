import React, { useState } from 'react'

import { Doubt } from './Doubt'

import './style.scss'

export function SectionDoubts() {
    return (
        <div className="sectionDoubts">
            <h1 className="titleCustom">Dúvidas frequentes</h1>
            <div className="contentSectionDoubts">
                <Doubt question="Quais são as formas de pagamento?" answer="O método BLAZE ROYALE pode ser comprado através de PIX, débito, crédito e boleto." />
                <Doubt question="Em quanto tempo consigo ter resultados?" answer="A partir do momento que você se torna um membro seleto do BLAZE PRÓ, os resultado aparecem em até 7 dias se você aplicar e seguir TODAS as recomendações do nosso método." />
                <Doubt question="Como vou receber acesso?" answer="O método BLAZE ROYALE pode ser comprado através de PIX, débito, crédito e boleto." />
                <Doubt question="Por quanto tempo vou ter acesso ao método Japa da Blaze?" answer="O método BLAZE ROYALE pode ser comprado através de PIX, débito, crédito e boleto." />
                <Doubt question="A plataforma é segura?" answer="O método BLAZE ROYALE pode ser comprado através de PIX, débito, crédito e boleto." />
            </div>
        </div>
    )
}