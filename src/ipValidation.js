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
  let numbers = str.split('.').map((strNum) => {
    return +strNum;
  });
  if(!areNumbers(str)){
    return false;
  }

  if(isClassA(str)){
    let H = numbers.slice(1);
    let N = numbers.slice(0, 1);
    if(validHN(H, N)){
      return true;
    }
  } else if(isClassB(str)){
    let H = numbers.slice(2);
    let N = numbers.slice(0, 2);
    if(validHN(H, N)){
      return true;
    }
  } else if(isClassC(str)){
    let H = numbers.slice(3);
    let N = numbers.slice(0, 3);
    if(validHN(H, N)){
      return true;
    }
  }
  return false;

  function areNumbers(str){
    let strs = str.split('.');
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


  function isClassA(str){
    let num = +str.split('.')[0];
    return num >= 0 && num <=126 ? true : false;
  }

  function isClassB(str){
    let num = +str.split('.')[0];
    return num >= 128 && num <=191 ? true : false;
  }

  function isClassC(str){
    let num = +str.split('.')[0];
    return num >= 192 && num <= 255 ? true : false;
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