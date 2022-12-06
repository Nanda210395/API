
// const app = require('express')();
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
)

app.get('/company', (req, res)=> {
    res.status(200).send({
        employee: 'abc',
        id: 1,
        designation: 'QA'
    })
});

app.post('/company/:id/:companyLogo', (req, res) => {
const { id } = req.params;
const { companyLogo } = req.params;

if (!companyLogo){
    res.status(418).send({ message: 'we need a logo'})
}

res.send({
    company: `company with new ${companyLogo} and id ${id}`,
})

// res.send({
//     company : id,
//     company : companyLogo
// })

});