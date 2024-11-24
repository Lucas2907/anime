import style from './Index.module.css'
import HeaderHome from '@/src/components/Homepage/HeaderHome'
import NewsSection from '@/src/components/Homepage/News'
const Index = () => {



    return (

        <>
            <HeaderHome></HeaderHome>
            <NewsSection></NewsSection>
            <h1 className={style.title}></h1>
        </> 

       
    )
}

export default Index