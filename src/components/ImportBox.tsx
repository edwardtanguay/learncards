import { useStore } from '../store';
import { FaSpinner } from 'react-icons/fa';

export const ImportBox = () => {
	const store = useStore((state) => state);

	return (
		<div className="importBox">
			<h2>Learn card text to parse:</h2>
			<textarea>{store.inputText}</textarea>	
			<h2>Learn cards JSON to paste:</h2>
			<textarea>{store.outputText}</textarea>	
		</div>
	);
};
