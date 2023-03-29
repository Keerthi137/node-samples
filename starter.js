console.log("Hello world")

process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    console.log(data)
})