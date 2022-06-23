import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    return (
        <Tippy
            interactive={true}
            delay={[0, 300]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-container')} tabIndex="-1" {...attrs}>
                    <ul className={cx('menu-list')}>
                        {items.map((item, index) => (
                            <li key={index} className={cx('menu-item')}>
                                {item.icon}
                                <span className={cx('content')}>{item.content}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
