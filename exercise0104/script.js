let word = {
    letters:['m','u','b','a','n'],
    combine:function(){
        let string = this.letters.join('');
        console.log(string)
    }
}
word.combine();