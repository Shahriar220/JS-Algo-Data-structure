function Sorted(arr1,arr2){
    var arr=[];
    var i=0;
    var j=0;
    while(i<arr1.length&&j<arr2.length){
        if(arr1[i]<arr2[j]){
            arr.push(arr1[i]);
        }
        else{
            arr.push(arr2[j]);
        }
    }
    while(i<arr1.length){
        arr.push(arr1[i]);
    }
    while(j<arr2.length){
        arr.push(arr2[j])
    }
    return arr;
}


function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var mid= Math.floor(arr.length/2);
    var left=mergeSort(arr.slice(0,mid));
    var right=mergeSort(arr.slice(mid));
    return Sorted(left,right);
}
mergeSort([11,2,4,1,15,12]);
