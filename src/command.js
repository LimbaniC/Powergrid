import yargs from 'yargs';
import Table from 'cli-table';
import { hideBin } from 'yargs/helpers';

// instantiate table
var mytable = new Table({
  head: ['Time contributed', 'Time left', 'Percentage complete', 'Current task']
, colWidths: [18, 20, 25, 20]
});

const addGoalToCLI = (goalName) =>{ 
  mytable.push([goalName]);
}


yargs(hideBin(process.argv))
  .command('add <task>', 'Add a new task', yargs => { 
    return yargs.positional('task', {
        'type':'string',
        'description':'the content of your task to create',
    })
  }, (argv) => console.log(argv.task)
)
.options('tags',{
  alias: 't',
  type: 'string',
  description: 'tags to add to the note'
})
.command('new <goal>', 'Create a new goal', yargs => { 
  return yargs.positional('topic', {
    'type':'string',
    'description':'the overarching goal that needs to be achieved'
  })
}, (argv) => {
  addGoalToCLI(argv.goal);
  console.log(argv.goal, " added to list of goals");

})
.options('tags',{
  alias: 'g',
  type: 'string',
  description: 'tags to add to the note'
})
.demandCommand(1)
.parse()

//table is an Array, so you can `push`, `unshift`, `splice` and friends


console.log(mytable.toString());