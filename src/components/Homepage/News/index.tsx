import style from './News.module.css';

const News = () => {

    return (
        <section className={style.novidades}>
            <div className={style.novidades__header}>
                <h1 className={style.novidades__header__title}>Últimas novidades</h1>
                <p className={style.novidades__header__text}>O que você vai assistir hoje?</p>
            </div>
            <div className={style.novidades__main}>
                <h2 className={style.novidades__main__title}>ONE PUNCH MAN TERÁ 3 TEMPORADA</h2>
                <p className={style.novidades__main__text}>Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]</p>
            </div>
        </section>
    );
}

export default News