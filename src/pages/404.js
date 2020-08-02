import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import { Component } from "react";
// import { withPrefix } from 'gatsby';

class Page404 extends Component {
  
  render() {
  return (
    <PrimaryLayout>
      <section className="page404">
        <h1>Página não encontrada</h1>
        <div>Não encontramos a página que você procura. Utilize os links acima para voltar ao site os a informação abaixo para entrar em contato conosco.</div>
        <a href="/">Página Inicial</a>
      </section>
    </PrimaryLayout>
)}
};

export default Page404;