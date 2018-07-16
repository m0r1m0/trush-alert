export const getWeek = () => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  return ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
};
