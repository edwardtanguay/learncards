import create from 'zustand';
import axios from 'axios';

export interface ILearnCard {
	category: string;
	front: string;
	back: string;
	learned: boolean;
	timesTested: number;
	whenLastTested: string;
	whenCreated: string;
	isShowing: boolean;
}

interface IStore {
	learnCards: ILearnCard[];
	setLearnCards: (learnCards: ILearnCard[]) => void;
	inputText: string;
	setInputText: (text: string) => void;
	outputText: string;
	setOutputText: (text: string) => void;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		learnCards: [],
		setLearnCards: (learnCards: ILearnCard[]) => set((state) => ({ ...state, learnCards })),
		inputText: '',
		setInputText: (inputText: string) => set((state) => ({ ...state, inputText })),
		outputText: '',
		setOutputText: (outputText: string) => set((state) => ({ ...state, outputText }))
	})
);
