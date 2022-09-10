import { useStore } from '../store';
import { FaSpinner } from 'react-icons/fa';

export const ImportBox = () => {
	const store = useStore((state) => state);

	const handleInputTextChange = (e: any) => {
		let text = e.target.value;
		if (text.trim() !== '') {
			text += '\n';
			const _lines = text.split('\n');
			const lines: string[] = [];
			let holdLines:string[] = [];
			_lines.forEach((line: string) => {
				console.log(line);
				if (line !== '') {
					holdLines.push(line);
				} else {
					lines.push('newline');
				}
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
