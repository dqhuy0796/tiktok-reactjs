// import layouts
import { HeaderOnly } from '~/layouts';
import config from '~/config';

// import components
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import Search from '~/pages/Search';

// public routes for everyone
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile, layout: null },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.search, component: Search, layout: null },
];

// private routes request login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
