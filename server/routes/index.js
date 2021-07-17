module.exports = app => { 

    app.use("/", require("./base.routes"))
    app.use("/", require("./profile.routes"))
    app.use("/book", require("./books.routes"))
    app.use("/post", require("./posts.routes"))
    app.use("/review", require("./reviews.routes"))
    
}


