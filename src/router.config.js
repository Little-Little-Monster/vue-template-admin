import App from './App';
import Hello from 'components/hello/hello';
import Index from 'components/index/index';
import NotPage from 'components/NotPage/NotPage';

import Header from 'dashborader/header/header';
import Login from 'dashborader/login/login';

export default function(router){
  router.map({
    '/login': { component: Login },
    '/hello': { component: Hello },
    '/header': { component: Header },
    '/404': { component: NotPage }
  });

  router.start(App, '#app');
}
