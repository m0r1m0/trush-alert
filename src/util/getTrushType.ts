import { Trush } from '../store/reducers/trushReducer';
import { getWeek } from './getWeek';

export const getTrushType = (trush: Trush) => {
  const dayOfWeek: string = getWeek();
  const trushKey = Object.keys(trush).filter(
    key => trush[key] === dayOfWeek
  )[0];
  switch (trushKey) {
    case 'normal_1':
      return {
        name: '普通ごみ',
        image:
          'https://1.bp.blogspot.com/-ELwOoDGUaNo/VtofkoEVt6I/AAAAAAAA4Yg/QVOJ48wAUwo/s800/gomi_mark12_sonohoka.png',
      };
    case 'normal_2':
      return {
        name: '普通ごみ',
        image:
          'https://1.bp.blogspot.com/-ELwOoDGUaNo/VtofkoEVt6I/AAAAAAAA4Yg/QVOJ48wAUwo/s800/gomi_mark12_sonohoka.png',
      };
    case 'bottle':
      return {
        name: '空き缶・ペットボトル・空き瓶・使用済み乾電池',
        image:
          'https://1.bp.blogspot.com/-F_hmSswVCz8/VtofhY4f40I/AAAAAAAA4YE/fg09VtK3tss/s800/gomi_mark05_petbottle.png',
      };
    case 'mixedPaper':
      return {
        name: 'ミックスペッパー',
        image:
          'https://2.bp.blogspot.com/-JuG4yaiLI9o/VtofkMlVTUI/AAAAAAAA4Yc/dxFpn5LTdyg/s800/gomi_mark11_kami.png',
      };
    case 'plastic':
      return {
        name: 'プラスチック製容器包装',
        image:
          'https://3.bp.blogspot.com/-wMset6stW4U/Vtofh0BpVmI/AAAAAAAA4YI/C2geoLnn9qY/s800/gomi_mark06_plastic.png',
      };
    case 'bigRefuse_date':
      return {
        name: '小物金属・粗大ごみ',
        image:
          'https://3.bp.blogspot.com/-kIZCt67Ztj8/VtofiwewiBI/AAAAAAAA4YQ/A370qUfWdwo/s800/gomi_mark08_sodai.png',
      };
    default:
      return {
        name: 'なし',
        image: '',
      };
  }
};
