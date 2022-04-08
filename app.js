function getSum(arr){ // tính tổng phần tử của mảng
    let sum = 0;
    for (let i = 0; i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
function miniMaxSum(arr){//
    arr.sort();
    const min = arr[0];
    const max = arr[arr.length - 1];
    const sum = getSum(arr);
    //tổng mảng lớn nhất 4/5 phần tử = tổng 5 phần tử - min
    //tổng mảng nhỏ nhất 4/5 phần tử = tổng 5 phần tử - max
    return [sum - max,sum - min];
}
arr = [1,2,3,4,5]
const value = miniMaxSum(arr);
const maxSum  = value[1];
const minSum = value[0];
console.log(minSum + " " + maxSum);
