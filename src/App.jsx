import Header from './components/Header';
import { ways } from './data';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';

export default function App() {

	let content = 'Нажми на кнопку';

	function handleClick(type) {
		console.log('btnClick', type)
		content=type
	} 

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

					<Button onClick={( ) => handleClick('way')}>Подход</Button>
					<Button onClick={handleClick('easy')}>Доступность</Button>
					<Button onClick={handleClick('program')}>Концентрация</Button>

					<p>{content}</p>
				</section>
			</main>
		</div>
	);
}
// 1.20