import React from 'react'

// import Header from '../components/Header/Header'

import Footer from '../components/Footer' // importando o footer que criei na pasta ./components/Footer (o arquivo index.tsx, por ter o nome index, é o padrão que será importado, então não é preciso especificar, mas se o nome do arquivo for outro, é preciso pôr)
import { Container } from '@mui/material';
import Header from '../components/Header';

interface DefaultProps { // apenas uma interface para identificar o tipo dos filhos que vão ir dentro do container
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            <Header />
            <Container // container do MUI, que serve apenas para centralizar os itens em um espaço na tela
                maxWidth='md' // tamanho do container (largo)
            >
                {children}

            </Container>
            <Footer /> {/* utilizando o footer*/}
        </>
    )
}

export default Default