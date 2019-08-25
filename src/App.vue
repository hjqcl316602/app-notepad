<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 21:56:40
 * @LastEditTime: 2019-08-25 10:25:57
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div>
      <vui-grail>
        <div>
          dsdkls第三库的就开始了dsdkls第三库的就开始了dsdkls第三库的就开始了dsdkls第三库的就开始了dsdkls第三库的就开始了dsdkls第三库的就开始了dsdkls第三库的就开始了
        </div>
        <vui-grail-child type="top-center" padding-width padding-height>
          <div>手动阀弗兰克斯</div>
        </vui-grail-child>
      </vui-grail>
    </div>
    <router-view />
  </div>
</template>


<script>
import Vue from "vue";
import * as UI from "store-vue-ui";
import request from "./request/index";
Vue.use(UI.Grail).use(UI.Grail.Child);
console.log(UI);
export default {
  name: "App",
  mounted() {},
  methods: {}
};
</script>

<style>
</style>



