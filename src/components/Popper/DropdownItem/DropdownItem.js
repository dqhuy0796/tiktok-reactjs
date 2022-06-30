import classNames from 'classnames/bind';
import MyButton from '../../MyButton/MyButton';
import styles from './DropdownItem.module.scss';

const cx = classNames.bind(styles);

function DropdownItem({ data, onClick }) {
    return (
        <li className={cx('item')}>
            <MyButton onClick={onClick} to={data.to} lefticon={data.icon}>
                {data.content}
            </MyButton>
        </li>
    );
}

export default DropdownItem;
