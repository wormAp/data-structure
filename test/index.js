/**
 * @author chaohui jiang
 * @version:v1.1.0
 */
function test01(list) {
    list.add(0,4);
    if(!(list.getSize() == 1 && list.getVal(0)==4)){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.addFirst(3);
    if(!(list.getSize() == 2 && list.getVal(0)==3)){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.addLast(5);
    if(!(list.getSize() == 3 && list.getVal(list.getSize()-1)==5)){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.addFirst(1)
    if(!(list.getSize() == 4 && list.getVal(0)==1)){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.add(1,2);
    if(!(list.getSize() == 5 && list.getVal(1)==2)){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.add(1,2);
    if(!(list.getSize() == 6&& list.getVal(1)==2)){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    for(var i=0;i<10;i++){
        list.addLast(i);
    }
    if(!(list.contains(2) && !list.contains(21))){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.remove(3)
    if(!(list.getSize() == 15)){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.removeVal(2);
    if((list.contains(2))){
        console.error('测试不通过!')
    }
    console.log(list.toString())
    list.swap(2,5);
    console.log(list.toString())
    list.swap(2,3);
    console.log(list.toString())
}
test01(new JCH.JCHArray());
test01(new JCH.JCHLinkList());
