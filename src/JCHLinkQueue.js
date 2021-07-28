/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    function Node(val,next) {
        this.val = val;
        this.next = next || null;
    }
    function JCHLinkQueue() {
        this._font = this._tail;
        this._size = 0;
    }
    JCHLinkQueue.prototype = {
        constructor:JCHLinkQueue,
        getSize(){
            return this._size;
        },
        isEmpty(){
            return this._size===0;
        },
        //测试使用
        getVal(index){
            var cur = this._font;
            for(var i=0;i<index;i++){
                cur = cur.next;
            }
            return cur.val;
        },
        add(val){
            if(this._tail==null){
                this._font = this._tail = new Node(val);
            }else{
                var node = new Node(val);
                this._tail.next = node;
                this._tail = node;
            }
            this._size++;
        },
        remove(){
            if(this.isEmpty()){
                throw new Error('queue is empty!')
            }
            var delNode = this._font;
            this._font = delNode.next;
            delNode.next = null;
            if(this._font==null){
                this._tail = null;
            }
            this._size--;
            return delNode.val;
        },
        peek(){
            if(this.isEmpty()){
                throw new Error('queue is empty!')
            }
            return this._font.val;
        },
        toString(){
            var result = [];
            var cur = this._font;
            while (cur){
                result.push(cur.val);
                cur = cur.next;
            }
            return 'font '+result.join('->')+" tail";
        }
    };
    exports.JCH.JCHLinkQueue = JCHLinkQueue;
})(window);
