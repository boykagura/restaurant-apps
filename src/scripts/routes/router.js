import resto from '../views/pages/restaurant';
import homepage from '../views/pages/main';
import detail from '../views/pages/detail';

const routes = {
  '/': homepage,
  '/restaurant': resto,
  '/detail/:id': detail,
};

export default routes;