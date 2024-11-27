import express from 'express';

const app = express();

const greetings = {
    en: `Hello`,
    es: `¡Hola`,
    fr: `Bonjour`,
    id: `Halo`,
    pl: `Cześć`
};

app.get('/api/greet/', (req, res) => {
    const name = req.query.name || 'Guest';
    const language = greetings[req.query.language] ? req.query.language : 'en';

    res.json({
        message: `${greetings[language]}, ${name}!`,
        name: name,
        language: language
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
