//====================================================
//  Quick Facts about IPv4
//====================================================
// Where N is Network ID, H is HostID;
// Class A N.H.H.H  first Octet 1 - 126, Note 127 is reserved for loopback
// Class B N.N.H.H  first Octet 128 - 191
// Class C N.N.N.H  first Octet 192 - 223
// Class D reserved for multicasting  224 - 239
// Class E experimental: used for reasearch 240 - 254
//
// Ip address in binary 10000011 01101011 00000001 00000001
// octet does not matter, we consider only N and H.
// 
// Rules
// ------
// H cannot be all binary 0s or binary 1s
// N cannot be all binary 0s or binary 1s
// N cannot be decimal 127 per octet? or just 1st octet
// IP addresses cannot be all binary 0s
// 224+ cannot be assigned in 1st octet
// http://www.2000trainers.com/cisco-ccna-05/ccna-ip-addressing-rules/
module.exports = 
function isValidIP(str) {
  // console.log(str);
  let strs = str.split('.');
  let numbers = strs.map(strNum => +strNum);

  if(!areNumbers(strs)){return false; }

  let sliceIndex;
  if(isClass('A',numbers)){
    sliceIndex = 1;
  } else if(isClass('B', numbers)){
    sliceIndex = 2;
  } else if(isClass('C', numbers)){
    sliceIndex = 3;
  }
  let H = numbers.slice(sliceIndex);
  let N = numbers.slice(0, sliceIndex);
  if(validHN(H, N)){
    return true;
  } 
  
  return false;
 

  function areNumbers(strs){
    let areNotChars = strs.every((numStr) => {
      if(
        isNaN(+numStr) ||
        numStr.split(' ').length > 1
      ){
        return false;
      } else {
        return true;
      }
    });
    if(!areNotChars){
      return false;
    }
    let leading = strs.some((numStr) => {
      let lead = true;
      for(let i = 0; i < numStr.length - 1; ++i){
        let char = numStr[i];
        if(char === '0' && lead === true){
          lead = true;
          break;
        } else {
          lead = false;
        }
      }
      if(numStr.length === 1){
        lead = false;
      }
      return lead;
    });

    if(leading){return false; }
    // if(+strs[0] === 127 || +strs[0] >= 224){return false; }
    // if(strs.every(numStr => +numStr === 0)){return false; }
    if(strs.length !== 4){return false; }
    if(strs.some(numStr => numStr.length > 3)){return false;}
    if(strs.some(numStr => +numStr > 255 || +numStr < 0)){return false;}

    return true;
  }


  function isClass(type, numbers){
    let num = numbers[0];
    if(num >= 1 && num <=126 && type === 'A'){
      return true;
    } else if(num >= 128 && num <=191 && type === 'B'){
      return true;
    } else if(num >= 192 && num <= 223 && type === 'C'){
      return true;
    } else {
      return false;
    }
  }
  function validHN(H, N){
    // if(H.every(num => num === 0)){return false; }
    // if(H.every(num => num === 255)) {return false;}
    // if(N.every(num => num === 0)) {return false;}
    // if(N.every(num => num === 255)){return false;}
    // if(N.every(num => num === 127)){return false;}
    return true;
  }
};