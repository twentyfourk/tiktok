import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './menuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ items = [], children, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                onBack={() => {
                                    setHistory((prev) => {
                                        return prev.slice(0, prev.length - 1);
                                    });
                                }}
                                title={current.title}
                            />
                        )}
                        {current.data.map((item, index) => {
                            const isChildren = !!item.children;
                            return (
                                <MenuItem
                                    key={index}
                                    data={item}
                                    onClick={() => {
                                        if (isChildren) {
                                            setHistory((prev) => [...prev, item.children]);
                                        } else {
                                            onChange(item);
                                        }
                                    }}
                                />
                            );
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
