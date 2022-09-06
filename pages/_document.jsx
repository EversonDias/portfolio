import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head>
                <meta name='description' content='Protfolio dos projetos do desenvolvedor everson dias' />
                <meta name='keywords' content='HTML, css, javaScript, next.js' />
                <meta name='author' content='Everson Dias' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}