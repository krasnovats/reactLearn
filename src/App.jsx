import Header from './components/Header';
import { ways, differens } from './data';

import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';
import { useState } from 'react'; // импортируем useState


export default function App() {
	const [contentType, setContent] = useState(null)


	// let content = 'Нажми на кнопку';


	function handleClick(type) {

		setContent(type)
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
					<Button onClick={( ) => handleClick('easy')}>Доступность</Button>
					<Button onClick={( ) => handleClick('program')}>Концентрация</Button>


					{ contentType ? (<p> {differens[contentType]}</p>) : (<p>Нажми</p>)}
						
				</section>
			</main>
		</div>
	);
}
// 1.35