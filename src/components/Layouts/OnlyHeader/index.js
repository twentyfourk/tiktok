import Header from '~/components/Layouts/components/Header';

function OnlyHeader({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default OnlyHeader;
