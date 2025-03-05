import express from 'express'
const app = express();
const port = 3333;

app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/add', (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let c = a + b
    res.render('demo', { a, b, c })
})

app.get('/items', async (req, res) => {
    const items = await getSiteList();
    const nsfw = (req.query.nsfw)
    console.log(nsfw);
    res.render('items', { items })
})

app.listen(port, () => { });

async function getSiteList() {
    const response = await fetch('https://theindex.moe/api/items')
    if (!response.ok) {
        throw new console.error(`Error`);
    }
    const json = await response.json();
    return json;
}

