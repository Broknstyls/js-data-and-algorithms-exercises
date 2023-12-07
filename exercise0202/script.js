let box=[9,8,7];
function compare2(num){
    let i = 0;
    while(i<box.length){
        if(num > box[i]){
            console.log(box);
            return false;
        } else{
            i++;
        }
        if(i ==box.length){
            box.push(num);
            box = box.sort();
            console.log(box);
            return true;
        }
    }
    
}
compare2(10);