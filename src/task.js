class Topic { 
    name;
    timeContributed;

    constructor(name,timeContributed){ 
        this.name = name; 
        this.timeContributed = timeContributed;
    }

    addTime(addedTime){ 
        this.timeContributed += addedTime; 
    }
}

export default {};