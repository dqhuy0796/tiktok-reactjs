import styles from './DropdownMenu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import DropdownItem from '../DropdownItem/DropdownItem';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const stupidSolution = () => {};

function DropdownMenu({ children, menuItems = {}, hideOnClick = true, onChange = stupidSolution }) {
    // push menu api to an array of object and get the last one to render
    const [prevValue, setPrevValue] = useState([{ data: menuItems }]);
    const currentValue = prevValue[prevValue.length - 1];

    const [submenuTitle, setSubmenuTitle] = useState(['']);
    const currentTitle = submenuTitle[submenuTitle.length - 1];

    const renderItems = () => {
        return currentValue.data.map((item) => {
            // check (convert to boolean) if item has children then to do ...
            const isParent = !!item.children;

            return (
                <DropdownItem
                    key={item.id}
                    data={item}
                    // onclick thì kiểm tra nếu nó có con thì set lại thằng trước nó là nó và tiến vào thằng con của nó
                    onClick={() => {
                        if (isParent) {
                            setSubmenuTitle((prev) => [...prev, item.title]);
                            setPrevValue((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleReset = () => {
        setSubmenuTitle((prev) => prev.slice(0, 1));
        setPrevValue((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[0, 300]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('container')} tabIndex="-1" {...attrs}>
                    {/* if this target item has prop: children then render this */}
                    {prevValue.length > 1 && (
                        <>
                            <button
                                className={cx('back-btn')}
                                onClick={() => {
                                    setSubmenuTitle((prev) => prev.slice(0, prev.length - 1));
                                    setPrevValue((prev) => prev.slice(0, prev.length - 1));
                                }}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <h2 className={cx('title')}>{currentTitle}</h2>
                        </>
                    )}
                    {/* render items in same level */}
                    <ul className={cx('list')}>{renderItems()}</ul>
                </div>
            )}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

export default DropdownMenu;
