function sort(str){
  let strr = str.split('');
  for (let index = 0 ;index <strr.length ;index ++ ){
    for (let index1 = 0;index1<(strr.length-index) ;index1++){
      let temp;
      if (strr[index1] > strr[index1+1] ){
        temp = strr[index1] ;
        strr[index1] = strr[index1 +1];
        strr[index1+1] =temp;
      }
    }
  }
  return(strr.join(''));
}
 
let words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
let anagrams = {}

for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
  let letters = sort(words[wordIndex])
  
  anagrams[letters] = anagrams[letters] || []
  
  anagrams[letters].push(words[wordIndex])
}

console.log(Object.values(anagrams))
