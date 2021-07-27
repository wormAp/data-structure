/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    function JCHArray(len) {
        this._data = new Array(len || 10);
        this._size = 0;
    }
    JCHArray.prototype = {
        constructor:JCHArray,
        add(index,val) {
            if(index<0 || index>this._size){
                throw new Error('index:'+index+" 索引不合法,索引值应该在[0,"+this._size+"]之间!")
            }
            if(this._size === this._data.length){
                //扩容
                this._resize(this._data.length*2);
            }
            for(var i=this._size;i>index;i--){
                this._data[i] = this._data[i-1];
            }
            this._data[i] = val;
            this._size++;
        },
        addFirst(val){
            this.add(0,val);
        },
        addLast(val){
            this.add(this._size,val);
        },
        remove(index){
            if(index<0 || index>this._size-1){
                throw new Error('index:'+index+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            var delVal = this._data[index];
            for(var i=index;i<this._size-1;i++){
                this._data[i] = this._data[i+1];
            }
            this._size--;
            if(this._size === parseInt(this._data.length/2) && parseInt(this._data.length*2/3)!=0){
                //缩容
                this._resize(parseInt(this._data.length*2/3))
            }
            return delVal;
        },
        removeFirst(){
          return this.remove(0);
        },
        removeLast(){
            return this.remove(this._size-1);
        },
        removeVal(val){
            var index = 0;
            for(var i=0;i<this._size;i++){
                if(this._data[i]!=val){
                    this._data[index++]=this._data[i];
                }
            }
            this._size = index;
            if(this._size === parseInt(this._data.length/2) && parseInt(this._data.length*2/3)!=0){
                //缩容
                this._resize(parseInt(this._data.length*2/3))
            }
        },
        contains(val){
            for(var i = 0;i<this._size;i++){
                if(this._data[i] == val){
                    return true;
                }
            }
            return  false;
        },
        setVal(index,val){
            if(index<0 || index>this._size-1){
                throw new Error('index:'+index+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            this._data[index] = val;
        },
        setFirst(val){
            this.setVal(0,val);
        },
        setLastVal(val){
            this.setVal(this._size-1,val);
        },
        getVal(index){
            if(index<0 || index>this._size-1){
                throw new Error('index:'+index+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            return this._data[index];
        },
        getFirst(){
            return this.getVal(0);
        },
        getLastVal(){
            return this.getVal(this._size-1);
        },
        swap(i,j){
            if(i<0 || i>this._size-1){
                throw new Error('index:'+i+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            if(j<0 || j>this._size-1){
                throw new Error('index:'+j+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            var temp = this._data[i];
            this._data[i] = this._data[j];
            this._data[j] = temp;
        },
        _resize(len){
            var data = new Array(len);
            for(var i=0;i<this._size;i++){
                data[i] = this._data[i];
            }
            this._data = data;
        },
        toString(){
            var result = [];
            for(var i=0;i<this._size;i++){
                result.push(this._data[i]);
            }
            return "["+result.join(',')+"]";
        }
    }
    exports.JCH.JCHArray = JCHArray;
})(window);


