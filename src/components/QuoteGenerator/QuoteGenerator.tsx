import styles from "./QuoteGenerator.module.css";

import {useEffect, useState} from "react";
import {Quote} from "@/pages/api/quotes";

const QUOTES_URL = `/api/quotes`;
const QuoteGenerator = () => {

    const [quotes, setQuotes] = useState([]);
    const [quoteData, setQuoteData] = useState<Quote>();

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
            {(quoteData?.text) &&
                <section>
                    <button onClick={getNewQuote}>New Quote</button>
                    <h3>
                        <span>“</span>
                        {quoteData?.text}
                    </h3>
                    <i>- {quoteData?.author}</i>
                </section>
            }
        </div>
    )
}

async function fetchData(): Promise<any> {
    if (process.env.NODE_ENV === 'production') {
        // Need this in production due to using next export, in GitHub pages
        // The API Routes are not supported using next export
        return fetch("https://type.fit/api/quotes")
            .then((res) => res.json());
    } else {
        const response = await fetch(QUOTES_URL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Httpstatus code is ${response.status}`);
        }

        return await response.json();
    }
}

export default QuoteGenerator;