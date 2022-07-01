import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cl = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cl('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
