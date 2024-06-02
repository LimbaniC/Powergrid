import Task from "./task";

class Topic { 
    name;
    timeContributed; 
    timeNeeded;
    percentage;
    tasks = [];

    constructor(name,timeContributed,timeNeeded){ 
        this.name = name;
        this.timeContributed = timeContributed;
        this.timeNeeded = timeNeeded;
    }

     recalculatePercentage(){ 
        this.percentage = timeContributed / timeNeeded;
     }

     addTimeContributed(addedTime){
        this.timeContributed += addedTime; 
        recalculatePercentage();
    }

    //implement with task class
    addTask(addedTask){ 
        this.tasks.push(new Task(addedTask));
    }

}