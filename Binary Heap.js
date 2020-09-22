class BinaryHeap{
    constructor(){
        this.values=[];
    }
    insert(element){
        this.values.push(element); 
        this.bubbleup();
    }   
    bubbleup(){
        var index=this.values.length-1;
        const element=this.values[index];
        while(index>0){
            var parentIndex= Math.floor((index-1)/2);
            var parent=this.values[parentIndex];
            if(element<=parent){
                break;
            }
            this.values[parentIndex]=element;
            this.values[index]=parent;
            index=parentIndex;
        }
    }
}
let heap = new BinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
