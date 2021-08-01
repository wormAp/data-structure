/**
 * Created by jch on 2021/8/1.
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    exports.JCH.sort = exports.JCH.sort || {};
    function insert(data){
        for(var i=0;i<data.length;i++){
            var temp = data[i];
            for(var j=i;j>0 && data[j-1]>temp;j--){
                data[j]=data[j-1];
            }
            data[j]=temp;
        }
        return data;
    }
    exports.JCH.sort.insert = insert;
})(window);