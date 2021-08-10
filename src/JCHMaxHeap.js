/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    var JCHArray = exports.JCH.JCHArray;
    function MaxHeap(len) {
        this._data = new JCHArray(len);
    }
    MaxHeap.prototype = {
        constructor:MaxHeap,
        getParentIndex(index){
          if(index==0){
              throw new Error('index 0 无父节点')
          }
          return (index-1)>>1;
        },
        getLeftIndex(index){
            return (index<<1)+1;
        },
        getRightIndex(index){
            return (index<<1)+2;
        },
        isEmpty(){
          return this._data.isEmpty();
        },
        getSize(){
            return this._data.getSize();
        },
        add(val){
            this._data.addLast(val);
            var key = this._data.getSize()-1;
            while (key>0 && this._data.getVal(this.getParentIndex(key))<this._data.getVal(key)){
                this._data.swap(this.getParentIndex(key),key);
                key = this.getParentIndex(key);
            }
        },
        remove(){
            if(this.isEmpty()){
                throw new Error('MaxHeap is empty!')
            }
            var delVal = this._data.getVal(0);
            this._data.swap(0,this.getSize()-1);
            this._data.removeLast();
            var key = 0;
            while (this.getLeftIndex(key)<this._data.getSize()){
                var leftIndex = this.getLeftIndex(key);
                var rightIndex = this.getRightIndex(key);
                var maxIndex = leftIndex;
                if(rightIndex<this._data.getSize() && this._data.getVal(maxIndex)<this._data.getVal(rightIndex)){
                    maxIndex = rightIndex;
                }
                if(this._data.getVal(key)<this._data.getVal(maxIndex)){
                    this._data.swap(key,maxIndex);
                    key = maxIndex;
                }else{
                    break;
                }
            }

            return delVal;
        }
    }
    exports.JCH.MaxHeap = MaxHeap;
})(window);
