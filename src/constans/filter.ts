import type { IOption } from '@/models/selectOption';

export const genresFilters: IOption[] = [
  { name: 'Все', value: '' },
  { name: 'Приключения', value: 'приключения' },
  { name: 'Триллеры', value: 'триллер' },
  { name: 'Фантастика', value: 'фантастика' },
];

export const ratingsFilters: IOption[] = [
  { name: 'Все', value: '' },
  { name: '9-10', value: '9-10' },
  { name: '8-9', value: '8-9' },
  { name: '7-8', value: '7-8' },
  { name: '6-7', value: '6-7' },
];
