import styles from './Header.module.scss';
import images from '~/assets/images/index';
import Button from '~/components/Button';
import { Menu as MenuPopper } from '~/components/Popper';
import Image from '~/components/Image';
import Search from '../Search';

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faPlus,
    faCircleQuestion,
    faGlobe,
    faKeyboard,
    faCloudUpload,
    faPaperPlane,
    faMessage,
    faCoins,
    faGear,
    faCamera,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faGlobe} />,
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    { title: 'Feedback and helps', icon: <FontAwesomeIcon icon={faCircleQuestion} />, to: '/feedback' },
    { title: 'Keyboard shortcuts', icon: <FontAwesomeIcon icon={faKeyboard} /> },
];
const USER_MENU_ITEMS = [
    { title: 'View profile', icon: <FontAwesomeIcon icon={faUser} />, to: '/@reislin' },
    { title: 'Get coins', icon: <FontAwesomeIcon icon={faCoins} />, to: '/coin' },
    { title: 'Live studio', icon: <FontAwesomeIcon icon={faCamera} />, to: '/studio' },
    { title: 'Settings', icon: <FontAwesomeIcon icon={faGear} />, to: '/setting' },
    ...MENU_ITEMS,
    { title: 'Log out', icon: <FontAwesomeIcon icon={faSignOut} />, to: '/', separate: true },
];
const handleOnChange = (itemChange) => {
    switch (itemChange.type) {
        case 'language':
            //handleLanguageChange
            break;
        default:
    }
};
const currentUser = true;

function Header() {
    // const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 3000);
    // }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser === false ? (
                        <>
                            <Button upload>
                                <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} /> Upload
                            </Button>
                            <Button primary>Log in</Button>
                            <MenuPopper onChange={handleOnChange} items={MENU_ITEMS}>
                                <button className={cx('menu-btn')}>
                                    <FontAwesomeIcon className={cx('menu-icon')} icon={faEllipsisVertical} />
                                </button>
                            </MenuPopper>
                        </>
                    ) : (
                        <>
                            <Tippy content="Upload" placement="bottom">
                                <button className={cx('user-action')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom" delay={[0, 50]}>
                                <button className={cx('user-action')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx('user-action')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                            <MenuPopper items={USER_MENU_ITEMS}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://i0.wp.com/globalzonetoday.com/wp-content/uploads/2021/02/Little-Reislin.jpg?ssl=1"
                                    alt="Reislin"
                                />
                            </MenuPopper>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
