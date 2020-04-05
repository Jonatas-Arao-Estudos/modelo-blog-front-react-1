import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from './pages/Inicio';

import Header from './components/Header';
import { FooterNav } from './components/Footer';

import logo from './assets/img/Logo.png';

export default function Routes() {
    const [headerPages, setHeaderPages] = useState([]);

    useEffect(() => {
      let temp = [];
      for(let i = 1; i <= 4; i++){
        temp.push({
          id: i,
          name: `Página ${i}`,
          url: process.env.PUBLIC_URL + '/'
        });
      setHeaderPages(temp)
    }},[]);
  
    const [footerPages, setFooterPages] = useState([]);
    useEffect(() => {
      let temp = [
        {
          id: 1,
          name: `Últimas novidades`,
          url: process.env.PUBLIC_URL + '/'
        },
        {
          id: 2,
          name: `Populares`,
          url: process.env.PUBLIC_URL + '/'
        },
        {
          id: 3,
          name: `Contato`,
          url: process.env.PUBLIC_URL + '/'
        }
      ];
      setFooterPages(temp);
    },[]);
    
    return(
        <BrowserRouter>
            <Header logo={logo} blogName="Design Teste" pages={headerPages} />
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} exact component={Inicio} />
            </Switch>
            <FooterNav logo={logo} blogName="Design Teste" blogDescription="Descrição do Blog" pages={footerPages}/>
        </BrowserRouter>
    );
}