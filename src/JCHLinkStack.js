/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    var JCHLinkList = exports.JCH.JCHLinkList;
    function JCHLinkStack() {
        this._data = new JCHLinkList();
    }
    JCHLinkStack.prototype = {
        constructor:JCHLinkStack,
        isEmpty(){
            return this._data.isEmpty();
        },
        getSize(){
            return this._data.getSize();
        },
        getTop(){
            return this._data.getFirst();
        },
        push(val){
            this._data.addFirst(val);
        },
        pop() {
            return this._data.removeFirst();
        },
        toString(){
            return 'top '+this._data.toString();
        }
    }
    exports.JCH.JCHLinkStack = JCHLinkStack;
})(window)

