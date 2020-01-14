// similar to stack

class Queue{
    constructor(){
        this.queueLine = []
        this.first = 0
        this.last = 0
    }

    enqueue(element){
        this.queueLine[this.last] = element
        this.last++
    }

    dequeue(){
        let removed = this.queueLine[this.first]
        delete this.queueLine[this.first]
        this.first++
        return removed
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