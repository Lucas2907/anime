import Image from "next/image"
import { Grid, Typography } from "@mui/material"
import { AnimeCard, AnimeCardInfo, AnimeInfo, MainAnimeInfo } from "./style"

const Anime = () => {

    return (

        <>  


            <div style={{
                marginTop: '50px'
            }}>
            </div> 

            <Grid container sx={{marginBottom: 10}}>
                <Grid item md={9} sx={{
                    
                    
                    
                }}>

                    <Typography
                        gutterBottom
                        sx={{
                            fontFamily: 'Rubik',
                            fontSize: '25px',
                            color: 'white'
                        }}
                        fontWeight={500}
                    >
                        Darling in the Franxx - Episódio 1                
                    </Typography>
                    <Image 
                        style={{
                            width: '100%'
                        }}
                        height={409}
                        width={550}
                        alt="video"
                        src='https://s3-alpha-sig.figma.com/img/c5d6/b10d/a6a1e0eb23d5fbf962007f3ccaa72af3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=juEscCJxxuOBy3VMMUlvudK-9Q8MooLLqK1yDYGSBWJYtulFyVyCEd9f3Lfe5O~yVg4ybgB9A85nO3Egqpsb9DpaReMgukpSd9s-R5ZoiVn4jeEK8kU3NpZRNJJSrXsEZ24FzSfAH9kjkCxx3hsXYM~lofTTSXj8WqVIvPHWKvkPpZHzWdAW06fR9-pnq1qUGj9pIV5UNijooOWrukr1pqTbgwa7PFsnVerrISpWBkhkKs-irB4LK34BM8Lpre3uDI4b2QMpngREar87-MDBGO3kF8hXuObrE5F-8PUjN1OAaf7yAkQWvHQmazCzdb-8ZVROsPmLK-pA~4FWvy1YbQ__'
                    />
                </Grid>
                <Grid item md={3} sx={{
                    
                    
                    padding: '10px'
                }}>
                    <Typography
                        
                        sx={{
                            fontFamily: 'Rubik',
                            fontSize: '18px'
                        }}
                        color="#BFBFBF"
                        fontWeight={400}
                        
                    >
                        Mais assistidos            
                    </Typography>

                    <AnimeCard>


                        <Image 
                            src='https://s3-alpha-sig.figma.com/img/5441/4b2f/5189205a1a31ba3005b514e8173ce950?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4JuSuPrdG3Gc~Q~j3Cz0~ubnmy7NVznNxka4~ivJU37d6~hydJMeehWfPImfC4gUhx4RzjdPvvKhDaYaDyC2qLxh6VbGUYeSgVZOX6g1TSxyDulYHERLG~7NTrt0PTXtNNI4nv~FuvkLNFDz7yyMHj0RkqZMGMbXmHwQBYpa4sW8RhuqZU8AeZDA0OnNLeo8VDRK0drHGLDvW3AY2AQ9lX9Bs6msaRMBVslQmQoXope5jscl~F-pCQ2lE0SLrRRDeMLL2wXGctx9q~mRjW~RI9xZlfY0ijbMJv~bebNPhJtvTgo6rF2bcCgbJtA0QuvsRHsDGamWhTMM-gv8MlaRw__'
                            width={90}
                            height={90}
                            alt="animeImage"
                            style={{
                                objectFit: 'cover'
                            }}
                            
                        />
                        <AnimeCardInfo>
                            <h4 style={{width: '90%', fontSize: '15px'}}>

                                Naruto Shippuden
                            </h4>
                            <p>
                                2007
                            </p>
                        </AnimeCardInfo>

                    </AnimeCard>
                    <AnimeCard>
                        <Image 
                            src='https://s3-alpha-sig.figma.com/img/c884/d35e/6a2bb6814d64c145252a6dcb82d8146c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dcf5EDZ2b4l0auJ25FL~xFnykBcPI2hhzLcLntTsMHFbmUObGpcrmPaSnfehT12raVZL8GaR0TtoKNkPzbHm13TPwCcXkGUGS6IWwnKZa2J5M6jUEsVg83bVerXrkXqhDxG~um5JDkBP0s52r-Yj4cu8D7nKD6S-meLJDdJwn5CFbWMkPpaW6By7wPAJAge6xlq5sX5gCfYAhjkQ3DGClKULaEtLNfvP6EWY9OjtT6CWwG8bf6JbMAOtwkLMpn12DDTXYmUq9K~dJpAmggzMR0sY1rnJ5iGdmCKXDCxBvyyUCiMmgzch6SsH8UpTvA4JUKz~QP5Yv8rt8xLLrb1X4g__'
                            width={90}
                            height={90}
                            alt="animeImage"
                            style={{
                                objectFit: 'cover'
                            }}
                        />

                        <AnimeCardInfo>
                            <h4 style={{width: '90%', fontSize: '15px'}}>

                                One Piece
                            </h4>
                            <p>
                                1999
                            </p>
                        </AnimeCardInfo>
                    </AnimeCard>
                    <AnimeCard>
                        <Image 
                            src='https://s3-alpha-sig.figma.com/img/c8b5/6e86/afa885b0aeb82e95d6adb0ee0c9b08d3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=na5MVsDNgky-7OQZPxMzYgxEbunnpt02jolSjstBVxJR2Ofk5dKF6doDleJFOrQxt0Smd9XSRjjNRCEvfCbx~pnw2Y8dVkz7KwTd6t3~9HDw-dmhVJarXT-8i7ju-g5skoajpyVlv0W~shA7y~2~pnyIx8Br0DR8d14dvS6WhskoHs7YY8uUgzKcxtPopb6tbAt7pKFlfZg5H5LBA~CnrfOhGN93RtTitKE~bjbwDWEP5XHkaWVnOmwgVIihwatx46ZuchtzCQ-ZZdZ6h67YF4JV5D7s0FxBeQadEAPA7~OT3LTRzmJ8oAnd0delGrwoC4nhWXtWeks00XQvJHfJeA__'
                            width={90}
                            height={90}
                            alt="animeImage"
                            style={{
                                objectFit: 'cover'
                            }}
                            
                        />

                        <AnimeCardInfo>
                            <h4 style={{width: '90%', fontSize: '15px'}}>

                                Shingeki No Kyojin
                            </h4>
                            <p>
                                2013
                            </p>
                        </AnimeCardInfo>
                    </AnimeCard>
                    <AnimeCard>
                        <Image 
                            src='https://s3-alpha-sig.figma.com/img/a5a6/d134/83fe98d8c27b783575233b5a3b9a1407?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eEW4yCInrkluH4Cn2AtnkME8qA22BiYC8E7K02a39Ch2nPQ~Pbfg5rHr6n2dx6Qx-bgZ5hyMZEnUh6~rO3ciYTeowvAYN3TRwQ51pgeeQ4BLg5GANtaA7W9tgHUiioPRFtjaiGI-oDGGwVxAahomclc6vSuDDOcLvj151kuVFCr3bd-Jjb7U6mpLDtuSUQvBgC6a4ePgFUBrdf8kW5UkdE7oS-jk~OYG-fPpmZxSGMgP7ZkHMXPxHCOoiMfuAXNR5DJ71Gshj2U-RkAzJcfbRZkJNE59~o6Qnk8EIVwkYkqgSFGCDPcyEbNLpw5PcYRNM4-2SiZYqo96FJd9mUWKJg__'
                            width={90}
                            height={90}
                            alt="animeImage"
                            style={{
                                objectFit: 'cover'
                            }}
                            
                        />

                        <AnimeCardInfo>
                            <h4 style={{width: '90%', fontSize: '15px'}}>

                                Haikyuu!!
                            </h4>
                            <p>
                                2014
                            </p>
                        </AnimeCardInfo>
                    </AnimeCard>
                </Grid>
            </Grid>
            
            <AnimeInfo>
                <Image 
                    alt="anime-photo"
                    style={{borderRadius: '12px'}}
                    width={280}
                    height={320}
                    src='https://s3-alpha-sig.figma.com/img/eca2/2973/337765e79e77e2473163fde7ea85f731?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvtAl17DvUSPptErI85wqqY-gSTatm2BtDCkuW4jBX4pCkOMfyuOMLxEJEx-cSVu71nR-EEGwsXedRZaVpaNTAKYR0jtihJ7PxYBfgtmvCwREVaYbhChRq7RPRIKGz1h4vA2ialZL6VS-W08shCxgP1H-ylqlbnt~uY9ev99dynaQGlEdsfEBs1YFB~4FvNJ5OxczgDOaN4ZoQknHS3TYp0wdtrWbTGu4-oMQ0X1~b7dtMerL6bGtErDel8912xcwRXMvI1t~Th8xOumFd13iHI1RFCNbSc7oF-Vb5Ew52ZKaUEZD0u1NpH-zgPk8bs1XMi~iodH254MmATC7Is0rA__'
                />
                <section style={{marginLeft: '40px'}}>

                    <MainAnimeInfo>
                        <Typography
                            sx={{
                                fontFamily: 'Rubik',
                                
                            }}
                        >
                            Duração: <span>24 Min.</span>
                        </Typography>
                    </MainAnimeInfo>
                    <MainAnimeInfo>
                        <Typography
                            sx={{
                                fontFamily: 'Rubik',
                                mt: 1
                            }}
                        >
                            Estúdio: <span>Trigger</span>
                        </Typography>
                    </MainAnimeInfo>
                    <MainAnimeInfo>
                        <Typography
                            sx={{
                                fontFamily: 'Rubik',
                                mt: 1
                            }}
                        >
                            Duração: <span>Drama, Ficção científica, Romance</span>
                        </Typography>
                    </MainAnimeInfo>
                    <MainAnimeInfo>
                        <Typography
                            sx={{
                                fontFamily: 'Rubik',
                                mt: 5,
                                mb: 2
                            }}
                        >
                            Sinopse: 
                        </Typography>
                    </MainAnimeInfo>
                    <MainAnimeInfo>
                        <Typography
                            component='span'
                            sx={{
                                display: 'block',
                                textAlign: 'left'
                            }}
                        >
                            Darling in the Franxx se passa em um futuro distópico e pós-apocalíptico onde os remanescentes da civilização humana abandonaram a superfície do planeta. Adultos e crianças existem em ambientes contrastantes entre si. Os adultos vivem em cidades tecnológicas (latifúndios) chamados de "plantações" (plantations). As crianças são chamadas de "parasitas", sendo elas destituídos de individualidade, e educadas apenas para pilotarem Franxxs em pares (um menino e uma menina) para defender a humanidade. 
                        </Typography>
                    </MainAnimeInfo>
                </section>
            </AnimeInfo>

        </>
    )
}

export default Anime