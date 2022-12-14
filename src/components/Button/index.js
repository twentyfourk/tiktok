import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    disabled = false,
    small = false,
    large = false,
    upload = false,
    rounded = false,
    getApp = false,
    menu = false,
    startContent = false,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        startContent,
        disabled,
        primary,
        menu,
        outline,
        small,
        large,
        upload,
        rounded,
        getApp,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
