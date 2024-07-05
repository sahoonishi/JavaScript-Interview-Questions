// RETURN THE LONGEST WORD IN A STRING


//----------------------------METHOD 1------------------------------------
const longest=(str)=>{
  if(str.trim().length===0) return false; // TO REMOVE WHITESPACE FROM BOTH END OF A STRING

  let arr = str.split(" "); // IF WE PERFORM SPLIT ON A STRING IT WILL CONVERTED TO AN ARRAY
  console.log(arr);

  return arr.reduce((acc,word)=> word.length > acc.length ? word : acc , arr[0])
}


//----------------------------METHOD 2------------------------------------
const longestt=(str)=>{
  if(str.trim().length===0) return false;
  let arr = str.split(" ");
  arr.sort((a,b)=> b.length - a.length); // COMPARISION OPERATOR 
  console.log(arr);
  return arr[0]; // FOR THE LAST ELEMENT WRITE  -    arr.at(-1);
}

console.log(longest("My Name is Nishi Sahooo prajna"));
console.log(longestt("My Name is Nishi Sahooo prajna"));








