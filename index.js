exports.skolets_lab_1 = (req, res) => {
    if (isNaN(req.body.compute)) {
        res.statusCode = 400;
        res.send("Bad Request");
        return;
    }

    const fibNumbers = [];
    for (let n = 1; n < Math.round(req.body.compute); n++) {
        fibNumbers.push(fibonacci(n));
    }

    console.log(fibNumbers);

    const reducer = (accumulator, currentValue) => {
        if ((currentValue % 2) == 1) {
            return accumulator + currentValue;
        } else {
            return accumulator;
        }
    };

    res.send(JSON.stringify({ result: fibNumbers.reduce(reducer, 0) }));
};

function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}