console.log('person1: shows ticket');
console.log('person2: shows ticket');
const promisewife = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tickets');
    },3000)
});
promisewife.then((t)=>{
    console.log(`person3: shows ${t}`);
})
const getPopcorn =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
});
getPopcorn.then((t)=>{
    console.log(`got ${t}`);
})

const getCandy =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('candy'), 3000);
});
getCandy.then((t)=>{
    console.log(`got ${t}`);
})

const getCoke =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('coke'), 3000);
});
getCoke.then((t)=>{
    console.log(`got ${t}`);
})
console.log('person4: shows ticket');
console.log('person5: shows ticket');
