import { Typography } from "@mui/material" // importando tipografia da biblioteca MUI
import { StyledFooter } from "./style" // importando o footer estilizado criado no arquivo ./style.ts

const Footer = () => {

    return ( 
        <>
            <StyledFooter> {/* utilizando footer que eu importei */}
                <Typography
                    variant="body1" // variação de leta (pequena)
                    sx={{
                        fontFamily: 'Inter'
                    }}
                    fontWeight={300}
                >
                    Todos os direitos reservados aos criadores e produtores dos animes
                </Typography>
            </StyledFooter>
        </>
    )
}

export default Footer // exportando o footer para utilizar no template default