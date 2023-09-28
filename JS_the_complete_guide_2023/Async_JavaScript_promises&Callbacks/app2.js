const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Timer completed!');
    }, 1000);
})
    .then((text) => { throw new Error('Failed!') })
    .catch(err => console.log(err))
    .then(() => console.log('Does that execute?'));