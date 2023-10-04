const process = require ('process');
const { Z_ASCII } = require ('zlib');
const commands = require ('./commands/index.js');


const print= (output)=>{
   process.stdout.write(output)
   process.stdout.write("\nprompt > ")
}
const bash=()=> {
   process.stdout.write("prompt > ")
   process.stdin.on("data",  (data)=>{
      const args = data.toString().trim().split(' ');
      const cmd = args.shift();
      if(!commands[cmd]){
         print(`command not found: ${cmd}`);
      }else{
        commands[cmd](print, args.join(' '));
      }
   });
   
}


bash();
module.exports = {
   print,
   bash,
};
