import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <header>
                <NavTabs />
            </header>

            <main>
                <Outlet />
            </main>

            <footer >
                <Footer />
            </footer>
        </div>
    )
}

export default App;