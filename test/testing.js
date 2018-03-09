var Nightmare = require("nightmare");
new Nightmare({
    show: true
})

    .goto("http://localhost:3000")
    .click("#loginNav")
    .type("#exampleInputEmail1", 't' + Math.round(Math.random() * 100000) + '@test.com')
    .type("#exampleInputPassword1", "dummy*password")

    .end()

    .then(function() {
        console.log("RwlRwlRwlRwl");
    })
    .catch(function(err) {
        console.log(err);
    });