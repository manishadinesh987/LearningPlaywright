/*

*

**

***

****

*****

*/


let n = 5
for(let i=1 ; i<=5; i++){
    let row = '';
    for(let j=1 ; j<=i ; j++){
        row+= '* ';
    }
    console.log(row);
}

/*

 *******

  *****

   ***

    *

   */
  let num = 3

  for(let i=num; i>=1; i--){
    let row ='';
    for (let j=0;j<n-i ; j++ ){
        row+='  ';
    }
    for(let k=0;k< 2*i-1;k++ ){
        row+=' *';
    }
    console.log(row);

  }