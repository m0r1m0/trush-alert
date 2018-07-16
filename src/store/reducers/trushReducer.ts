import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface TrushState {
  trushInfo: Trush[];
}

export interface Trush {
  id: number;
  areaFirst: string;
  area: string;
  areaRuby: string;
  townFirst: string;
  town: string;
  townRuby: string;
  normal_1: string;
  normal_2: string;
  bottle: string;
  mixedPaper: string;
  plastic: string;
  bigRefuse_1: number;
  bigRefuse_2: number;
  bigRefuse_date: string;
  office: string;
}

const initialState: TrushState = {
  trushInfo: [
    {
      id: 95,
      areaFirst: 'さ',
      area: '幸区',
      areaRuby: 'さいわいく',
      townFirst: 'お',
      town: '小倉',
      townRuby: 'おぐら',
      normal_1: '火',
      normal_2: '金',
      bottle: '土',
      mixedPaper: '水',
      plastic: '月',
      bigRefuse_1: 1,
      bigRefuse_2: 3,
      bigRefuse_date: '金',
      office: '川崎',
    },
  ],
};

export const trushReducer = reducerWithInitialState(initialState);
