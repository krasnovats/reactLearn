import Header from './components/Header';
import { ways } from './data';
import WayToTeach from './components/WayToTeach';


export default function App() {
	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Первый абзац</h3>
					<ul>
						{ways.map((way,index) => (
              <WayToTeach key={index} {...way} />
            ))}

					</ul>
				</section>
			</main>
		</div>
	);
}
