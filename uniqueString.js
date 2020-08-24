function foo(input) {
  
    let unique = new Set();
    
    let brk = input.split('');
    
  
    for (let i =0; i <brk.length; i++){
      if (!unique.has(brk[i])){
        unique.add(brk[i])
      }
    }
  
  const final = new Set(unique);
    
  return [...final].join('');
  
  }
   
  // test case
  console.log(foo('abbbcd')); // should output 'abcd' in the console
  console.log(foo('abcddaea')); // should output 'abcde' in the console
  
  
  
  // return a string of just unique values, first working solution