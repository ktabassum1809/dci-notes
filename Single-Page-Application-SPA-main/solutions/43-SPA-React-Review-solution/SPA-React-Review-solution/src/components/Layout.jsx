import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '1rem' }}>
                <Link to='/'>Home</Link>
                <Link to='contact'>Contact</Link>
                <Link to='friends'>friends</Link>
            </nav>
            <h1>React Review</h1>

            <Outlet />
        </div>
    );
};
export default Layout;
