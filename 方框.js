let center = document.querySelector('.center')
//四方向转动
let classList= center.classList;
let classArray=['LT','RT','RB','LB']
let initial = 0;
center.addEventListener('click',()=>{
    initial=(initial+=1)%4;
    console.log(initial)
    for (let i =0;i<classList.length;i++) {
        for (let j =0;j<classArray.length;j++){
            if(classList[i]==classArray[j]){
                classList.remove(classArray[j])
            }
        }
    }
    center.classList.add(classArray[initial])
})