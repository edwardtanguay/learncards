import { useStore, ILearnCard } from '../store';
import { FaSpinner } from 'react-icons/fa';

export const TestingBox = () => {
	const store = useStore((state) => state);

	const toggleLearnCardShowing = (learnCard: ILearnCard) => {
		learnCard.isShowing = !learnCard.isShowing;
		store.setLearnCards([...store.learnCards]);
	}

	return (
		<div className="testingBox">
			{store.learnCards.map((learnCard: ILearnCard, i) => {
				return (
					<div className="learnCard" onClick={() => toggleLearnCardShowing(learnCard)} key={i}>
						<div className="front">{learnCard.front}</div>
						{learnCard.isShowing && (
							<div className="back">{learnCard.back}</div>
						)}
					</div>
				);
			})}
		</div>
	);
};
