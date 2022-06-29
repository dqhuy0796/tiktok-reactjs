import styles from './MyButton.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function MyButton({
    className,
    to,
    href,
    onClick,
    children,
    disabled,
    text = false,
    basic = false,
    primary = false,
    secondary = false,
    small = false,
    medium = false,
    large = false,
    textcenter = false,
    lefticon,
    righticon,
    ...props
}) {
    const classes = cx('wrapper', {
        [className]: className,
        text,
        basic,
        primary,
        secondary,
        disabled,
        small,
        medium,
        large,
        textcenter,
    });

    const btnProps = {
        onClick,
        ...props,
    };

    // Remove event listener when disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') delete props[key];
        });
    }

    let Comp = 'button';

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
            {lefticon}
            {children}
            {righticon}
        </Comp>
    );
}

export default MyButton;
