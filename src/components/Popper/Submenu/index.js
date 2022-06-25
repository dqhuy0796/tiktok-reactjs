import styles from './Submenu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Submenu({ title, items = languages, onClickToGoBack }) {
    return (
        <div className={cx('container')}>
            <div className={cx('go-back')} onClick={onClickToGoBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <p className={cx('title')}>{title}</p>
            <ul className={cx('list')}>
                {items.map((item, index) => (
                    <li key={index} className={cx('item')}>
                        {item.language}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Submenu;

const languages = [
    { language: 'Tiếng Việt (Việt Nam)' },
    { language: 'العربية' },
    { language: 'বাঙ্গালি (ভারত)' },
    { language: 'Cebuano (Pilipinas)' },
    { language: 'Čeština (Česká republika)' },
    { language: 'Deutsch' },
    { language: 'Ελληνικά (Ελλάδα)' },
    { language: 'English' },
    { language: 'Español' },
    { language: 'Suomi (Suomi)' },
    { language: 'Filipino (Pilipinas)' },
    { language: 'Français' },
    { language: 'עברית (ישראל)' },
    { language: 'हिंदी' },
    { language: 'Magyar (Magyarország)' },
    { language: 'Bahasa Indonesia (Indonesia)' },
    { language: 'Italiano (Italia)' },
    { language: '日本語（日本）' },
    { language: 'Basa Jawa (Indonesia)' },
    { language: 'ខ្មែរ (កម្ពុជា)' },
    { language: '한국어 (대한민국)' },
    { language: 'Bahasa Melayu (Malaysia)' },
    { language: 'မြန်မာ (မြန်မာ)' },
    { language: 'Nederlands (Nederland)' },
    { language: 'Polski (Polska)' },
    { language: 'Português (Brasil)' },
    { language: 'Română (Romania)' },
    { language: 'Русский (Россия)' },
    { language: 'Svenska (Sverige)' },
    { language: 'ไทย (ไทย)' },
    { language: 'Türkçe (Türkiye)' },
    { language: 'Українська (Україна)' },
    { language: 'اردو' },
    { language: '简体中文' },
    { language: '繁體中文' },
];
