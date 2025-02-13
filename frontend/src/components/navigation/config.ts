interface INav {
  id: number;
  path: string;
  text: string;
}

export const nav: INav[] = [
  { id: 1, path: "list", text: "Список объявлений" },
  { id: 2, path: "form", text: "Создать объявление" },
]