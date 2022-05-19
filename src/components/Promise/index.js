let g = 0;
const NO_THEN = () => {
    const a = 1;
    const b = 2;
    const result = a + b + g++;
    return result;
}

const THEN = (shouldReject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // if (shouldReject === true) {
            //     reject('ERROR')
            // } else {
            //     resolve("HELLO WORLD")
            // }

            shouldReject === true ? reject('ERROR') : resolve("HELLO WORLD");

        }, 2000);
    });
}

const a = NO_THEN();

console.log("A", a);
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());

THEN()
    .then((resolvedResult) => {
        console.log(`RESULT: ${resolvedResult}`)
    })
    .finally(e => {
        console.log('FINAL\'y with no error', e);

    });

THEN(true)
    .then((resolvedResult) => {
        console.log(`RESULT: ${resolvedResult}`)
    })
    .catch(e => {
        console.log('ERROR', e);
    })
    .finally(e => {
        console.log('FINAL', e);
    });


THEN().then(result=>{
    console.log(result)
})

const result = await THEN();

console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());
console.log("A", NO_THEN());