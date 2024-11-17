import style from './HeaderHome.module.css';

const HeaderHome = () => {



    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    return (
        <ul className={style.lista}>
            <li className={style.lista__itens}>Todos</li>
            {alphabet.map((letter, index) => (
                <li className={style.lista__itens} key={index}>{letter}</li>
            ))}
        </ul>
    );
}

export default HeaderHome