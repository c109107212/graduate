import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/1.HomePage/HomePage';
import NotFound from './views/404';
import MainLayout from './views/MainLayout';

import BrowsePage from './views/3.BrowsePage/BrowsePage';
import SearchPage from './views/2.SearchPage/SearchPage';
import ClustersPage from './views/4.ClustersPage/ClustersPage';
import PredictionPage from './views/6.PredictionPage/PredictionPage';
import ContactsPage from './views/7.ContactsPage/ContactsPage';
import HelpPage from './views/8.HelpPage/HelpPage';

const routeComponents = {
  Search: SearchPage,
  Browse: BrowsePage,
  Clusters: ClustersPage,
  Prediction: PredictionPage,
  Contacts: ContactsPage,
  Help: HelpPage
};

const MainRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    {Object.entries(routeComponents).map(([path, Component]) => (
                        <Route key={path} path={`/${path}`} element={<Component />} />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default MainRoute;
