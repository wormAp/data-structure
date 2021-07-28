/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
(function (exports) {
    exports.JCH = exports.JCH || {};
    var JCHLinkStack = exports.JCH.JCHLinkStack;
    var JCHLinkQueue = exports.JCH.JCHLinkQueue;
    function TreeNode(val,left,right) {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }
    function JCHBSTTree() {
        this._root = null;
        this._size = 0;
    }
    JCHBSTTree.prototype = {
        constructor:JCHBSTTree,
        getSize(){
            return this._size;
        },
        isEmpty(){
            return this._size===0;
        },
        add(val){
            this._root = this._add(this._root,val);
        },
        _add(node,val){
            if(node === null){
                this._size++;
                return new TreeNode(val);
            }
            if(val<node.val){
                node.left = this._add(node.left,val);
            }else if(val>node.val){
                node.right = this._add(node.right,val);
            }
            return node;
        },
        remove(val){
            this._root = this._remove(this._root,val);
        },
        _remove(node,val){
            if(node===null){
                return null;
            }
            if(val<node.val){
                node.left = this._remove(node.left,val);
                return node;
            }else if(val>node.val){
                node.right = this._remove(node.right,val);
                return node;
            }else {
                this._size--;
                if(node.left===null){
                    var rightNode = node.right;
                    node.right = null;
                    return rightNode;
                }else if(node.right==null){
                    var leftNode = node.left;
                    node.left = null;
                    return leftNode;
                }else{
                    var preParentNode = node;
                    var preNode = node.right;
                    while (preNode.left){
                        preParentNode = preNode;
                        preNode = preNode.left;
                    }
                    if(preParentNode.right === preNode){
                        preParentNode.right = preNode.right;
                    }else {
                        preParentNode.left = preNode.right;
                    }
                    preNode.left = node.left;
                    preNode.right = node.right;
                    return preNode;
                }
            }
        },
        //中序
        mediumOrderTraversal(){
            var stack = new JCHLinkStack;
            var result = [];
            var p = this._root;
            while (p || !stack.isEmpty()){
                if(p){
                    stack.push(p);
                    p = p.left;
                }else{
                    var node = stack.pop();
                    result.push(node.val);
                    p = node.right;
                }
            }
            return result;
        },
        //层序
        levelTraversal(){
            var queue = new JCHLinkQueue();
            queue.add(this._root);
            var result = [];
            while (!queue.isEmpty()){
                var size = queue.getSize();
                var levelArr = [];
                for(var i=0;i<size;i++){
                    var node = queue.remove();
                    if(node.left){
                        queue.add(node.left);
                    }
                    if(node.right){
                        queue.add(node.right);
                    }
                    levelArr.push(node.val);
                }
                result.push(levelArr);
            }
            return result;
        }
    }
    exports.JCH.JCHBSTTree = JCHBSTTree;
})(window)
