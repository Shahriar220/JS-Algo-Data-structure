class Node{
    constructor(value){
        this.value=value;
        this.right_child=null;
        this.left_child=null;
    }
}

class BinaryTree{
    constructor(){
        this.parent=null;
    }
    insert(value){
        var newNode=new Node(value);
        if(this.parent===null){
            this.parent=newNode;
            return this;
        }
        var current=this.root;
        while(1){
            if(value==current.value) return undefined;
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                current=current.left;}
                else{
                    if(current.right===null){
                        current.right=newNode;
                    }
                    current=current.right;
                }
            }
        }
        search(value){
            if(this.parent===null) return undefined;
            var current=this.parent;
            found=false;
            while(current&&!found){
                if(value<current){
                    current=current.left;
                }else if(value>current){
                    current=current.right;
                }else{
                    found=true;
                }
            }
            if(!found) return undefined;
            return current;
    }
    
    contains(value){
        if(this.parent===null) return undefined;
        var current=this.parent;
        found =false;
        while(current&&!found){
            if(value>current.value){
                current=current.right;
            }
            else if(value<current.value){
                current=current.left
            }
            else{
                return true;
            }
        }
        return false;
    }
}
