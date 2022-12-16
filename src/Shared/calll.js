

const obj = {
    name :"sourabh",
    printfn :function(parm){
        console.log(`${this.name} and name form parmters ${parm}`)
    }   
}

let o = new obj();
o.printfn("keshav")
