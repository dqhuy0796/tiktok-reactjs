import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FollowingIcon, HomeIcon, LivestreamIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('container')}>
            <div className={cx('main')}>
                <ul className={cx('list')}>
                    <li className={cx('item')}>
                        <NavLink className={cx('link', 'actived')} to={config.routes.home}>
                            <HomeIcon className={cx('icon')} />
                            <span className={cx('content')}>Dành cho bạn</span>
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('link', 'actived')} to={config.routes.following}>
                            <FollowingIcon className={cx('icon')} />
                            <span className={cx('content')}>Đang theo dõi</span>
                        </NavLink>
                    </li>
                    <li className={cx('item')}>
                        <NavLink className={cx('link', 'actived')} to={config.routes.live}>
                            <LivestreamIcon className={cx('icon')} />
                            <span className={cx('content')}>LIVE</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
