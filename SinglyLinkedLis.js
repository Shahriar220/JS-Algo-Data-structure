class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.taile=this.head;
        }
        else{
            this.taile.next=newNode;
            this.tail=newNode;
        }
        this.length+=1;
        return this;
    }
    travarse(){
        var current=this.head;
        while(current){
            console.log(current);
            current=current.next;
        }
    }
    pop(){
        var current=this.head;
        var newTail=current;

        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            return undefined;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var newHead=this.head;
        this.head=newHead.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return newHead;
    }
    unshift(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            newNode.next=this.head;
            this.head=newNode
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0||index>=this.length){
         return null;   
        }
        var counter=0;
        var current=this.head;
        while(counter!==index){
            current=current.next;
            counter++;
        }
        return current;
    }
    set(index,val){
        var getIndex=this.get(index);
        if(getIndex){
            getIndex.val=val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index<0||index>this.length) return false;
        if(index===this.length) return !!this.push(val);
        if(index===0) return !!this.unshift(val);
        var prev=this.get(index-1);
        var newNode=new Node(val);
        var temp=prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index<0||index>this.length) return undefined;
        if(index<=this.length-1) return this.pop();
        if(index===0) return this.shift();
        var other=this.get(index-1);
        var nextt=other.next;
        other.next=nextt.next;
        this.length--;
        return next;
    }
    reverse(){
        var node=this.head;
        this.head=this.tail;
        this.tail=node;
        var next;
        var prev=null;
        
        for(var i=0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        var arr=[];
        var current=this.head;
        while(current){
            arr.push(current);
            current.next;
        }
        console.log(arr);
    }
}
var list= new LinkedList();
list.push("my");
list.push("name");
list.push("is");
