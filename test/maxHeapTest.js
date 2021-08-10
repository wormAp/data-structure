/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
function generalData(size,min,max) {
    var _size = parseInt(Math.random()*size)+1;
    var data = new Array(_size);
    for(var i=0;i<_size;i++){
        var temp = parseInt(Math.random()*(max-min))+min;
        data[i] = temp;
    }
    return data;
}
function copy(data) {
    var rdata = new Array(data.length);
    for(var i=0;i<data.length;i++){
        rdata[i] = data[i];
    }
    return rdata;
}
function baseSort(data) {
    return data.sort(function (s1,s2) {
        return -(s1-s2);
    });
}
function check(baseSortData,sortData,data,name) {
    if(baseSortData.length != sortData.length){
        console.log(baseSortData,sortData);
        throw new Error('长度不一致,'+name+"排序算法不通过")
    }
    for(var i=0;i<baseSortData.length;i++){
        if(baseSortData[i]!=sortData[i]){
            console.log(baseSortData,sortData,data);
            throw new Error(name+"排序算法不通过")
        }
    }
}
function sortMaxHeap(data){
    var maxHeap = new JCH.MaxHeap();
    var result = [];
    for(var i=0;i<data.length;i++){
        maxHeap.add(data[i]);
    }
    for(var i=0;i<data.length;i++){
        var delVal = maxHeap.remove();
        result.push(delVal);
    }
    return result;
}
console.log('---maxHeap test start----')
for(var i=0;i<1000;i++){
    var data = generalData(20,10,100);
    var baseSortData = baseSort(copy(data));
    // console.log(baseSortData)
    check(baseSortData,sortMaxHeap(copy(data)),data,'maxHeap')

}
console.log('sort pass')
