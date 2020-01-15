// similar to stack

class Queue{
    constructor(){
        this.queueLine = []
    }

    enqueue(element){
        this.queueLine.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
        return "Queue is empty"
        }
        return this.queueLine.shift();
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty"
        }else{
            return this.queueLine[0]
        }
    }

    isEmpty(){
        if(this.queueLine.length === 0){
            return true
        }else{
            return false
        }
    }
}

export default Queue;