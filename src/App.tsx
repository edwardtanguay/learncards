import { useStore } from './store';
import { useRef, useEffect } from 'react';
import './App.scss';
import { ImportBox } from './components/ImportBox';
import _learnCards from './data/learnCards.json';

function App() {
	const store = useStore((state) => state);
	const techBookSearchRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		store.setLearnCards(_learnCards);	
	}, []);

	return (
		<div className="App">
			<h1>{store.learnCards.length} Learn Cards</h1>

			<main>
				<section className="controlArea">
				
				</section>

				<section className="dataArea">
					<ImportBox />
				</section>
			</main>
		</div>
	);
}

export default App;
