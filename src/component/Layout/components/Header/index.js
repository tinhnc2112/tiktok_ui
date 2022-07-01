import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles);
function Header() {
    return (
        <header className={cl('wrapper')}>
            <div className={cl('inner')}></div>
        </header>
    );
}

export default Header;
