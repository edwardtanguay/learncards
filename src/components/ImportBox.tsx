import { useStore } from '../store';
import { FaSpinner } from 'react-icons/fa';

export const ImportBox = () => {
	const store = useStore((state) => state);

	const handleInputTextChange = (e: any) => {
		const text = e.target.value;
		if (text.trim() !== '') {
			const _lines = text.split('\n');
			const lines: string[] = [];
			_lines.forEach((line: string) => {
				lines.push(line + 'nnn');
			});
			const parsedText = lines.join('\n');

			store.setInputText(text);
			store.setOutputText(parsedText);
		} else {
			store.setInputText('');
			store.setOutputText('');
		}
	};

	return (
		<div className="importBox">
			<h2>Learn card text to parse:</h2>
			<textarea
				value={store.inputText}
				spellCheck="false"
				onChange={handleInputTextChange}
			></textarea>
			<h2>Learn cards JSON to paste:</h2>
			<textarea value={store.outputText} readOnly></textarea>
		</div>
	);
};
