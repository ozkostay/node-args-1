const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
        .options('year', {
          alias: 'y',
          type: 'number',
          description: 'current year',
        })
        .options('month', {
          alias: 'm',
          type: 'number',
          description: 'curren month',
        })
        .options('day', {
          alias: 'd',
          type: 'number',
          description: 'corrent day',
        }).argv;

const curentDate = new Date();

const dateNow = {
  year: curentDate.getFullYear(),
  month:curentDate.getMonth(),
  day: curentDate.getDate(),
  hour: curentDate.getHours(),
  minute: curentDate.getMinutes(),
  second: curentDate.getSeconds(),
  millisecond: curentDate.getMilliseconds()
}

let oneParam = null;
let wordDate = null;
if ("year" in argv) {
  wordDate = 'year';
} else if ("month" in argv) {
  wordDate = 'month';
} else if ("day" in argv) {
  wordDate = 'day';
}
switch(argv._[0]) {
  case 'current':
    oneParam = `Current ${wordDate} ${(wordDate === 'month') ? dateNow[wordDate] + 1 : dateNow[wordDate]}`;
    break;
  case 'add':
    dateNow[wordDate] += argv[wordDate] ? argv[wordDate] : 0;
    break;
  case 'sub':
    dateNow[wordDate] -= argv[wordDate] ? argv[wordDate] : 0;
    break;
}

const toReturn = new Date(
  dateNow.year,
  dateNow.month,
  dateNow.day,
  dateNow.hour,
  dateNow.minute,
  dateNow.second,
  dateNow.millisecond);

console.log((wordDate && oneParam) ? oneParam : toReturn);
