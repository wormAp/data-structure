/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
function getRandomOpt(ops){
    let size = ops.length;
    let index = parseInt(Math.random()*size);
    if(index>=size){
        index=size-1;
    }
    return ops[index];
}

function queueTest(queue,name){
    function checkArr(base,stack) {
        var size = queue.getSize();
        for(var i=0;i<size;i++){
            if(base[i]!=queue.getVal(i)){
                console.log(base,stack._data)
                throw new Error(name+' queue error!');
            }
        }
    }
    var ops = ['isEmpty','getSize','add','remove','peek'];
    var baseDt = [];
    var count = 2000;
    for(var i=0;i<count;i++){
        var opt = "";
        if(i<parseInt(count*2/3)){
            opt='add'
        }else{
            opt = getRandomOpt(ops);
        }
        var data = parseInt(Math.random()*1000)+1;
        switch (opt) {
            case opt[0]:
                let isEmpty = queue.isEmpty();
                if(isEmpty && baseDt.length!=0 || !isEmpty &&  baseDt.length==0){
                    throw new Error(name+' 测试不通过!');
                }
                break;
            case opt[1]:
                let size = stack.getSize();
                if(size!=baseDt.length){
                    throw new Error(name+' 测试不通过!');
                }
                break;
            case opt[2]:
                queue.add(data);
                baseDt.unshift(data);
                break;
            case opt[3]:
                var delVal1 = queue.remove();
                var delVal2 = baseDt.shift();
                if(delVal1!=delVal2){
                    throw new Error(name+' 测试不通过!')
                }
                break;
            case opt[4]:
                var peek1 = queue.peek();
                if(peek1 != baseDt[0]){
                    throw new Error(name+' 测试不通过!')
                }
                break;
        }
        checkArr(baseDt,queue);
    }
    console.log(name+' queue pass')
}
console.log('---queue----')
queueTest(new JCH.JCHLoopQueue(),'JCHLoopQueue')
