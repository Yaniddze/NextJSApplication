import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.post('http://jsonplaceholder.typicode.com/posts', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-token-access': 'random',
      },
    });

    res.statusCode = 200;
    res.json(response.data);
  } catch {
    res.statusCode = 200;
    res.json({ error: 'some error' });
  }
};
