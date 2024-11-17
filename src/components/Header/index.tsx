import style from './Header.module.css';
import { Container } from '@mui/material';

const Header = () => {



    return (

        <>
            <Container maxWidth="lg" sx={{width:"80%"}}>
                <div className={style.header}>
                    <p className={style.header__logo}>Ani.me</p>
                    <ul className={style.header__lista}>
                        <li className={style.lista__itens}>Início</li>
                        <li className={style.lista__itens}>Lista</li>
                        <li className={style.lista__itens}>Gêneros</li>
                        <li className={style.lista__itens}>Novos episódios</li>
                    </ul>
                    <input className={style.header__input} placeholder='Buscar'/>
                </div>
            </Container>
            

        </> 

       
    )
}

export default Header