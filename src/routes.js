import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Page from './pages/Page';
import Author from './pages/Author';
import PopularLatestPosts from './pages/PopularLatestPosts';
import Contact from './pages/Contact';

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
          url: `${process.env.PUBLIC_URL}/p/${i}`
        });
      setHeaderPages(temp)
    }},[]);
  
    const [footerPages, setFooterPages] = useState([]);
    useEffect(() => {
      let temp = [
        {
          id: 1,
          name: `Últimas novidades`,
          url: process.env.PUBLIC_URL + '/latestposts'
        },
        {
          id: 2,
          name: `Populares`,
          url: process.env.PUBLIC_URL + '/popularposts'
        },
        {
          id: 3,
          name: `Contato`,
          url: process.env.PUBLIC_URL + '/contact'
        }
      ];
      setFooterPages(temp);
    },[]);
    
    return(
        <BrowserRouter>
            <Header logo={logo} blogName="Design Teste" pages={headerPages} />
            <Switch>
                <Route path={process.env.PUBLIC_URL + '/'} exact component={Index} />
                <Route path={process.env.PUBLIC_URL + '/p/:id/:page?'} component={Page} />
                <Route path={process.env.PUBLIC_URL + '/a/:id/:author?'} component={Author} />
                <Route path={process.env.PUBLIC_URL + '/popularposts'} component={PopularLatestPosts} />
                <Route path={process.env.PUBLIC_URL + '/latestposts'} component={PopularLatestPosts} />
                <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
            </Switch>
            <FooterNav logo={logo} blogName="Design Teste" blogDescription="Descrição do Blog" pages={footerPages}/>
        </BrowserRouter>
    );
}