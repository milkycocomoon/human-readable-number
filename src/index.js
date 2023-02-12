const single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
const decade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

module.exports = function toReadable (number) {
    num = number.toString();

    if(num == 0) return 'zero';
    if(num < 10) return `${single[num]}`.trim();
    if(num >= 10 && num < 20) return `${teen[num[1]]}`.trim();
    if(num >= 20 && num < 100) return `${decade[num[0]]} ${single[num[1]]}`.trim();

    if(num >= 100 && num < 1000 && num[1] == 0) return `${single[num[0]]} hundred ${single[num[2]]}`.trim();
    if(num >= 100 && num < 1000 && num[1] == 1 && num[1] != 0) return `${single[num[0]]} hundred ${teen[num[2]]}`.trim();
    if(num >= 100 && num < 1000 && num[1] != 1 && num[1] != 0) return `${single[num[0]]} hundred ${decade[num[1]]} ${single[num[2]]}`.trim();
    else return "IDK"
}
