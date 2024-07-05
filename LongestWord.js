// RETURN THE LONGEST WORD IN A STRING


//----------------------------METHOD 1------------------------------------
const longest=(str)=>{
  if(str.trim().length===0) return false;

  let arr = str.split(" ");
  console.log(arr);

  return arr.reduce((acc,word)=> word.length > acc.length ? word : acc , arr[0])
}


//----------------------------METHOD 2------------------------------------
const longestt=(str)=>{
  if(str.trim().length===0) return false;
  let arr = str.split(" ");
  arr.sort((a,b)=> b.length - a.length);
  console.log(arr);
  return arr[0];
}

console.log(longest("My Name is Nishi Sahooo prajna"));
console.log(longestt("My Name is Nishi Sahooo prajna"));








