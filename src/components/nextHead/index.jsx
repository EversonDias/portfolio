import Head from "next/head";

export default function NextHead({ text }) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>{text}</title>
            <link rel='shortcut icon' href='/img/favicon.ico' />
        </Head>
    )
}
