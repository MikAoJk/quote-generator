import Head from 'next/head'
import {NextPage} from "next";
import Quote from "@/components/Quote/Quote";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Quote Generator</title>
                <meta name="description" content="Quote generator app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Quote/>
            </main>
        </div>
    )
}
export default Home
