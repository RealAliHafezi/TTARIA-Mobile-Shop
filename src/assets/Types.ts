export interface ProductsInformationType {
  memory: string;
  memoryType: string;
  price: number | null;
  Inventory: boolean;
  date: string;
  type: string;
  typelength: number | null;
  width: number | null;
  height: number | null;
  weight: number | null;
  sim: string;
  colors: Array<string> | [];
  colorsEn: Array<string> | [];
  discount: boolean;
  off: number | null;
  banner: string;
  banners: Array<string>;
}
export interface ProductsType {
  productName: string;
  brand: string;
  brandFa: string;
  PhoneLable: string;
  PhoneLableFa: string;
  id: string;
  information: ProductsInformationType;
}

// navbar
export type NavbarListItemsDataType = {
  filter: string;
  title: string;
  titleEn: string;
  item: Array<string> | null;
  itemEn: Array<string> | null;
};
export type NavbarListDataType = {
  filter: string;
  lable: string;
  labelEn: string;
  data: Array<NavbarListItemsDataType> | null;
};
