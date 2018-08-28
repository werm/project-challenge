import Home from '../components/Home';
import Dog from "../components/dog/Show";

const routes = [
  { path: '/', component: Home },
  {
    path: '/dog/:id',
    name: 'ShowDog',
    component: Dog
  }
];

export default routes;