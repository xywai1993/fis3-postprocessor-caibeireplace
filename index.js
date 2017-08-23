'use strict';
module.exports = function(content, file, settings){
    let result = content ,now = '' ,regs =settings.reg ;
    for (let i = 0; i < regs.length; i++) {
      console.log(regs[i].re,regs[i].replace);
      now = result.replace(regs[i].re,regs[i].replace)
      result = now ;
    }
  //  var aa = content.replace(/__Url__/g,settings.url)
     return result ;
}
