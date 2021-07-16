import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 先导入库
// import { Topology, Options, registerNode } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
import { register as registerChart } from '@topology/chart-diagram';

Vue.config.productionTip = false;
// 注册图形库
// canvasRegister(); 
{
    registerFlow();
    registerActivity();
    registerClass();
    registerSequence();
    registerChart();
    // ... 其他图形库
}
// canvasRegister();

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");