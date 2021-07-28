/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    exports.JCH.sort = exports.JCH.sort || {};
    var swap = exports.JCH.utils.swap;
    function bubble(data) {
        for(var i=0;i<data.length;i++){
            var flag = false;
            for(var j=0;j<data.length-i-1;j++){
                if(data[j]>data[j+1]){
                    swap(data,j,j+1);
                    flag = true;
                }
            }
            if(!flag){
                break;
            }
        }
        return data;
    }
    exports.JCH.sort.bubble = bubble;
})(window)
