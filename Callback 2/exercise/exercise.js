function repeateHello (cb){
    setInterval(cb, 1000);
}

repeateHello(() => {
    console.log("Hello");
})

