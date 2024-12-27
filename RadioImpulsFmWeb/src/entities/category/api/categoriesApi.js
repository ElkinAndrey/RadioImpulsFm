import { sleep } from "@/shared/model";

const categories = [
  {
    id: "1",
    name: "Пермский край 1",
    radios: [
      { id: "1", name: "Красновишерск 104.8 FM" },
      { id: "2", name: "Красновишерск 105.8 FM" },
      { id: "3", name: "Красновишерск 106.8 FM" },
      { id: "4", name: "Красновишерск 107.8 FM" },
    ],
  },
  {
    id: "2",
    name: "Пермский край 2",
    radios: [
      { id: "1", name: "Сива 104.8 FM" },
      { id: "2", name: "Сива 105.8 FM" },
      { id: "3", name: "Сива 106.8 FM" },
      { id: "4", name: "Сива 107.8 FM" },
    ],
  },
  {
    id: "3",
    name: "Пермский край 3",
    radios: [
      { id: "1", name: "Кудымкар 104.8 FM" },
      { id: "2", name: "Кудымкар 105.8 FM" },
      { id: "3", name: "Кудымкар 106.8 FM" },
      { id: "4", name: "Кудымкар 107.8 FM" },
    ],
  },
  {
    id: "4",
    name: "Пермский край 4",
    radios: [
      { id: "1", name: "Пермь 104.8 FM" },
      { id: "2", name: "Пермь 105.8 FM" },
      { id: "3", name: "Пермь 106.8 FM" },
      { id: "4", name: "Пермь 107.8 FM" },
    ],
  },
];

class CategoriesApi {
  static async get() {
    await sleep(1000);
    if (Math.random() > 0.9) throw new Error();
    return { data: categories };
  }
}

export default CategoriesApi;
