import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';

const cl = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });
    return (
        <header className={cl('wrapper')}>
            <div className={cl('inner')}>
                <div className={cl('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cl('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cl('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cl('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cl('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cl('loading')} />

                        <button className={cl('search-btn')}>
                            <img src={images.search} alt="search" />
                        </button>
                    </div>
                </Tippy>
                <div className={cl('action')}>
                    <Button text>
                        <FontAwesomeIcon icon={faPlus} />
                        Upload
                    </Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
