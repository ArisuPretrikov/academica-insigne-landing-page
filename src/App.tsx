import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Suas importações originais
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import VideoSobre from './components/videoSobre/videoSobre';
import TextoSobre from './components/textoSobre/textoSobre';
import Servicos from './components/servicos/servicos';
import Depoimentos from './components/depoimentos/depoimentos';
import Preco from './components/preco/preco';
import FAQ from './components/faq/faq';
import Newsletter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';
import './App.css';
import './components/responsive.css';


// ---------------------------------------------------------
// 1. Componente de Layout (Header e Footer Fixos)
// ---------------------------------------------------------
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// ---------------------------------------------------------
// 2. Componente da Página Inicial (Home)
// ---------------------------------------------------------
const Home = () => {
  return (
    <>

      <section id="inicio"><Hero /></section>
      <section id="sobre"><VideoSobre /></section>
      <section id="equipe"><TextoSobre /></section>
      <section id="servico"><Servicos /></section>
      <section id="depoimentos"><Depoimentos /></section>
      <section id="preco"><Preco /></section>
      <section id="faq"><FAQ /></section>
      <section id="newsletter"><Newsletter/></section>
    </>
  );
};

// ---------------------------------------------------------
// 3. Páginas Adicionais (Você pode criar arquivos separados para elas depois)
// ---------------------------------------------------------
const Livros = () => <div className="p-10 text-center text-2xl font-bold">📚 Página de Livros</div>;
const Contato = () => <div className="p-10 text-center text-2xl font-bold">📞 Página de Contato</div>;
const Login = () => <div className="p-10 text-center text-2xl font-bold">🔐 Página de Login</div>;

// ---------------------------------------------------------
// 4. Configuração Principal de Rotas
// ---------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* A rota pai "/" usa o Layout. Tudo aqui dentro terá o Header e o Footer. */}
        <Route path="/" element={<Layout />}>
          
          {/* O index significa que essa é a rota principal do pai (ou seja, apenas "/") */}
          <Route index element={<Home />} />
          
          {/* Sub-rotas */}
          <Route path="inicio" element={<Hero />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;