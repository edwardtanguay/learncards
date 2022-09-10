import { useStore } from '../store';

export const ImportBox = () => {
	const store = useStore((state) => state);

	const handleInputTextChange = (e: any) => {
		let text = e.target.value;
		if (text.trim() !== '') {
			text += '\n';
			const _lines = text.split('\n');
			const lines: string[] = [];
			let holdLines: string[] = [];
			_lines.forEach((line: string) => {
				if (line !== '') {
					holdLines.push(line);
				} else {
					let front = holdLines[1].trim();
					let back = holdLines[0].trim();
					let whenCreated = holdLines[2].trim();
					if (back.startsWith('PR.')) {
						const hold = front;
						front = back;
						back = hold;
					}
					if (back.startsWith('verb: ')) {
						const hold = front;
						front = back;
						back = hold;
					}
					const parsedText = `{
	"category": "spanish",
	"front": "${front}",
	"back": "${back}",
	"learned": false,
	"timesTested": 0,
	"whenLastTested": "",
	"whenCreated": "${whenCreated}"
},`;
					lines.push(parsedText);
					holdLines = [];
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
				className="inputText"
				value={store.inputText}
				spellCheck="false"
				onChange={handleInputTextChange}
			></textarea>
			<h2>Learn card JSON to paste:</h2>
			<textarea
				value={store.outputText}
				className="outputText"
				readOnly
			></textarea>
		</div>
	);
};
