import Header from '~/components/Layouts/components/Header';
import Sidebar from '~/components/Layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
