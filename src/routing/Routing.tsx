import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetailsPage from '../ui/pages/UserDetailsPage';
import RelativesDetailsPage from '../ui/pages/RelativesDetailsPage';

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<UserDetailsPage />} />
				<Route path="relatives" element={<RelativesDetailsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
