/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 23:55:30
 * @LastEditTime: 2019-08-25 10:51:04
 * @LastEditors: Please set LastEditors
 */
import axios from './instance';
axios({
  method: 'post',
  url: '/apis/consume-type/del',
  data: {
    name: '理财'
  }
}).then(res => {
  console.log(res);
});
console.log(axios);
