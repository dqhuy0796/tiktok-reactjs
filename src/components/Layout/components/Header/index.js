import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import React, { useEffect, useState } from 'react';
import {
    GetCoinIcon,
    HelpIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingIcon,
} from '~/components/Icons';
import SearchMachine from '~/components/Layout/components/SearchMachine';
import { RectLogo } from '~/components/Logo';
import MyButton from '~/components/MyButton';
import DropdownMenu from '~/components/Popper/DropdownMenu';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import configRoutes from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        id: 1,
        icon: <LanguageIcon />,
        content: 'Tiếng Việt',
        title: 'Ngôn ngữ',
        children: {
            data: [
                {
                    id: 1,
                    type: 'language',
                    content: 'Tiếng Việt',
                    title: 'Ngôn ngữ',
                    encode: 'VN-vi',
                },
                {
                    id: 2,
                    type: 'language',
                    content: 'English',
                    title: 'Language',
                    encode: 'EN-en',
                },
                {
                    id: 3,
                    type: 'language',
                    content: 'Bahasa (Indonesia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 4,
                    type: 'language',
                    content: 'Bahasa (Indonesia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 5,
                    type: 'language',
                    content: 'العربية',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 6,
                    type: 'language',
                    content: 'বাঙ্গালি (ভারত)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 7,
                    type: 'language',
                    content: 'Cebuano (Pilipinas)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 8,
                    type: 'language',
                    content: 'Čeština (Česká republika)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 9,
                    type: 'language',
                    content: 'Deutsch',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 10,
                    type: 'language',
                    content: 'Ελληνικά (Ελλάδα)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 11,
                    type: 'language',
                    content: 'Español',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 12,
                    type: 'language',
                    content: 'Suomi (Suomi)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 13,
                    type: 'language',
                    content: 'Filipino (Pilipinas)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 14,
                    type: 'language',
                    content: 'Français',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 15,
                    type: 'language',
                    content: 'עברית (ישראל)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 16,
                    type: 'language',
                    content: 'हिंदी',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 17,
                    type: 'language',
                    content: 'Magyar (Magyarország)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 18,
                    type: 'language',
                    content: 'Italiano (Italia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 19,
                    type: 'language',
                    content: '日本語（日本）',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 20,
                    type: 'language',
                    content: 'Basa Jawa (Indonesia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 21,
                    type: 'language',
                    content: 'ខ្មែរ (កម្ពុជា)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 22,
                    type: 'language',
                    content: '한국어 (대한민국)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 23,
                    type: 'language',
                    content: 'Bahasa Melayu (Malaysia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 24,
                    type: 'language',
                    content: 'မြန်မာ (မြန်မာ)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 25,
                    type: 'language',
                    content: 'Nederlands (Nederland)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 26,
                    type: 'language',
                    content: 'Polski (Polska)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 27,
                    type: 'language',
                    content: 'Português (Brasil)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 28,
                    type: 'language',
                    content: 'Română (Romania)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 29,
                    type: 'language',
                    content: 'Русский (Россия)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 30,
                    type: 'language',
                    content: 'Svenska (Sverige)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 31,
                    type: 'language',
                    content: 'ไทย (ไทย)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 32,
                    type: 'language',
                    content: 'Türkçe (Türkiye)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 33,
                    type: 'language',
                    content: 'Українська (Україна)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 34,
                    type: 'language',
                    content: 'اردو',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 35,
                    type: 'language',
                    content: '简体中文',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 36,
                    type: 'language',
                    content: '繁體中文',
                    title: 'Unknown',
                    encode: 'unknown',
                },
            ],
        },
    },
    {
        id: 2,
        icon: <HelpIcon />,
        content: 'Phản hồi và trợ giúp',
        to: './upload',
    },
    {
        id: 3,
        icon: <KeyboardIcon />,
        content: 'Phím tắt bàn phím',
    },
];

const USER_ITEMS = [
    {
        id: 1,
        icon: <ProfileIcon />,
        content: 'Xem hồ sơ',
        to: './profile',
    },
    {
        id: 2,
        icon: <GetCoinIcon />,
        content: 'Nhận xu',
        to: './getcoin',
    },
    {
        id: 3,
        icon: <SettingIcon />,
        content: 'Cài đặt',
        to: './setting',
    },
    {
        id: 4,
        icon: <LanguageIcon />,
        content: 'Tiếng Việt',
        title: 'Ngôn ngữ',
        children: {
            data: [
                {
                    id: 1,
                    type: 'language',
                    content: 'Tiếng Việt',
                    title: 'Ngôn ngữ',
                    encode: 'VN-vi',
                },
                {
                    id: 2,
                    type: 'language',
                    content: 'English',
                    title: 'Language',
                    encode: 'EN-en',
                },
                {
                    id: 3,
                    type: 'language',
                    content: 'Bahasa (Indonesia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 4,
                    type: 'language',
                    content: 'Bahasa (Indonesia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 5,
                    type: 'language',
                    content: 'العربية',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 6,
                    type: 'language',
                    content: 'বাঙ্গালি (ভারত)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 7,
                    type: 'language',
                    content: 'Cebuano (Pilipinas)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 8,
                    type: 'language',
                    content: 'Čeština (Česká republika)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 9,
                    type: 'language',
                    content: 'Deutsch',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 10,
                    type: 'language',
                    content: 'Ελληνικά (Ελλάδα)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 11,
                    type: 'language',
                    content: 'Español',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 12,
                    type: 'language',
                    content: 'Suomi (Suomi)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 13,
                    type: 'language',
                    content: 'Filipino (Pilipinas)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 14,
                    type: 'language',
                    content: 'Français',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 15,
                    type: 'language',
                    content: 'עברית (ישראל)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 16,
                    type: 'language',
                    content: 'हिंदी',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 17,
                    type: 'language',
                    content: 'Magyar (Magyarország)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 18,
                    type: 'language',
                    content: 'Italiano (Italia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 19,
                    type: 'language',
                    content: '日本語（日本）',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 20,
                    type: 'language',
                    content: 'Basa Jawa (Indonesia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 21,
                    type: 'language',
                    content: 'ខ្មែរ (កម្ពុជា)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 22,
                    type: 'language',
                    content: '한국어 (대한민국)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 23,
                    type: 'language',
                    content: 'Bahasa Melayu (Malaysia)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 24,
                    type: 'language',
                    content: 'မြန်မာ (မြန်မာ)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 25,
                    type: 'language',
                    content: 'Nederlands (Nederland)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 26,
                    type: 'language',
                    content: 'Polski (Polska)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 27,
                    type: 'language',
                    content: 'Português (Brasil)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 28,
                    type: 'language',
                    content: 'Română (Romania)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 29,
                    type: 'language',
                    content: 'Русский (Россия)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 30,
                    type: 'language',
                    content: 'Svenska (Sverige)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 31,
                    type: 'language',
                    content: 'ไทย (ไทย)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 32,
                    type: 'language',
                    content: 'Türkçe (Türkiye)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 33,
                    type: 'language',
                    content: 'Українська (Україна)',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 34,
                    type: 'language',
                    content: 'اردو',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 35,
                    type: 'language',
                    content: '简体中文',
                    title: 'Unknown',
                    encode: 'unknown',
                },
                {
                    id: 36,
                    type: 'language',
                    content: '繁體中文',
                    title: 'Unknown',
                    encode: 'unknown',
                },
            ],
        },
    },
    {
        id: 5,
        icon: <HelpIcon />,
        content: 'Phản hồi và trợ giúp',
        to: './upload',
    },
    {
        id: 6,
        icon: <KeyboardIcon />,
        content: 'Phím tắt bàn phím',
    },
    {
        id: 7,
        icon: <LogoutIcon />,
        content: 'Đăng xuất',
    },
];

const handleMenuChange = (item) => {
    switch (item.type) {
        case 'language':
            // Handle change language
            break;
        default:
    }
};

function Header() {
    const userLogin = true;

    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setStickyClass('sticky') : setStickyClass('');
        }
    };

    return (
        <header className={cx('wrapper', stickyClass)}>
            <div className={cx('inner')}>
                <Link to={configRoutes.home} className={cx('logo')}>
                    <RectLogo />
                </Link>

                <SearchMachine />

                <div className={cx('action')}>
                    <MyButton text basic textcenter to="./upload" lefticon={<FontAwesomeIcon icon={faPlus} />}>
                        <span>Tải lên</span>
                    </MyButton>

                    {userLogin ? (
                        <React.Fragment>
                            <Tippy content="Tin nhắn">
                                <MyButton className={cx('message-btn')}>
                                    <MessageIcon />
                                </MyButton>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <MyButton className={cx('inbox-btn')}>
                                    <InboxIcon />
                                </MyButton>
                            </Tippy>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <MyButton text primary textcenter to="./login">
                                <span>Đăng nhập</span>
                            </MyButton>
                        </React.Fragment>
                    )}

                    <DropdownMenu
                        menuItems={userLogin ? USER_ITEMS : MENU_ITEMS}
                        hideOnClick={false}
                        onChange={handleMenuChange}
                    >
                        {userLogin ? (
                            <div className={cx('avatar')}>
                                <img
                                    src="https://kenh14cdn.com/203336854389633024/2022/2/15/photo-1-1644913672104135921901.jpg"
                                    alt="username"
                                />
                            </div>
                        ) : (
                            <div className={cx('option')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
