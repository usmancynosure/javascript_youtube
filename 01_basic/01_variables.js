const id=12122112;
let emailId="usmanwaris0987@gmail.com"
var collegeName="COMSATS";

//in early day the use of Var may effect the the block and function scope {}
if (emailId=="usmanwaris0987@gmail.com"){
    emailId="warisusman073@gmail.com"
}
console.log(emailId);

//id=9832983982  ->not write in this way
console.log(id);
//console.table is used to print the more than one variables at same time
console.table([id,emailId, collegeName])



function varTest() {
    let x = 1;
    {
        let x = 2;
        console.log(x); // Output: 2
    }
    console.log(x); // Output: 2
}
varTest();
