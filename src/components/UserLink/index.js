import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './UserLink.module.scss';

const cx = classNames.bind(styles);

function UserLink({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://vnn-imgs-f.vgcloud.vn/2022/03/18/12/lisa-blackpink-vuong-vao-vu-dieu-tra-pham-luat-o-thai-lan.jpeg?width=420"
                alt="avatar"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('desc')}>nguyenvanaaaaa</p>
            </div>
        </div>
    );
}

export default UserLink;
