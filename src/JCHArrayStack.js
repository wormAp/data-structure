/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    var JCHArray = exports.JCH.JCHArray;
    function JCHArrayStack(len) {
        this._data = new JCHArray(len || 10);
    }
    JCHArrayStack.prototype = {
        constructor:JCHArrayStack,
        isEmpty(){
            return this._data.isEmpty();
        },
        getSize(){
            return this._data.getSize();
        },
        getTop(){
            return this._data.getLastVal();
        },
        push(val){
            this._data.addLast(val);
        },
        pop() {
            return this._data.removeLast();
        },
        toString(){
            return this._data.toString()+'top';
        }
    };
    exports.JCH.JCHArrayStack = JCHArrayStack;
})(window)
