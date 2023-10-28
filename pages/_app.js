import GlobalSyle from "../src/theme/GlobalStyle"


function MyApp({Component , pageProps}){
    return(
        <>
            <GlobalSyle />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp