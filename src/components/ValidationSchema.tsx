import * as Yup from "yup";
export const Panel_PostProduct_Validate = Yup.object({
  productName: Yup.string()
    .required("پر کردن این گزینه ضروری است")
    .oneOf(["Mobile", "Speaker", "Watch"], "مقدار وارده با از گزینه ها باشد"),
  PhoneLable: Yup.string()
    .required("فیلد عنوان نباید خالی باشد")
    .min(5, "حداقل باید 5 حرف داشته باشد")
    .max(30, "حداکثر حروف 30 حرف است"),
  PhoneLableFa: Yup.string()
    .required("فیلد عنوان نباید خالی باشد")
    .min(5, "حداقل باید 5 حرف داشته باشد")
    .max(30, "حداکثر حروف 30 حرف است"),
  brand: Yup.string()
    .required("انتخاب گزینه در این فیلد ضروری است")
    .oneOf(["Speaker", "Watch", "samsung", "xiaomi", "apple"]),
  brandFa: Yup.string()
    .required("انتخاب گزینه در این فیلد ضروری است")
    .oneOf(["اسپیکر", "ساعت", "سامسونگ", "شیائومی", "اپل"]),
  // id: Yup.string()
  //   .required("وارد کردن این فیلد ضروری است")
  //   .min(5, "حداقل باید 5 حرف داشته باشد"),
  information: Yup.object({
    memory: Yup.string(),
    memoryType: Yup.string(),
    price: Yup.number().required("پر کردن این فیلد ضروری است"),
    Inventory: Yup.lazy((value) =>
      typeof value === "string"
        ? Yup.string()
            .oneOf(["true", "false"])
            .required("پر کردن این فیبد ضروری است")
        : Yup.boolean().required("پر کردن این فیبد ضروری است")
    ),
    date: Yup.string(),
    type: Yup.string(),
    length: Yup.number(),
    width: Yup.number(),
    height: Yup.number(),
    weight: Yup.number(),
    sim: Yup.string(),
    // colors: Yup.array(Yup.string())
    //   .required("باید رنگ انتخاب کنید")
    //   .min(1, "باید حداقل یک رنگ انتخاب کنید")
    //   .max(5, "نمی توانید بیشتر از 5 رنگ انتخاب کنید"),
    colorsEn: Yup.array(Yup.string())
      .required("باید رنگ انتخاب کنید")
      .min(1, "باید حداقل یک رنگ انتخاب کنید")
      .max(5, "نمی توانید بیشتر از 5 رنگ انتخاب کنید"),
    discount: Yup.lazy((value) =>
      typeof value === "string"
        ? Yup.string()
            .oneOf(["true", "false"])
            .required("پر کردن این فیبد ضروری است")
        : Yup.boolean().required("پر کردن این فیبد ضروری است")
    ),
    off: Yup.number(),
    banner: Yup.string(),
    banners: Yup.array(Yup.string())
      .required("باید عکس انتخاب کنید")
      .min(1, "باید حداقل یک عکس انتخاب کنید")
      .max(5, "نمی توانید بیشتر از 5 عکس انتخاب کنید"),
  }),
});
