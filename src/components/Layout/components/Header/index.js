import { faEllipsisVertical, faGlobe, faKeyboard, faPlus, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { RectLogo } from '../../../Logo';
import MyButton from '../../../MyButton';
import Menu from '../../../Popper/Menu';
import SearchMachine from '../SearchMachine';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        content: 'Tiếng Việt',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        content: 'Phản hồi và trợ giúp',
        to: './upload',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        content: 'Phím tắt bàn phím',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <RectLogo />
                </div>

                <SearchMachine />

                <div className={cx('action')}>
                    <MyButton to="./upload">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Tải lên</span>
                    </MyButton>

                    <MyButton primary to="./login">
                        <span>Đăng nhập</span>
                    </MyButton>

                    <Menu items={MENU_ITEMS}>
                        <div className={cx('option')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
