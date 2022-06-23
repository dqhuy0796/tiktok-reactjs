import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Suggestion.module.scss';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserLink from '../../UserLink';

const cx = classNames.bind(styles);

function Suggestion({ children, keyword }) {
    return (
        <Tippy
            interactive={true}
            placement="bottom"
            visible={keyword.length > 0}
            render={(attrs) => (
                <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 1</span>
                    </Link>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 2</span>
                    </Link>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 3</span>
                    </Link>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 4</span>
                    </Link>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 5</span>
                    </Link>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 6</span>
                    </Link>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 7</span>
                    </Link>
                    <Link to={'./search'} className={cx('result')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                        <span>"{keyword}" kết quả tìm kiếm 8</span>
                    </Link>
                    <h4 className={cx('subtitle')}>Tài khoản</h4>
                    <UserLink />
                    <UserLink />
                    <UserLink />
                    <UserLink />
                    <UserLink />
                    <Link to={'./search'} className={cx('link-to-search')}>
                        Xem tất cả kết quả dành cho "{keyword}"
                    </Link>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Suggestion;
