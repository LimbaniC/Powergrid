import yargs from 'yargs';
import Table from 'cli-table';
import { hideBin } from 'yargs/helpers';

// yargs(hideBin(process.argv))
//   .command('new <task>', 'Create a new task', yargs => { 
//     return yargs.positional('task', {
//         'type':'string',
//         'description':'the content of your task to create',
//     })
//   }, (argv) => console.log(argv.task)
// )
// .demandCommand(1)
// .parse()

// instantiate table
var table = new Table({
    head: ['TH 1 label', 'TH 2 label', 'TH 3 label', 'TH 4 label']
  , colWidths: [25, 50]
});

//table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['First value', 'Second value','Third value','Fourth value']
  , ['First value', 'Second value','Third value','Fourth value']
);

console.log(table.toString());