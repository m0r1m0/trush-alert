import { Trush } from '../store/reducers/trushReducer';
import { getWeek } from './getWeek';

export const getTodayTrush = (trush: Trush) => {
  const dayOfWeek: string = getWeek();
  const trushKey = Object.keys(trush).filter(
    key => trush[key] === dayOfWeek
  )[0];
  switch (trushKey) {
    case 'normal_1':
      return '普通ごみ';
    case 'normal_2':
      return '普通ごみ';
    case 'bottle':
      return '空き缶・ペットボトル・空き瓶・使用済み乾電池';
    case 'mixedPaper':
      return 'ミックスペッパー';
    case 'plastic':
      return 'プラスチック製容器包装';
    case 'bigRefuse_date':
      return '小物金属・粗大ごみ';
    default:
      return 'なし';
  }
};
