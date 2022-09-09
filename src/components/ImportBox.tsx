import { useStore } from '../store';
import { FaSpinner } from 'react-icons/fa';

export const ImportBox = () => {
	const store = useStore((state) => state);

	const handleInputTextChange = (e:any) => {
		const value = e.target.value;
		store.setInputText(value);
		store.setOutputText(value + ' ADDED');
	}

	return (
		<div className="importBox">
			<h2>Learn card text to parse:</h2>
			<textarea value={store.inputText} onChange={handleInputTextChange}></textarea>	
			<h2>Learn cards JSON to paste:</h2>
			<textarea value={store.outputText} readOnly></textarea>	
		</div>
	);
};
