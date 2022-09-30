import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head>
                <meta name='description' content='Protfolio dos projetos do desenvolvedor everson dias' />
                <meta name='keywords' content='HTML, css, javaScript, next.js' />
                <meta name='author' content='Everson Dias' />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bentham&family=Koulen&display=swap" rel="stylesheet"></link>
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
                )
}