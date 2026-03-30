
import Logo from '../../assets/logo1.png'
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const main = import.meta.env.VITE_MAIN || "/";
    const location = useLocation();
    const navigate = useNavigate();

    // Função inteligente para rolar até a seção específica
    const scrollToSection = (id: string, e?: React.MouseEvent) => {
        // Se passarmos um evento (clique no link), prevenimos o comportamento padrão 
        // SE já estivermos na página inicial.
        if (e && location.pathname === main) {
            e.preventDefault();
            // Atualizamos a URL para refletir a âncora (ex: /#sobre) sem recarregar a página
            navigate(`${main}#${id}`, { replace: true });
        }

        // Se o id for 'inicio' ou vazio, rola para o topo
        if (!id || id === 'inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // Procura o elemento pelo ID na tela
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <div className="navbar bg-[#02022F] shadow-sm fixed z-100 pr-0">
                <div className="navbar-start">
                    <div className="dropdown -left-5">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            className="dropdown-content bg-[#02022F] z-1 mt-3 p-10 shadow text-left text-6xl/24 h-screen">
                            <Link  to={`${main}#inicio`} onClick={(e) => scrollToSection('inicio', e)}>
                                Inicio
                            </Link>
                            <Link  to={`${main}#sobre`} onClick={(e) => scrollToSection('sobre', e)}>
                                Sobre
                            </Link>
                            <Link  to={`${main}#equipe`} onClick={(e) => scrollToSection('equipe', e)}>
                                Equipe
                            </Link>
                            <Link  to={`${main}#servico`} onClick={(e) => scrollToSection('servico', e)}>
                                Serviços
                            </Link>
                            <Link  to={`${main}#depoimentos`} onClick={(e) => scrollToSection('depoimentos', e)}>
                                Depoimentos
                            </Link>
                            <Link  to={`${main}#preco`} onClick={(e) => scrollToSection('preco', e)}>
                                Preço
                            </Link>
                            <Link  to={`${main}#faq`} onClick={(e) => scrollToSection('faq', e)}>
                                FAQ
                            </Link>
                        </ul>
                    </div>
                    <img src={Logo} className='w-1/2' />
                    
                </div>
                <div className="navbar-end hidden lg:flex flex justify-end">
                    <ul className="menu menu-horizontal px-1 gap-5 pr-10">
                        <Link to={`${main}#inicio`} onClick={(e) => scrollToSection('inicio', e)} className='text-[#FF8611]'>
                            Inicio
                        </Link>
                        <Link  to={`${main}#sobre`} onClick={(e) => scrollToSection('sobre', e)}>
                            Sobre
                        </Link>
                        <Link  to={`${main}#equipe`} onClick={(e) => scrollToSection('equipe', e)}>
                            Equipe
                        </Link>
                        <Link  to={`${main}#servico`} onClick={(e) => scrollToSection('servico', e)}>
                            Serviços
                        </Link>
                        <Link  to={`${main}#depoimentos`} onClick={(e) => scrollToSection('depoimentos', e)}>
                            Depoimentos
                        </Link>
                        <Link  to={`${main}#preco`} onClick={(e) => scrollToSection('preco', e)}>
                            Preço
                        </Link>
                        <Link  to={`${main}#faq`} onClick={(e) => scrollToSection('faq', e)}>
                            FAQ
                        </Link>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
