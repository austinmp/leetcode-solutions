// TO DO : OPTIMIZE MEMORY USAGE
var sortArray = function(nums) {
    return mergeSort(nums, 0, nums.length-1);
};

const mergeSort = (array, start, end) => { 
    if(end <= start) {
        return array.slice(start, start + 1);
    }
    const mid = Math.ceil((end + start)/2);
    let left;
    if(mid === end){
        left = mergeSort(array, start, start);
    } else {
        left = mergeSort(array, start, mid-1);
    }
    const right = mergeSort(array, mid, end);
    return merged = mergeArrays(left, right);
}

const mergeArrays = (left, right) => {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length || rightIndex < right.length){
        if (leftIndex >= left.length){
            merged.push(right[rightIndex]);
            rightIndex++;
        } else if(rightIndex >= right.length){
            merged.push(left[leftIndex]);
            leftIndex++;
        } else if (left[leftIndex] <= right[rightIndex]){
            merged.push(left[leftIndex]);
            leftIndex++;
        } else if (right[rightIndex] <= left[leftIndex] ){
            merged.push(right[rightIndex]);
            rightIndex++;
        }      
    } 
    return merged;
}

