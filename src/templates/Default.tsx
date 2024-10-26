import React from 'react'
//import Footer from '../components/Footer'
//import Header from '../components/header'
import { Container } from '@mui/material';

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            Header
            <Container
                maxWidth='lg'
            >
                {children}

            </Container>
            Footer
        </>
    )
}

export default Default
