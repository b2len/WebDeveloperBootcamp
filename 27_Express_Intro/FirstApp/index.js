const express = require("express");
const app = express();

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`)
})
//app.get('/cats', (req, res) => {
// res.send('MEOW!!')
//})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})


//app.use((req, res) => {
  //  console.log("WE GOT A NEW REQUEST!")
    //console.dir(req)
//})