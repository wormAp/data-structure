/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    exports.JCH.utils = exports.JCH.utils || {};
    function swap(data,i,j) {
        var temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }
    exports.JCH.utils.swap = swap;
})(window)
