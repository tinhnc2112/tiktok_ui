import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cl = classNames.bind(styles);

function Button({
    to,
    href,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passprops
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops,
    };
    const classes = cl('wrapper', {
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });
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
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cl('icon')}>{leftIcon}</span>}
            <span className={cl('title')}>{children}</span>
            {rightIcon && <span className={cl('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
