import { useState, useEffect } from 'react';
import style from './style.module.css';
import hollow from './img/hollow.png';
import disney from './img/disney.png';
import ebacTalks from './img/EbacTalks.png';

function Repositorios() {

    const [repos, setRepos] = useState([]);
    const ENDPOINT = 'https://api.github.com/users/Neardry/repos';
    const [mostrarRepos, setMostrarRepos] = useState(false);
    const [mostrarVercel, setMostrarVercel] = useState(false);

    useEffect(() => {
        AOS.init();
        fetch(ENDPOINT)
        .then((res) => {
            if(!res.ok) {
                throw new Error('Impossível fazer a solicitação no momento');
            }
            return res.json()
            }).then((resJson) => {
                setRepos(resJson)
            })
        }, []);

    return (
        <section className='container'>
            <div className={style.repos_main}>
                <div className={style.container_repos_vercel}>
                <button onClick={e => {setMostrarVercel(false);  setMostrarRepos(!mostrarRepos)}} className={style.botao}>{!mostrarRepos ? 'Mostrar repositórios' : 'Ocultar repositórios'}</button>
                <button onClick={e => {setMostrarRepos(false); setMostrarVercel(!mostrarVercel)}} className={style.botao}>{!mostrarVercel ? 'Exibir projetos hospedados' : 'Ocultar projetos hospedados'}</button>
                </div>
                {mostrarRepos && (
                    <>
                <p>Contagem de repositórios: {repos.length}</p>
                    <ul data-aos="zoom-in"  className={style.lista}>
                        {repos.map(repositorio => (
                        <li className={style.lista_item} key={repositorio.id}>
                            <p>Projeto: {repositorio.name}</p>
                            {repositorio.language && (
                                <p>linguagem: {repositorio.language}</p>
                            )}
                            <a target='_blank' href={repositorio.html_url}>Visitar repositório</a>    
                        </li>    
                        ))}
                        </ul>
                </>
                )}
            </div>

            {mostrarVercel && (
                <>
                    <div data-aos="zoom-in"  className={style.container_repos_vercel}>
                        <div className={style.container_imagem_vercel}>
                            <img className={style.imagem_vercel} src={hollow} alt="Imagem site" />
                        </div>
                        <div className={style.container_texto_vercel}>
                            <h4>Hollow Knight Fan Page</h4>
                            <p>Um dos meus primeiros projetos que quis continuar acresentando features que aprendi, é um site de curiosidades sobre o jogo Hollow Knight.</p>
                            <a target='_blank' href="https://hollow-knight-fan-page.vercel.app">Veja você mesmo!</a>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className={style.container_repos_vercel}>
                        <div className={style.container_imagem_vercel}>
                            <img className={style.imagem_vercel} src={disney} alt="Imagem site" />
                        </div>
                        <div className={style.container_texto_vercel}>
                            <h4>Clone site da Disney</h4>
                            <p>Este site foi um dos projetos fornecidos pela EBAC que simula um site da Disney que possui cardápio e um feed de informações.</p>
                            <a target='_blank' href="https://clone-disneyplus-2krj.vercel.app">Veja você mesmo!</a>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className={style.container_repos_vercel}>
                        <div className={style.container_imagem_vercel}>
                            <img className={style.imagem_vercel} src={ebacTalks} alt="Imagem site" />
                        </div>
                        <div className={style.container_texto_vercel}>
                            <h4>Ebac Talks</h4>
                            <p>Site criado para representar um evento que ocorreria em poucos dias, com um contador em tempo real até a data do evento, se o contador estiver chegado a zero uma mensagem como "evento expirado" aparecerá no lugar</p>
                            <a target='_blank' href="https://projeto-ebac-talks.vercel.app">Veja você mesmo!</a>
                        </div>
                    </div>
                </>
            )}
            
        </section>
    )
}

export default Repositorios;