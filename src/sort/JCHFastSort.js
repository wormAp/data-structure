/**
 * Created by jch on 2021/8/1.
 */
(function(exports){
    exports.JCH = exports.JCH || {};
    exports.JCH.sort = exports.JCH.sort || {};
    var insertWithLR = exports.JCH.sort.insertWithLR;
    var swap = exports.JCH.utils.swap;
    function partition(data,left,right){
        var index = parseInt(Math.random()*(right-left))+left;
        if(index>right){
            index=right;
        }
        swap(data,index,left);
        var val = data[left];
        var leftIndex = left;
        var i = left+1;
        var rightIndex = right+1;
        while(i<rightIndex){
            if(data[i]<val){
                leftIndex++;
                swap(data,leftIndex,i);
                i++;
            }else if(data[i]>val){
                rightIndex--;
                swap(data,i,rightIndex);
            }else{
                i++;
            }
        }
        swap(data,left,leftIndex);
        return({
            leftIndex:leftIndex-1,
            rightIndex:rightIndex
        });
    }
    function _fastsort(data,left,right){
        if(right-left<15){
            insertWithLR(data,left,right);
            return;
        }
        var partitionInfo = partition(data,left,right);
        _fastsort(data,left,partitionInfo.leftIndex);
        _fastsort(data,partitionInfo.rightIndex,right);
    }
    function fastsort(data){
        _fastsort(data,0,data.length-1);
        return data;
    }
    exports.JCH.sort.fastsort = fastsort;
})(window)