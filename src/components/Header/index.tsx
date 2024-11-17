import style from './Header.module.css';
import { Container } from '@mui/material';

const Header = () => {



    return (

        <>
            <Container maxWidth="md">
                <div className={style.header}>
                    <p className={style.logo}>Ani.me</p>
                    <ul className={style.lista}>
                        <li className={style.lista__itens}>Início</li>
                        <li className={style.lista__itens}>Lista</li>
                        <li className={style.lista__itens}>Gêneros</li>
                        <li className={style.lista__itens}>Novos episódios</li>
                        <li className={style.lista__itens}>
                        <input className={style.lista__input} placeholder='Buscar'/>
                        </li>
                    </ul>
                </div>
            </Container>
            

        </> 

       
    )
}

export default Header