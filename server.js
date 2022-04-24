const expres = require('express');
const app = expres();

app.use(expres.static(__dirname + '/dist/portfolio'));
app.get('/*', function (req, res) {
    res.sendFile("index.html", { root: __dirname + '/dist/portfolio/' });
});

app.listen(process.env.PORT || 3000);