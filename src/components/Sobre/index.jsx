import style from './style.module.css'


function Sobre() {

    return(
        <>
        <section className="container">
            <div data-aos="zoom-in" className='container_sobre'>
                <div  className={style.container_sobre_titulo}>
                    <h2>Sobre</h2>
                </div>
                <div>
                    <p className={style.texto_sobre}>Por amar tecnologia e sempre querer aprender mais decidi buscar uma transição de carreira para esta área que gosto tanto.</p>
                </div>
            </div>
            <div data-aos="fade-right" className='container_sobre container_sobre_reverse'>
                <div className={style.container_sobre_titulo}>
                    <h2>Tecnologias</h2>
                </div>
                <div>
                    <ul className={style.lista_sobre}>
                        <li className={style.item_sobre}>HTML5</li>
                        <li className={style.item_sobre}>CSS3</li>
                        <li className={style.item_sobre}>JavaScript</li>
                        <li className={style.item_sobre}>Gulp</li>
                        <li className={style.item_sobre}>Grunt</li>
                        <li className={style.item_sobre}>AJAX</li>
                        <li className={style.item_sobre}>SASS</li>
                        <li className={style.item_sobre}>LESS</li>
                        <li className={style.item_sobre}>Parcel</li>
                        <li className={style.item_sobre}>Git</li>
                        <li className={style.item_sobre}>jQuery</li>
                        <li className={style.item_sobre}>BootStrap</li>
                        <li className={style.item_sobre}>React</li>
                        <li className={style.item_sobre}>TypeScript</li>
                        <li className={style.item_sobre}>Figma</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Sobre;