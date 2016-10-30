import templates from './templates';
import * as common from './common';

async function start() {
  do {
    console.log("===== New Task =====");
    let count = 1;
    for(let e of templates) {
      console.log(count + '. ' + e.text);
      count++;
    }

    let flag = false;
    do {
      try {
        let index = await common.getInput('Choose an operation');
      }catch(err) {
        return console.log(err);
      }
      if(/\d+/.test(index) && index >= 0 && index < templates.length) {
        flag = true;
        await templates[index].exec();
      }
    } while(!flag);
  } while(true);
}

start();
