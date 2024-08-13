import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/2.HomePage/HomePage';
import NotFound from './views/404';
import MainLayout from './views/MainLayout';

import BrowsePage from './views/3.BrowsePage/BrowsePage';
import SearchPage from './views/4.SearchPage/SearchPage';
import PredictionPage from './views/6.PredictionPage/PredictionPage';
import ContactsPage from './views/7.ContactsPage/ContactsPage';
import HelpPage from './views/8.HelpPage/HelpPage';
import SearchAns from './views/4.SearchPage/searchans';
import DataInformation from './views/data_Infomation/data_Infomation';
import SvmPage from './views/6.PredictionPage/svm';
import SvmAns from './views/6.PredictionPage/SvmAns';
import HMMAns from './views/6.PredictionPage/HMMAns';
import HMMPage from './views/6.PredictionPage/HMM';
import StartPage from './views/1.StartPage/StartPage';
const routeComponents = {
    Search: SearchPage,
    Browse: BrowsePage,
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
                    <Route path={`/Search/SearchAns`} element={<SearchAns />} />
                    <Route path="/Search/SearchAns/:id" element={<DataInformation />} />
                    <Route path="/Prediction/svm" element={<SvmPage />} />
                    <Route path="/Prediction/svm/SvmAns" element={<SvmAns />} />
                    
                    <Route path="/Prediction/HMM" element={<HMMPage />} />
                    <Route path="/Prediction/HMM/HMMAns" element={<HMMAns />} />

                </Route>

                <Route path="/start" element={<StartPage />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default MainRoute;
