import { useStore } from './store';
import { useRef, useEffect } from 'react';
import './App.scss';
import { ImportBox } from './components/ImportBox';

function App() {
	const store = useStore((state) => state);
	const techBookSearchRef = useRef<HTMLInputElement>(null);

	return (
		<div className="App">
			<h1>Learn Cards</h1>

			<main>
				<section className="controlArea">
				nnn
				</section>

				<section className="dataArea">
					<ImportBox />
				</section>
			</main>
		</div>
	);
}

export default App;
