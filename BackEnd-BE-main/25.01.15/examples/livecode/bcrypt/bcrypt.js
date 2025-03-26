import bcrypt from 'bcrypt';
const pwd = '1234';
console.log(pwd);

const salt=await bcrypt.genSalt(12)
const hashedpwd=await bcrypt.hash(pwd,salt)
const hashedpwd2=await bcrypt.hash(pwd,12)
console.log(hashedpwd)
console.log(hashedpwd2)

