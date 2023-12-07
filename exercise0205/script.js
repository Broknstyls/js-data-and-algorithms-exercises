let available = [];
let catalogue = [];
let out = [];
class RENTAL{
    constructor(movie){
        this.movie = movie;
        catalogue.push(movie);
        available.push(movie);
    }
}
let one = new RENTAL('harry potter');
let two = new RENTAL('american psycho');
let three = new RENTAL('oppenheimer');
let four = new RENTAL('zodiac');
let five = new RENTAL('12 angry men');
function checkout(movie){
   let i = 0;
   while(i < available.length){
    if(movie == available[i]){
        out.push(available[i]);
        available.splice(available[i],1);
        return `${movie} was checked out`
    }
    else{
        i++;
    }
    if(i == available.length){
        return `${movie} was not found`
    }
   }
}
function checkin(movie){
    let i = 0;
    while(i < out.length){
        if(movie == out[i]){
            available.push(out[i]);
            out.splice(out[i],1);
            return`${movie} was brought back`
        }
        else{
            i++;
        }
        if(i == out.length){
            return `${movie} does not exist in our rented out system`
        }
    }
}