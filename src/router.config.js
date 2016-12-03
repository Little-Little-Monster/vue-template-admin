import App from './App';
import NotPage from 'dashborader/NotPage/NotPage.vue';
import Login from 'dashborader/login/login.vue';

import Hello from 'dashborader/hello/hello.vue';

export default function(router){
  router.map({
    '/login': { component: Login },
    '/hello': { component: Hello }
  });

  router.start(App, '#app');
}
