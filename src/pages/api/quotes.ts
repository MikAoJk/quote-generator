// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import path from 'path';
import {promises as fs} from 'fs';

export type Quote = {
    text: string
    author: string | null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Quote>>
) {
    if (process.env.NODE_ENV !== 'production') {
        const jsonDirectory = path.join(process.cwd(), 'src/json');
        const json = await fs.readFile(jsonDirectory + '/data.json', 'utf8');

        const quotes: Array<Quote> = JSON.parse(json);

        res.status(200).json(quotes);
    } else {

        const result = await fetch(`https://type.fit/api/quotes`, {
            method: req.method
        })

        res.status(result.status).json(await result.json());
    }
}
