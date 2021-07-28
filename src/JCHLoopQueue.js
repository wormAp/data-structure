/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    function JCHLoopQueue(len) {
        this._data = new Array(len || 10);
        this._font = this._tail = 0;
    }
    JCHLoopQueue.prototype = {
        constructor:JCHLoopQueue,
        getSize(){
            var count = this._tail-this._font;
            return count>0?count:this._data.length+count;
        },
        isEmpty(){
            return this._font == this._tail;
        },
        getCapacity(){
          return this._data.length-1;
        },
        add(val){
            this._data[this._tail] = val;
            this._tail = (this._tail+1)%this._data.length;
            if((this._tail+1)%this._data.length === this._font){
                this._resize(this.getCapacity()*2);
            }
        },
        remove(){
            if(this.isEmpty()){
                throw new Error('queue is empty!');
            }
            var delVal = this._data[this._font];
            this._font = (this._font+1)%this._data.length;
            if(this.getSize() === parseInt(this.getCapacity()/2) && parseInt(this.getCapacity()*2/3)!=0){
                this._resize(parseInt(this.getCapacity()*2/3));
            }
            return delVal;
        },
        peek(){
            if(this.isEmpty()){
                throw new Error('queue is empty!');
            }
            return this._data[this._font];
        },
        _resize(len){
            var data = new Array(len+1);
            var size = this.getSize();
            for(var i=0;i<size;i++){
                data[i] = data[(this._font+i)%this._data.length];
            }
            this._data = data;
            this._font=0;
            this._tail = size;
        },
        toString(){
            var result = [];
            var size = this.getSize();
            for (var i=0;i<size;i++){
                result.push(this._data[(i+this._font)%this._data.length]);
            }
            return 'font ['+result.join(',')+"] tail"
        }
    }
    exports.JCH.JCHLoopQueue = JCHLoopQueue;
})(window);
