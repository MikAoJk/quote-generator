import Head from 'next/head'
import {NextPage} from "next";
import QuoteGenerator from "@/components/QuoteGenerator/QuoteGenerator";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Quote Generator</title>
                <meta name="description" content="Quote generator app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <QuoteGenerator/>
            </main>
        </div>
    )
}
export default Home
