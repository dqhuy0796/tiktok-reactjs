import { faCircleNotch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { SearchIcon } from '../../../Icons';
import UserLink from '../../../UserLink';
import styles from './SearchMachine.module.scss';
import useDebounce from '../../../../hook/useDebounce';
import { search as searchService } from '../../../../apiServices/searchService';
import axios from 'axios';

const cx = classNames.bind(styles);

function SearchMachine() {
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchResultShow, setIsSearchResultShow] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const SearchInputRef = useRef();

    const searchDebounced = useDebounce(searchString, 600);

    const fetchApi = async () => {
        setIsLoading(true);
        const result = await searchService(searchDebounced);
        setSearchResults(result);
        setIsLoading(false);
    };

    useEffect(() => {
        if (!searchDebounced.trim()) {
            setSearchResults([]);
            return;
        }
        fetchApi();
    }, [searchDebounced]);

    const handleClearSearchInput = () => {
        setSearchString('');
        SearchInputRef.current.focus();
    };

    const handleHideSearchResult = () => {
        setIsSearchResultShow(false);
    };

    return (
        <div>
            <Tippy
                delay={[0, 300]}
                interactive={true}
                placement="bottom"
                visible={isSearchResultShow && searchResults.length > 0 && searchString.length > 0}
                render={(attrs) => (
                    <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                        {searchResults.length > 0 &&
                            searchResults.map((result) => (
                                <Link key={result.id} to={'./search'} className={cx('result')}>
                                    <SearchIcon className={cx('icon')} />
                                    <span>{result.full_name}</span>
                                </Link>
                            ))}

                        {/* acount container */}
                        <h4 className={cx('subtitle')}>Tài khoản</h4>

                        {searchResults.length > 0 &&
                            searchResults.map((result) => <UserLink key={result.id} props={result} />)}

                        <Link to={'./search'} className={cx('link-to-search')}>
                            Xem tất cả kết quả dành cho "{searchString}"
                        </Link>
                    </div>
                )}
                onClickOutside={handleHideSearchResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={SearchInputRef}
                        className={cx('search-box')}
                        type="text"
                        placeholder="tìm kiếm tài khoản và video"
                        value={searchString}
                        spellCheck={false}
                        onChange={(e) => setSearchString(e.target.value)}
                        onFocus={() => setIsSearchResultShow(true)}
                    />
                    {!!searchString && !isLoading && (
                        <button className={cx('clear')} onClick={handleClearSearchInput}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {isLoading && (
                        <div className={cx('loading')}>
                            <FontAwesomeIcon icon={faCircleNotch} />
                        </div>
                    )}
                    <button className={cx('search-btn')}>
                        <SearchIcon className={cx('icon')} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default SearchMachine;
