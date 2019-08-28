/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 23:55:30
 * @LastEditTime: 2019-08-28 22:02:38
 * @LastEditors: Please set LastEditors
 */
import axios from './instance';
axios({
  method: 'post',
  url: 'http://localhost:8888/consume-type/login'
}).then(res => {
  console.log(res);
});
console.log(axios);

setTimeout(() => {
  axios({
    method: 'post',
    url: 'http://localhost:8888/consume-type/query'
  }).then(res => {
    console.log(res);
  });
}, 2000);
