import axios from "axios";

export default async function handler(req, res) {
    console.log(process.env.URL)
  const response = await axios.get(
    `${process.env.URL}` + '/api/v1/documents/queued/69360', {
        headers : {
            'Authorization' : `key=${process.env.API_KEY}`,
            'Accept' : 'application/json'
        }
    }
  );

  res.statusCode = 200;
  res.json(response.data);
}