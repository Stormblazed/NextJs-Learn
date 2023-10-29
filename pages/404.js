import Head from 'next/head';
import Link from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <Head><title>404 - Alura Case Campanha</title></Head>
            <h1>Você se perdeu e caiu na página 404 :O</h1>
            <Link href="/">
                Ir para a home
            </Link>
        </div>
    )
}