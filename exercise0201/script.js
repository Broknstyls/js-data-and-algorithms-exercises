let box = [6,7,8];
let i = 0;
function compare(num){
  while(i < box.length){
    if(num < box[i]){
        console.log(box)
        return false;
    }else{
        i++;
    }
    if(i == box.length){
        box.push(num);
        console.log(box);
        return true;
        
    }
  }
}
compare(0);