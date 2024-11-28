interface ForList {
    [index:number]: string
}
let newArray: ForList = ["Interface", "for", "Array"];
console.log(newArray);

const a:string[]=['1','2']

function add(n1:number,n2:number,showAns:(result:number)=>void){
const ans=n1+n2
showAns(ans)
console.log(
    "hi"
)
}

add(2,3,(ans)=>{
    console.log('ans', ans)
})