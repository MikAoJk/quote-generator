import styles from "./Quote.module.css";

import {useEffect, useState} from "react";

const QUOTES_URL = `/api/quotes`;
const Quote = () => {

    const [quotes, setQuotes] = useState([]);
    const [quoteData, setQuoteData] = useState<QuoteData>();

    useEffect(() => {
        fetchData()
            .then((json) => {
                setQuotes(json);
                setQuoteData(
                    {
                        text: json[0].text,
                        author: json[0].author
                    }
                )
            });
    }, []);


    function getRandomQuote(quotes: any[]) {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function getNewQuote() {
        setQuoteData(getRandomQuote(quotes));
    }


    return (
        <div className={styles.main}>
            <h1>Quote Generator</h1>
            <section>
                <button onClick={getNewQuote}>New Quote</button>
                <h3>
                    <span>“</span>
                    {quoteData?.text}
                </h3>
                <i>- {quoteData?.author}</i>
            </section>
        </div>
    )
}

export type QuoteData = {
    text: string
    author: string | null
}

async function fetchData(): Promise<any> {
    const response = await fetch(QUOTES_URL, {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error(`Httpstatus code is ${response.status}`);
    }

    return await response.json();
}

export default Quote;