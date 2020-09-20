class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    enque(val){
       var newNode=new Node(val);
       if(!this.first){
           this.first=newNode;
           this.last=newNode;
       }else{
           this.last.next=newNode;
           this.last=newNode
       }
       this.length++;
       return this;
    }
    dequeue(){
        if(!this.first) return null;
        var temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        this.last=this.first.next;
        this.first.next=this.first;
        this.length--;
        return temp.value;
    }
}
