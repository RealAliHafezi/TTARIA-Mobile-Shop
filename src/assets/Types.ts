import React from "react";

export interface ProductsInformationType {
  memory: string;
  memoryType: string;
  price: number | undefined;
  Inventory: boolean | "true" | "false";
  date: string;
  type: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  sim: string;
  colors: Array<string>;
  colorsEn: Array<string>;
  discount: boolean | "true" | "false";
  off: number | null;
  banner: string;
  banners: Array<string>;
}
export interface ProductsType {
  productName: string;
  productNameFa: string;
  brand: `samsung` | `xiaomi` | `apple` | `Speaker` | `Watch`;
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
export interface HeaderScrollOptionType {
  Hide: boolean;
}
// home last readable
export interface HomeLastReadableType {
  img: string;
  caption: string;
  writerName: string;
  date: string;
  link: string;
}
// home readable
export interface HomeRedableType {
  pictureOne: string;
  title: string;
  titleBlue: string;
  pictureTwo: string;
}
// footer
interface FooterServicesType {
  title: string;
  caption: string;
  logo: string;
}
interface FooterLinksType {
  text: string;
  link: string;
}
export interface FooterTypes {
  services: Array<FooterServicesType>;
  links: Array<Array<FooterLinksType>>;
}
export interface ProductDescriptionType {
  title: string | null;
  desc1: string | null;
  desc2: string | null;
  pic1: string | null;
  pic2: string | null;
}

// panel
interface PanelSidebarItemsBoxType {
  txt: string;
  link: string;
  icon: any;
}
export interface PanelSidebarItemsType {
  BaseItems: Array<PanelSidebarItemsBoxType>;
  GroupItems: Array<PanelSidebarItemsBoxType>;
}
