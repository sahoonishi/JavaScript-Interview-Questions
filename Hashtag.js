const Hashtaggenerator=(input)=>{
  const words=input.split(" ");
  let newArr = words.map((word)=>word.replace(word[0] , word[0].toUpperCase()));
  console.log(newArr);
  let wordss = `#${newArr.join("")}`
   console.log(wordss);
}

Hashtaggenerator("my name is thapa");

