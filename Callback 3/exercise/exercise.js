function repeateHello (cb){
    const intervalID = setInterval(cb, 1000);

    setTimeout(() => {
        clearInterval(intervalID)
    }, 5000);
}

repeateHello(() => {
    console.log("Hello");
})

