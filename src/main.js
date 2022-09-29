import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Button } from "vant";
import "vant/lib/index.css"; // 全局引入样式
import "amfe-flexible";
import "./index.css";
import "./assets/less/app.less"; // 全局引入less样式

const app = createApp(App);
app.use(router);
app.use(Button); // 注册vant组件

app.mount("#app");
