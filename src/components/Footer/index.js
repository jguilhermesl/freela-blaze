import React from 'react'

import logo from '../../assets/logo.png'

import './style.scss'

export function Footer() {
    return(
        <div className="footer">
            <div className="contentFooter">
                <h1 className="titleCustom">Suporte</h1>
                <span>@japadablaze</span>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}