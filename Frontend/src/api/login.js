export default async ( req, res ) => {
    if(req.method === 'POST') {
        const { username, password } = req.body;

        // Send a POST request to Strapi's login endpoint
        const response = await fetch('http://localhost:1337/api/auth/local', {
            mathod: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            res.status(200).json({ token: data.jwt });
        } else {
            res.status(data.statusCode).json({ error: data.message[0].message[0].message });
        }
    }  else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}