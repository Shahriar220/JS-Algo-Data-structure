class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    push(val){
        var newNode=new Node(val);
        if(this.length===0){
            this.first=newNode;
            this.last=newNode;
        }
        else{
            var current=this.first;
            this.first=newNode;
            this.first.next=current;
        }
        this.length++;
        return this.length;
    }
    pop(){
        if(!this.first) return null;
        var present=this.first;
        if(this.first===this.last){
            this.tail=null;
        }
        this.first=this.first.next;
        this.length--;
        return present.value;
    }
}
