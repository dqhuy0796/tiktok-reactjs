import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    );
}

export default HeaderOnly;
