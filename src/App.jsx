import Header from './components/Header';
import TeachingSection from './components/TeachingSection';
import Favorites from './components/Favorites';


export default function App() {
	return (
		<div>
			<Header />

			<main>
				<TeachingSection />
				<Favorites />
			</main>
		</div>
	);
}
