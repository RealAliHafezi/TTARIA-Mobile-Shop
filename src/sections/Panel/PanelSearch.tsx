import React, { useState, useEffect, useRef } from "react";
import { ProductsType } from "../../assets/Types";
import { useAppSelector } from "../../redux/hooks";
import PanelProducts from "./PanelProducts";

// data
const PanelSearch = () => {
  const Products = useAppSelector((state) => state.Products.products);
  const [products, setProducts] = useState<Array<ProductsType>>([]);
  const [productName, setProductName] = useState<string>("Mobile");
  //   refs
  const brandRef = useRef<HTMLSelectElement>(null);
  const InventoryRef = useRef<HTMLSelectElement>(null);
  const DiscountRef = useRef<HTMLSelectElement>(null);
  const MinPriceRef = useRef<HTMLInputElement>(null);
  const MaxPriceRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProducts = Products.filter((product) => {
      return (
        product.productName === productName
        // product.brand === brandRef.current?.value
      );
    });
    setProducts(
      Products.filter((product) => {
        return (
          product.productName === productName &&
          product.brand === brandRef.current?.value &&
          String(product.information.Inventory) ===
            InventoryRef.current?.value &&
          String(product.information.discount) === DiscountRef.current?.value &&
          product.information.price &&
          product.information.price >= Number(MinPriceRef.current?.value) &&
          product.information.price <= Number(MaxPriceRef.current?.value)
        );
      })
    );
    console.log(products, newProducts);
  };
  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <>
      <section className="Panel_AddProducts position-relative col-10 px-2 py-3">
        <h2 className="mt-2 mb-3 text-center">پنل جستجوی پیشرفته</h2>
        <form
          action=""
          className="row g-0 w-100"
          onSubmit={(e) => handleSearch(e)}
        >
          <div className="mb-4 col-12 col-md-6 ps-md-2 position-relative">
            <label htmlFor="" className="form-label">
              نوع محصول
            </label>
            <select
              name=""
              id=""
              className="form-control"
              onChange={(e) => setProductName(e.target.value)}
            >
              <option value="Mobile">موبایل</option>
              <option value="Watch">ساعت</option>
              <option value="Speaker">اسپیکر</option>
            </select>
          </div>
          <div className="mb-4 col-12 col-md-6 pe-md-2 position-relative">
            <label htmlFor="" className="form-label">
              برند محصول
            </label>
            <select name="" id="" className="form-control" ref={brandRef}>
              {productName === "Mobile" && (
                <>
                  <option value="samsung">سامسونگ</option>
                  <option value="xiaomi">شیائومی</option>
                  <option value="apple">اپل</option>
                </>
              )}
              {productName === "Speaker" && (
                <>
                  <option value="Kingstar">کینگ استار</option>
                  <option value="TSCO">تسکو</option>
                  <option value="T&G">تی اند جی</option>
                  <option value="XP-Product">ایکس پی - پروداکت</option>
                  <option value="JBL">جی بی ال</option>
                </>
              )}
              {productName === "Watch" && (
                <option value="smartWatch">اسمارت واچ</option>
              )}
            </select>
          </div>
          <div className="mb-4 col-12 col-md-6 ps-md-2 position-relative">
            <label htmlFor="" className="form-label">
              وضعیت محصول
            </label>
            <select name="" id="" className="form-control" ref={InventoryRef}>
              <option value="true">موجود</option>
              <option value="false">ناموجود</option>
            </select>
          </div>
          <div className="mb-4 col-12 col-md-6 pe-md-2 position-relative">
            <label htmlFor="" className="form-label">
              تخفیف محصول
            </label>
            <select name="" id="" className="form-control" ref={DiscountRef}>
              <option value="false">ندارد</option>
              <option value="true">دارد</option>
            </select>
          </div>
          <div className="mb-4 col-6 col-md-3 ps-md-2 position-relative">
            <label htmlFor="" className="form-label">
              قیمت از :
            </label>
            <input
              type="number"
              className={`form-control`}
              min={0}
              defaultValue={0}
              ref={MinPriceRef}
            />
          </div>
          <div className="mb-4 col-6 col-md-3 ps-md-2 position-relative">
            <label htmlFor="" className="form-label">
              تا :
            </label>
            <input
              type="number"
              className={`form-control`}
              min={0}
              defaultValue={100000000}
              ref={MaxPriceRef}
            />
          </div>
          <button className="btn btn-success" type="submit">
            جستجو
          </button>
          <button
            className="btn btn-primary mt-2"
            type="button"
            onClick={() => setProducts(Products)}
          >
            همه محصولات
          </button>
        </form>
      </section>
      <PanelProducts products={products} />
    </>
  );
};

export default PanelSearch;
