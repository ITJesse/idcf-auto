import * as common from '../common';

async function create() {
  try {
    let result = await common.api('listZones', {});
    let count = 1;
    for(let e of result.listzonesresponse.zone) {
      // console.log(e);
      console.log(count + '. ' + e.name);
      count++;
    }
    let index = await common.getInput('Select Zone');
  }catch(err) {
    return console.log(err);
  }
}

export default create;
