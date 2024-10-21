
function sumWithCallback(n, callback) {
    const sum = (n * (n + 1)) / 2; 
    callback(sum);
}

sumWithCallback(4, (result) => {
    document.getElementById("callbackResult").innerText = `Sum (Callback): ${result}`;
});


function sumWithPromise(n) {
    return new Promise((resolve, reject) => {
        if (n < 1) {
            reject("Input must be a positive integer.");
        } else {
            const sum = (n * (n + 1)) / 2;
            resolve(sum);
        }
    });
}


sumWithPromise(4)
    .then((result) => {
        document.getElementById("promiseResult").innerText = `Sum (Promise): ${result}`;
    })
    .catch((error) => {
        console.error("Error:", error);
    });


async function sumWithAsyncAwait(n) {
    const sum = (n * (n + 1)) / 2;
    return sum;
}

(async () => {
    try {
        const result = await sumWithAsyncAwait(4);
        document.getElementById("asyncResult").innerText = `Sum (Async/Await): ${result}`;
    } catch (error) {
        console.error("Error:", error);
    }
})();
