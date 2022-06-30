import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './UserLink.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function UserLink({ props }) {
    return (
        <Link to={`/@${props.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={props.avatar} alt={props.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{props.full_name}</span>
                    {props.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('desc')}>{props.nickname}</p>
            </div>
        </Link>
    );
}
UserLink.propTypes = {
    props: PropTypes.object,
};
export default UserLink;
