// import layouts
import { HeaderOnly } from '~/components/Layout';
import configRoutes from '~/config/routes';

// import components
import Home from '~/page/Home';
import Following from '~/page/Following';
import Upload from '~/page/Upload';
import Profile from '~/page/Profile';
import Login from '~/page/Login';

// public routes for everyone
const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.following, component: Following },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: configRoutes.profile, component: Profile, layout: null },
    { path: configRoutes.login, component: Login, layout: null },
];

// private routes request login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
