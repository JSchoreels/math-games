function getReprEquationTypeA(a, b) { //  x + a = b
    const left_repr = `x + ${a}`;
    const right_repr = b;
    if (getRandomInt(2) === 0) {
        return `${left_repr} = ${right_repr}`;
    }
    return `${right_repr} = ${left_repr}`;
}

function getReprEquationTypeB(a, b) { //  a*x = b
    const left_repr = `${a}x`;
    const right_repr = b;
    if (getRandomInt(2) === 0) {
        return `${left_repr} = ${right_repr}`;
    }
    return `${right_repr} = ${left_repr}`;
}

function getReprEquationTypeC(a, b) { //  a*x = b
    const left_repr = `x / ${a}`;
    const right_repr = b;
    if (getRandomInt(2) === 0) {
        return `${left_repr} = ${right_repr}`;
    }
    return `${right_repr} = ${left_repr}`;
}

function getReprEquationTypeD(a, b, c, d) { //  a*x = b
    const left_repr = `${a}x + ${b}`;
    const right_repr = `${c}x + ${d}`;
    if (getRandomInt(2) === 0) {
        return `${left_repr} = ${right_repr}`;
    }
    return `${right_repr} = ${left_repr}`;
}

function verifyEquationTypeA(solution, a, b) {
    return solution === getSolutionEquationTypeA(a, b)
}

function verifyEquationTypeB(solution, a, b) {
    return Math.abs(solution - getSolutionEquationTypeB(a, b)) < 0.001
}

function verifyEquationTypeC(solution, a, b) {
    return Math.abs(solution - getSolutionEquationTypeC(a, b)) < 0.001
}

function verifyEquationTypeD(solution, a, b, c, d) {
    return Math.abs(solution - getSolutionEquationTypeD(a, b, c, d)) < 0.001
}

function getSolutionEquationTypeA(a, b) {
    return b - a
}

function getSolutionEquationTypeB(a, b) {
    return b / a
}

function getSolutionEquationTypeC(a, b) {
    return b * a
}

function getSolutionEquationTypeD(a, b, c, d) {
    return (d - b) / (a - c)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function equationGenerator() {
    const type = getRandomInt(0, 4);
    const global_max = 100;
    const factor_max = 10;

    return [
        () => {
            const a = getRandomInt(1, global_max)
            const b = getRandomInt(a, global_max)
            return {
                'repr' : getReprEquationTypeA(a,b),
                'solution' : getSolutionEquationTypeA(a,b)
            }
        },
        () => {
            const a = getRandomInt(1, factor_max)
            const b = a * getRandomInt(2, factor_max)
            return {
                'repr' : getReprEquationTypeB(a,b),
                'solution' : getSolutionEquationTypeB(a,b)
            }
        },
        () => {
            let a = getRandomInt(2, factor_max)
            let b = getRandomInt(1, factor_max)
            return {
                'repr' : getReprEquationTypeC(a,b),
                'solution' : getSolutionEquationTypeC(a,b)
            }
        },
        () => {
            let ca = getRandomInt(1, factor_max)
            let a = getRandomInt(ca + 1, factor_max)
            let c = a - ca
            let db = ca * getRandomInt(1, factor_max)  // multiple de ca
            let d = getRandomInt(db + 1, db + global_max)
            let b = d - db
            return {
                'repr' : getReprEquationTypeD(a,b,c,d),
                'solution' : getSolutionEquationTypeD(a,b,c,d)
            }
        }
    ][type]()

}