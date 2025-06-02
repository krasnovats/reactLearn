import Header from './components/Header';
import { ways } from './data';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';

export default function App() {

	const onClick = () => console.log('btnClick')

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

					<Button onClick={onClick}>Подход</Button>
					<Button onClick={onClick}>Доступность</Button>
					<Button onClick={onClick}>Концентрация</Button>
				</section>
			</main>
		</div>
	);
}
