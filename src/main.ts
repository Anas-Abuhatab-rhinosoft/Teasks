import {createApp} from 'vue'
import router from './router'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from './App.vue';

const app = createApp(App)
app.use(router)
library.add(fas, far, fab)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
