import idcf from 'idcf-cloud-api';
import prompt from 'prompt';

const client = idcf({
  endpoint: 'https://compute.jp-east.idcfcloud.com/client/api',
  apiKey: 'lfind_iiTdDYLL_c5LvcwmlJxo1qmguuV9YO4WMf5rLNiD7IsHDMf6nMlmyXMPGqVhKIlxcjWtutI_HPRcKXsQ',
  secretKey: 'NG_lsYgaTm1P_QCUmbnlFTknmPlibKkiCF8DLVOjLxUTJ7g8BP_NPL9XHKH67HgTNWd7TFMNFZRwwbGeXTDd7g'
});

export function api(type, options) {
  return new Promise((resolve, reject) => {
    client.request(type, options)
      .then((result) => {
        return result.toJSON();
      })
      .then((result) => {
        return resolve(result.body);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export function getInput(text) {
  return new Promise((resolve, reject) => {
    prompt.start();
    prompt.get([text], function(err, result) {
      if (err) {
        return reject(err);
      } else {
        let index = result[text] - 1;
        return resolve(index);
      }
    });
  });
}
