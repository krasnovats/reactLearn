import { ways } from '../data';
import WayToTeach from './WayToTeach';

export default function () {
return (
    <section>
	<h3>Первый абзац</h3>

	<ul>
		{ways.map((way) => (
			<WayToTeach key={way.title} {...way} />
		))}
	</ul>

</section>

)

}


