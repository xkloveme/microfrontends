/*
 * @describe: 主程入口
 * @Author: superDragon
 * @Date: 2019-10-24 15:18:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-11-12 18:53:05
 */
import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
// import Vue from 'vue';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from '../../dist/index.esm';
import Framework from './Framework';
// import Framework from './Framework.vue';

let registerAPP = [
  { name: 'react app', entry: '//localhost:7100', render, activeRule: genActiveRule('/react') },
  { name: 'vue app', entry: '//localhost:7101', render, activeRule: genActiveRule('/vue') },
  { name: 'vuecli app', entry: '//localhost:7103', render, activeRule: genActiveRule('/vuecli') }
]
// let app = null
function render ({ appContent, loading }) {
  /*
  packages for vue
   */
  // if (!app) {
  //   window.onload = function () {
  //     app = new Vue({
  //       el: '#container',
  //       // render: h => h(Framework),
  //       components: { Framework },
  //       data: {
  //         content: appContent,
  //         loading
  //       },
  //       mounted () { console.log(this.content, 8) },
  //       render (h) {
  //         return h(Framework, {
  //           props: {
  //             content: this.content,
  //             loading: this.loading,
  //           },
  //         });
  //       },
  //     });
  //   }
  // } else {
  //   app.content = appContent;
  //   app.loading = loading;
  // }

  const container = document.getElementById('container');
  ReactDOM.render(<Framework loading={loading} content={appContent} />, container);
}

function genActiveRule (routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ loading: true });

// support custom fetch see: https://github.com/kuitos/import-html-entry/blob/91d542e936a74408c6c8cd1c9eebc5a9f83a8dc0/src/index.js#L163
const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });

registerMicroApps(
  registerAPP,
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  }
);

setDefaultMountApp('/react');
runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true, fetch: request });
