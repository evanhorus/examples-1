export const a = () => {
    return 22;
}

export const b = (a: number) => {
    return 22 + a;
}

export const c = (a: number, b: string) => {
    return `${22 + a}` + b;
}

const obj = {
    a: 1,
    f: '2',
    c: 33,
}

export const d = (props: { a: number }) => {
    return props.a;
};

export const d2 = ({a}: { a: number }) => {
    return a;
};

d({a: 3})
