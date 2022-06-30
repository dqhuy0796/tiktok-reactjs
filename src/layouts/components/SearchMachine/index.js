// Global
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// Local
import { search as searchService } from '~/services/searchService';
import { SearchIcon } from '~/components/Icons';
import UserLink from '~/components/UserLink';
import useDebounce from '~/hook/useDebounce';
import styles from './SearchMachine.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function SearchMachine() {
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchResultShow, setIsSearchResultShow] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const SearchInputRef = useRef();

    const searchDebounced = useDebounce(searchString, 600);

    useEffect(() => {
        if (!searchDebounced.trim()) {
            setSearchResults([]);
            return;
        }
        const fetchApi = async () => {
            setIsLoading(true);
            const result = await searchService(searchDebounced);
            setSearchResults(result);
            setIsLoading(false);
        };
        fetchApi();
    }, [searchDebounced]);

    const handleClearSearchInput = () => {
        setSearchString('');
        SearchInputRef.current.focus();
    };

    const handleSearchStringChange = (e) => {
        const searchStringValue = e.target.value;
        if (!searchStringValue.startsWith(' ')) {
            setSearchString(searchStringValue);
        }
    };

    const handleHideSearchResult = () => {
        setIsSearchResultShow(false);
    };

    return (
        <div>
            <Tippy
                delay={[0, 300]}
                interactive
                placement="bottom"
                visible={isSearchResultShow && searchResults.length > 0 && searchString.length > 0}
                render={(attrs) => (
                    <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
                        {searchResults.length > 0 &&
                            searchResults.map((result) => (
                                <Link key={result.id} to={config.routes.search} className={cx('result')}>
                                    <SearchIcon className={cx('icon')} />
                                    <span>{result.full_name}</span>
                                </Link>
                            ))}

                        {/* acount container */}

                        {searchResults.length > 0 && (
                            <>
                                <h4 className={cx('subtitle')}>Tài khoản</h4>
                                {searchResults.map((result) => (
                                    <UserLink key={result.id} props={result} />
                                ))}
                            </>
                        )}

                        <Link to={config.routes.search} className={cx('link-to-search')}>
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
                        onChange={handleSearchStringChange}
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
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('icon')} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default SearchMachine;
