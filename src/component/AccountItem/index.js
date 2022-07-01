import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cl('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a9d39a8f7e0506f2a4358c21a9752aca.jpeg?x-expires=1656831600&x-signature=FZy7MAFoAP40ndArj97PgD2gUT4%3D"
                alt="Hoaa"
                className={cl('avatar')}
            />
            <div className={cl('info')}>
                <h4 className={cl('name')}>
                    <span>Ha Kieu</span>
                    <FontAwesomeIcon className={cl('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cl('username')}>hakieu</span>
            </div>
        </div>
    );
}

export default AccountItem;
