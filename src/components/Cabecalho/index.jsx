import style from './style.module.css'

function Cabecalho() {
    const IMAGEADRESS = 'https://github.com/Neardry.png';

    
    return (
        <header className={style.header}>
            <div className="container">
                <div  className={style.flex}>
            <img data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className={style.imageUser} src={IMAGEADRESS} alt="Foto" 
            />
            <h1  data-aos="fade-down"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1500">Bruno dos Santos Portela | Dev Front-End
            </h1>
                </div>
            </div>
        </header>
    )
}

export default Cabecalho;