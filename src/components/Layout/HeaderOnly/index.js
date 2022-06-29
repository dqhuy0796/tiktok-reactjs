import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    );
}

export default HeaderOnly;
