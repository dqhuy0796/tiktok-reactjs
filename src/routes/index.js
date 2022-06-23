// import layouts
import { HeaderOnly } from '../components/Layout';

// import components
import Home from '../page/Home';
import Following from '../page/Following';
import Upload from '../page/Upload';
import Profile from '../page/Profile';
import Login from '../page/Login';

// public routes for everyone
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/profile', component: Profile, layout: null },
    { path: '/login', component: Login, layout: null },
];

// private routes request login
const privateRoutes = [];
export { publicRoutes, privateRoutes };
