function printAsyncName () {
    console.log("Hello");
    setTimeout(() => {
        console.log("María");
    }, 1000);
}

setTimeout (printAsyncName, 1000)