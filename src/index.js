const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let dot = '.';
    let dash = '-';
    let counter = 0;
    let newArr = [];
    let str = '';
    let res = '';
    expr = expr.split('');
    for (let i = 0; i < expr.length;) {
        while (counter < 10) {
            if (expr[i] === '1' && expr[i + 1] === '0') {
                newArr.push(dot);
            } else if (expr[i] === '1' && expr[i + 1] === '1') {
                newArr.push(dash);
            }
            counter += 2;
            i += 2;
        }
        counter = 0;
        str = newArr.join('');
        if (str.length === 0) {
            res += ' '
        }
        if (str in MORSE_TABLE) {
            res += MORSE_TABLE[str];
        }
        newArr = [];
    }
    return res;
}

module.exports = {
    decode
}
