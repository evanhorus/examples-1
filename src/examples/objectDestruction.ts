export const example = {
    b: 2,
    c: 4,
    d: 5,
}


const myFunction = () => {
    const {c, d, b} = example;
    example.c;
    example.d;
    example.b;
}

const BigObject = {
    a: {
        b: {
            c: {
                d: {
                    e: 43,
                },
                z: {
                    d: 43,
                }
            },
            'sdfsdfsdf-fdsdfsdfs': 786876,
        }
    }
}

const a = 'sdfsdfsdfsdf "sdfs" df'
// const a = "sdfsdfsdfsdf "sdfs" df"

BigObject.a.b.c.d.e
BigObject.a.b['sdfsdfsdf-fdsdfsdfs']
BigObject['a']['b']['c']['z']
