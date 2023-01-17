// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Quote = {
  text: string
  author: string | null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Quote>
) {

  const result = await fetch(`https://type.fit/api/quotes`, {
    method: req.method
  })

  res.status(result.status).json(await result.json());
}
