import styles from './MyButton.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function MyButton({
    to,
    href,
    onClick,
    children,
    disabled,
    primary = false,
    secondary = false,
    small = false,
    medium = false,
    large = false,
    ...props
}) {
    const classes = cx('wrapper', { primary, secondary, disabled, small, medium, large });
    let Comp = 'button';
    const btnProps = {
        onClick,
        ...props,
    };

    if (to) {
        btnProps.to = to;
        Comp = Link;
    } else if (href) {
        btnProps.href = href;
        Comp = 'a';
    } else if (disabled) {
        delete btnProps.onClick;
    }

    return (
        <Comp className={classes} {...btnProps}>
            <span>{children}</span>
        </Comp>
    );
}

export default MyButton;
