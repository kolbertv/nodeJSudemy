console.log('Starting App');

setTimeout(()=>{
    console.log('inside of callback');
}, 10);

console.log('Finishing App');

console.log('Starting App');

for (let i=0; i<=100; i++){

    setTimeout(()=>{
    }, 1000)
    console.log(i*i);

};

console.log('Finishing App');