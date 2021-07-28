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
    function JCHLinkList() {
        this._list = null;
        this._size = 0;
    }
    JCHLinkList.prototype = {
        constructor:JCHLinkList,
        getSize(){
            return this._size;
        },
        isEmpty() {
            return this._size==0;
        },
        add(index,val) {
            if(index<0 || index>this._size){
                throw new Error('index:'+index+" 索引不合法,索引值应该在[0,"+this._size+"]之间!")
            }
            var dyNode = new Node(null,this._list);
            var pre = dyNode;
            for (var i=0;i<index;i++){
                pre = pre.next;
            }
            pre.next = new Node(val,pre.next);
            this._list = dyNode.next;
            this._size++;
        },
        addFirst(val) {
            this.add(0,val);
        },
        addLast(val) {
            this.add(this._size,val);
        },
        remove(index){
            if(index<0 || index>this._size-1){
                throw new Error('index:'+index+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            var dyNode = new Node(null,this._list);
            var pre = dyNode;
            for (var i=0;i<index;i++){
                pre = pre.next;
            }
            var delNode = pre.next;
            pre.next = delNode.next;
            delNode.next = null;
            this._list = dyNode.next;
            this._size--;
            return delNode.val;
        },
        removeFirst() {
            return this.remove(0);
        },
        removeLast() {
            return this.remove(this._size-1);
        },
        removeVal(val){
            var dyNode = new Node(null,this._list);
            var pre = dyNode;
            while (pre.next){
                if(pre.next.val === val){
                    pre.next = pre.next.next;
                    this._size--;
                }else {
                    pre=pre.next;
                }
            }
            this._list = dyNode.next;
        },
        contains(val){
            var cur = this._list;
            while (cur){
                if(cur.val == val){
                    return true;
                }
                cur = cur.next;
            }
            return false;
        },
        setVal(index,val){
            if(index<0 || index>this._size-1){
                throw new Error('index:'+index+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            var cur = this._list;
            for(var i=0;i<index;i++){
                cur = cur.next;
            }
            cur.val = val;
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
            var cur = this._list;
            for(var i=0;i<index;i++){
                cur = cur.next;
            }
            return cur.val;
        },
        getFirst(){
            return this.getVal(0);
        },
        getLastVal(){
            return this.getVal(this._size-1);
        },
        reverse(){
            var pre = null;
            var cur = this._list;
            while (cur){
                var temp = cur.next;
                cur.next = pre;
                pre = cur;
                cur = temp;
            }
            this._list = pre;
        },
        //相邻节点交换
        _swap(pre,node1,node2){
            pre.next = node2;
            node1.next = node2.next;
            node2.next = node1;
        },
        swap(i, j) {
            if(i<0 || i>this._size-1){
                throw new Error('index:'+i+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            if(j<0 || j>this._size-1){
                throw new Error('index:'+j+" 索引不合法，索引值应该在[0,"+this._size-1+"]之间!");
            }
            var dyNode  = new Node(null,this._list);
            var prei = dyNode;
            var prej = dyNode;
            var count = Math.max(i,j);
            for(var k=0;k<count;k++){
                if(k<i){
                    prei = prei.next;
                }
                if(k<j){
                    prej = prej.next;
                }
            }
            var nodei = prei.next;
            var nodej = prej.next;
            //相邻节点
            if(nodei === prej || nodej === prei){
                if(nodei === prej){
                    this._swap(prei,nodei,nodej)
                }else{
                    this._swap(prej,nodej,nodei)
                }
            }else{
                var nodeiNext = nodei.next;
                prei.next = nodej;
                prej.next = nodei;
                nodei.next = nodej.next;
                nodej.next = nodeiNext;
            }
            this._list = dyNode.next;
        },
        toString(){
            var result = [];
            var cur = this._list;
            while (cur){
                result.push(cur.val);
                cur = cur.next;
            }
            return "["+result.join(',')+"]";
        }
    };
    exports.JCH.JCHLinkList = JCHLinkList;

})(window);
