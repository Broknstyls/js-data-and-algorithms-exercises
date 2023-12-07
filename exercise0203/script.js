let pname= [];
let pgender = [];
let male = [];
let female = [];
class People{
    constructor(name,gender) {
        this.name = name;
        this.gender = gender;
        pname.push(this.name);
        pgender.push(this.gender);
        
    }
}
let person1= new People('muban','m');
let person2= new People('grace','f');
let person3= new People('evans','m');
let person4= new People('john','m');
let person5= new People('alice','f');
let person6= new People('meki','m');
let person7= new People('mimi','f');
let person8= new People('momo','f');
let person9= new People('rowan','m');
let person10= new People('leg','f');
let i = 0;
while(i < pgender.length){
    if(pgender[i] == 'm'){
        male.push(pname[i] + ':'+pgender[i]);
        i++;

    }else if(pgender[i] == 'f'){
        female.push(pname[i] + ':'+pgender[i]);
        i++;
    }
    
}
console.log(`THERE ARE ${male.length} MALES AND ${female.length} FEMALES`)