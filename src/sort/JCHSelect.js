/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    exports.JCH.sort = exports.JCH.sort || {};
    var swap = exports.JCH.utils.swap;
    function select(data) {
        for(var i=0;i<data.length;i++){
            var minIndex = i;
            for(var j=i+1;j<data.length;j++){
                if(data[minIndex]>data[j]){
                    minIndex = j;
                }
            }
            swap(data,minIndex,i);
        }
        return data;
    }
    exports.JCH.sort.select = select;
})(window)
