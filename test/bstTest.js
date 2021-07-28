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
function bstTest(bst,name){
    var testData = [];
    var baseDt = [];
    var count = 500;
    var delValArr = [];
    function check(baseDt,bst) {
        var d1 = baseDt.sort(function(t1,t2){
            return t1-t2;
        })
        var d2 = bst.mediumOrderTraversal();
        if(d1.length != d2.length){
            console.log(d1,d2,delValArr)
            throw new Error(name+" 失败!")
        }
        for(var i=0;i<d1.length;i++){
            if(d1[i]!=d2[i]){
                console.log(d1,d2)
                throw new Error(name+" 失败!")
            }
        }
    }
    for(var i=0;i<count;i++){
        var data = parseInt(Math.random()*1000)+1
        testData.push(data);
        bst.add(data);
        if(baseDt.indexOf(data)<0){
            baseDt.push(data);
        }
        if(i%5==0){
            var index = parseInt(Math.random()*testData.length);
            if(index>=testData.length){
                index = testData.length-1;
            }
            var delVal = testData[index];
            delValArr.push(delVal);
            bst.remove(delVal);
            for(var i=0;i<baseDt.length;i++){
                if(baseDt[i]==delVal){
                    break;
                }
            }
            baseDt.splice(i,1)
        }
        check(baseDt,bst);
    }
    console.log(name+'  pass')
}
console.log('---bst----')
bstTest(new JCH.JCHBSTTree(),'JCHBSTTree')
