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

function testStack(stack,name,hasReverse){
    function checkArr(base,stack) {
        var size = stack.getSize();
        for(var i=0;i<size;i++){
            if(base[i]!=stack._data.getVal(i)){
                console.log(base,stack._data)
                throw new Error(name+' stack error!');
            }
        }
    }
    var ops = ['isEmpty','getSize','getTop','push','pop'];
    var baseDt = [];
    var count = 2000;
    for(var i=0;i<count;i++){
        var opt = "";
        if(i<parseInt(count*2/3)){
            opt='push'
        }else{
            opt = getRandomOpt(ops);
        }
        var data = parseInt(Math.random()*1000)+1;
        switch (opt) {
            case ops[0]:
                let isEmpty = stack.isEmpty();
                if(isEmpty && baseDt.length!=0 || !isEmpty &&  baseDt.length==0){
                    throw new Error(name+' 测试不通过!');
                }
                break;
            case ops[1]:
                let size = stack.getSize();
                if(size!=baseDt.length){
                    throw new Error(name+' 测试不通过!');
                }
                break;
            case ops[2]:
                let topData = stack.getTop();
                let baseTop =baseDt[baseDt.length-1]
                if(hasReverse){
                    baseTop = baseDt[0];
                }
                if(topData!=baseTop){
                    throw new Error(name+' 测试不通过!');
                }
                break;
            case ops[3]:
                stack.push(data)
                if(hasReverse){
                    baseDt.unshift(data);
                }else {
                    baseDt.push(data);
                }
                break;
            case ops[4]:
                stack.pop()
                if(hasReverse){
                    baseDt.shift();
                }else {
                    baseDt.pop();
                }
                break;
        }
        checkArr(baseDt,stack);
    }
    console.log(name+' stack pass')
}
console.log('----stack----')
testStack(new JCH.JCHArrayStack(),'JCHArrayStack');
testStack(new JCH.JCHLinkStack(),'JCHLinkStack',true)
