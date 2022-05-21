import React from 'react'

import background from '../../assets/background.png'
import logo from '../../assets/logo.png'
import methods from '../../assets/methodsPayment.png'

import { BiCheck } from 'react-icons/bi'

import './style.scss'

export function SectionPlans() {
    return (
        <section className="sectionPlans" id="sectionPlans">
            <div className="contentSectionPlans">
                <h1 className="titleCustom">Dúvidas frequentes</h1>
                <div className="cardsPlans">
                    <div className="boxCard">
                        <h1>Plano MENSAL</h1>
                        <div className="line"></div>
                        <span>R$ 80,00</span>
                        <div className="line"></div>
                        <h2>Conheça as vantagens do plano Vitalício.</h2>
                        <div className="benefits">
                            <span><BiCheck /> Acesso às aulas</span>
                            <span><BiCheck /> Planilhas de Gerenciamento</span>
                            <span><BiCheck /> Grupo de Double</span>
                            <span><BiCheck /> Grupo de Crash</span>
                            <span><BiCheck /> Chat dos VIPs</span>
                        </div>
                        <div className="buttonCardPlan">
                            <a href="https://pay.kiwify.com.br/GLgiBhk" target="_blank">
                                <button>
                                    QUERO ESSE
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="boxCard">
                        <h1>Plano VITALÍCIO</h1>
                        <div className="line"></div>
                        <span>
                            R$ 297,00
                            <p>ou 12x de R$ 29,82</p>
                        </span>
                        <div className="line"></div>
                        <h2>Conheça as vantagens do plano Mensal.</h2>
                        <div className="benefits">
                            <span><BiCheck /> Acesso às aulas</span>
                            <span><BiCheck /> Planilhas de Gerenciamento</span>
                            <span><BiCheck /> Grupo de Double</span>
                            <span><BiCheck /> Grupo de Crash</span>
                            <span><BiCheck /> Chat dos VIP</span>
                            <span><BiCheck /> Robô grátias para PC</span>
                            <span><BiCheck /> Atualizações e estratégias semanais</span>
                        </div>
                        <div className="buttonCardPlan">
                            <button>
                                <a href="https://pay.kiwify.com.br/oSBjlmP" target="_blank">
                                    QUERO ESSE
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="methodsPaymentImage">
                    <img src={methods} alt="methods payment" />
                </div>
                <button className="lastChance"><a href="https://pay.kiwify.com.br/GLgiBhk" target="_blank">ÚLTIMA CHANCE</a></button>
                <img src={background} className="imgBg" />
            </div>
        </section>
    )
}