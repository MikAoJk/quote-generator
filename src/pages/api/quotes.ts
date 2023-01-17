// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

type Quote = {
  text: string
  author: string | null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Quote>>
) {

  if (process.env.NODE_ENV === 'production') {
    //Read the json data file data.json
    const json = await fs.readFile('/data.json', 'utf8');

    const quotes: Array<Quote> = JSON.parse(json);


    res.status(200).json(quotes);
    return;
  }

  const result = await fetch(`https://type.fit/api/quotes`, {
    method: req.method
  })

  res.status(result.status).json(await result.json());
}
