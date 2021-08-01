/**
 * Created by jch on 2021/8/1.
 */
(function(exports){
    exports.JCH = exports.JCH || {};
    exports.JCH.sort = exports.JCH.sort || {};
    function _insertSort(data,l,r){
        for(var i=l;i<=r;i++){
            var temp = data[i];
            for(var j=i;j>l && data[j-1]>temp;j--){
                data[j] = data[j-1];
            }
            data[j]=temp;
        }
    }
    function _merge(data,left,mid,right){
        var temp = new Array(right-left+1);
        for(var i=0;i<temp.length;i++){
            temp[i] = data[left+i];
        }
        var l = left;
        var r=mid+1;
        for(var i=left;i<=right;i++){
            if(l>mid){
                data[i] = temp[r-left];
                r++;
            }else if(r>right){
                data[i]=temp[l-left];
                l++;
            }else{
                if(temp[l-left]<temp[r-left]){
                    data[i]=temp[l-left];
                    l++;
                }else{
                    data[i]=temp[r-left];
                    r++;
                }
            }
        }
    }
    function _mergeSorte(data,left,right){
        if(right-left<15){
            _insertSort(data,left,right)
            return;
        }
        var mid = left+parseInt((right-left)/2);
        _mergeSorte(data,left,mid);
        _mergeSorte(data,mid+1,right);
        if(data[mid]>data[mid+1]){
            _merge(data,left,mid,right);
        }
    }
    function mergeSort(data){
        _mergeSorte(data,0,data.length-1);
        return data;
    }
    exports.JCH.sort.mergeSort = mergeSort;
})(window);