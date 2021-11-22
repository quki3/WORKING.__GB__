//SERVIDOR CON EXPRESS
import app from './app';


const chalk = require('chalk');

async function main(){
  await app.listen(3000);
  console.log(chalk.yellow.bold(`
  //                       _oo0oo_
  //                      o8888888o
  //                      88" . "88
  //                      (| -_- |)
  //                      0|  =  /0
  //                    ___/'---'|___
  //                  .' |||     |// '.
  //                 / |||||  :  |||// |
  //                / _||||| -:- |||||- ||
  //               |   | |||  -  /// |   |
  //               | |_|  ''|---/''  |_/ |
  //               |  .-|__  '-'  ___/-. /
  //             ___'. .'  /--.--|  '. .'___
  //          ."" '<  '.___|_<|>_/___.' >' "".
  //         | | :  '- |'.;'| _ /';.'/ - ' : | |
  //         |  | '_.   |_ __| /__ _/   .-' /  /
  //     ====='-.____'.___ |_____/___.-'___.-'=====
  //                       '=---='
  //     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  `));
  console.log(chalk.black.bgGreen.bold(`Server running at port 3000`));
}
main()




// SERVIDOR HTTP
/*import http from 'http';

const chalk = require('chalk');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Quki \n');
}).listen(1337, '127.0.0.1');

console.log(chalk.yellow.bold(`
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0|  =  /0
//                    ___/'---'|___
//                  .' |||     |// '.
//                 / |||||  :  |||// |
//                / _||||| -:- |||||- ||
//               |   | |||  -  /// |   |
//               | |_|  ''|---/''  |_/ |
//               |  .-|__  '-'  ___/-. /
//             ___'. .'  /--.--|  '. .'___
//          ."" '<  '.___|_<|>_/___.' >' "".
//         | | :  '- |'.;'| _ /';.'/ - ' : | |
//         |  | '_.   |_ __| /__ _/   .-' /  /
//     ====='-.____'.___ |_____/___.-'___.-'=====
//                       '=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`));
console.log(chalk.black.bgGreen.bold(`Server running at http://127.0.0.1:1337/`));


export default server;*/
