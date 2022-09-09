import create from 'zustand';
import axios from 'axios';

interface ILearnCard {
	category: string;
	front: string;
	back: string;
	learned: boolean;
	timesTested: number;
	whenLastTested: string;
	whenCreated: string;
}

interface IStore {
	learnCards: ILearnCard[];
	setLearnCards: (learnCards: ILearnCard[]) => void;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		learnCards: [],
		setLearnCards: (learnCards: ILearnCard[]) => set((state) => ({ ...state, learnCards })),
	})
);
