class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        var newNode=new Node(value);

        if(this.root===null){
            this.root=newNode;
            return this;
        }
        var current=this.root;

        while(true){
            if(value===current.value) return undefined;

            if(value<current.value){
                if(this.root.left===null){
                    this.root.left=newNode;
                    return this;
                }
                this.root=this.root.left;}
                else{
                    if(this.root.right===null){
                        this.root.right=newNode;
                    }
                    this.root=this.root.right;
                }
            }
        }
        search(value){
            if(this.root===null) return undefined;
            var current=this.root;
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
        if(this.root===null) return undefined;
        var current=this.root;
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
    BFS(){
        var node=this.root,
        data=[],
        queue=[];
        queue.push(node);

        while(queue.length){
            node=queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    preorder(){
        var visited=[];
        var current=this.root;
        function helper(node){
            visited.push(node);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }
        helper(current);
        return visited;
    }
    postorder(){
        var visited=[];
        var current=this.root;
        function helper(node){
            if(current.left) helper (node.left);
            if(current.right) helper (node.right);
            visited.push(node.value);
        }
        helper(current);
        return visited;
    }
    inorder(){
        var visited=[];
        var current=this.root;
        function helper(node){
            if(current.left) helper (node.left);
            visited.push(node.value);
            if(current.right) helper (node.right);
        }
        helper(current);
        return visited;
    }
}
var tree = new BinaryTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
