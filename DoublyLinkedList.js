class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newNode=new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
    pop(){
     
        if(!this.head) return undefined;
        
        var poppedNode=this.tail;

        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null;
        }
        length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        var oldNode=this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=oldNode.next;
            this.head.prev=null;
            oldNode.next=null;
        }
        this.length--;
        return oldNode;
    }
    unshift(val){
        var newNode=new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index<0||index>this.length) return null;

        var current,count; 
        if(index<this.length/2){
            count=0;
            current=this.head;
            while(count!==index){
                current=current.next;
                count++;
            }
        }
        else{
            count=this.length-1;
            current=this.tail;
            while(count!==index){
                current=current.prev;
                count--;
            }
        }
        return current;
    }
    set(index,val){
        var result=this.get(index);
        if(result!=null){
            result.val=val
            return true;
        }
        return false;
    }
    insert(val,index){
        if(index<0||index>this.length) return null;
        if(index===0) unshift(val);
        if(index===this.length) return !!this.push(val);

        var newNode=new Node(val);
        var previous=this.get(index-1);
        var after=previous.next;
        previous.next=newNode,newNode.prev=previous;
        newNode.next=after,after.next=newNode;
        return true;
    }
    remove(index){
        if(index<0||index>=this.length) return undefined;
        if(index===0) return this.shift();
        if(index=this.length-1) return this.pop();

        var result=this.get(index);
        result.prev.next=result.next;
        result.next.prev=result.prev;
        result.prev=null;
        result.next=null;
        this.length--;
        return result;
    }
}
