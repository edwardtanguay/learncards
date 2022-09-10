import { ILearnCard, useStore } from './store';
import { useRef, useEffect } from 'react';
import './App.scss';
import { ImportBox } from './components/ImportBox';
import { TestingBox } from './components/TestingBox';
import loadedlearnCards from './data/learnCards.json';

function App() {
	const store = useStore((state) => state);
	const techBookSearchRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const _learnCards: ILearnCard[] = [];
		loadedlearnCards.forEach(loadedlearnCard => {
			const _learnCard: ILearnCard= { ...loadedlearnCard, isShowing: false };
			_learnCards.push(_learnCard);
		});
		_learnCards.sort((a: ILearnCard, b: ILearnCard) => { return a.whenCreated > b.whenCreated ? 0 : 1 });
		store.setLearnCards(_learnCards);
	}, []);

	return (
		<div className="App">
			<h1>{store.learnCards.length} Learn Cards</h1>
			<main>
				<section className="displayArea">
					<TestingBox />
				</section>

				<section className="dataArea">
					<ImportBox />
				</section>
			</main>
		</div>
	);
}

export default App;
