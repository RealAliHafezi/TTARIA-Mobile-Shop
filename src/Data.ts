import {
  NavbarListDataType,
  HomeLastReadableType,
  HomeRedableType,
  FooterTypes,
} from "./assets/Types";
const NavbarListItemsData: Array<NavbarListDataType> = [
  {
    filter: "mobile",
    lable: "گوشی موبایل",
    labelEn: "Mobile Phone",
    data: [
      {
        filter: "apple",
        title: "اپل",
        titleEn: "apple",
        item: null,
        itemEn: null,
      },
      {
        filter: "samsung",
        title: "سامسونگ",
        titleEn: "samsung",
        item: null,
        itemEn: null,
      },
      {
        filter: "xiaomi",
        title: "شیائومی",
        titleEn: "xiaomi",
        item: null,
        itemEn: null,
      },
      {
        filter: "nokia",
        title: "نوکیا",
        titleEn: "nokia",
        item: null,
        itemEn: null,
      },
      {
        filter: "huawei",
        title: "هوآوی",
        titleEn: "huawei",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "laptop",
    lable: "لپتاپ",
    labelEn: "Laptop",
    data: [
      {
        filter: "laptopApple",
        title: "لپتاپ اپل",
        titleEn: "apple laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopLenovo",
        title: "لپتاپ لنوو",
        titleEn: "lenovo laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopMSI",
        title: "لپتاپ ام اس آی",
        titleEn: "msi laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopAsus",
        title: "لپتاپ ایسوس",
        titleEn: "asus laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopHuawei",
        title: "لپ تاپ هوآوی",
        titleEn: "huawei laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopDell",
        title: "لپ تاپ دل",
        titleEn: "dell laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopHP",
        title: "لپ تاپ اچ پی",
        titleEn: "hp laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopSony",
        title: "لپ تاپ سونی",
        titleEn: "sony laptop",
        item: null,
        itemEn: null,
      },
      {
        filter: "laptopParts",
        title: "قطعات لپ تاپ",
        titleEn: "laptop parts",
        item: ["هارد لپتاپ", "رم لپتاپ"],
        itemEn: ["hard laptop", "ram laptop"],
      },
      {
        filter: "laptopEx",
        title: "لوازم جانبی کامپیوتر و لپتاپ",
        titleEn: "laptop and computer accessories",
        item: [
          "فلش مموری",
          "موس و کیبرد",
          "مانیتور",
          "کیس های سمبل شده",
          "کابل",
          "کیف هارد",
          "کیس",
          "کول پد لپتاپ",
          "باتری و شارژ لپتاپ",
          "آل این وان",
        ],
        itemEn: [
          "memory",
          "mouse & keyboard",
          "monitor",
          "Symbolized cases",
          "cable",
          "hard drive bag",
          "case",
          "cool pad laptop",
          "laptop battery and charger",
          "all in one",
        ],
      },
    ],
  },
  {
    filter: "computerParts",
    lable: "قطعات کامپیوتر",
    labelEn: "Computer Parts",
    data: [
      {
        filter: "CPU",
        title: "پردازنده مرکزی کامپیوتر",
        titleEn: "CPU",
        item: null,
        itemEn: null,
      },
      {
        filter: "RAM",
        title: "رم کامپیوتر",
        titleEn: "RAM",
        item: null,
        itemEn: null,
      },
      {
        filter: "GPU",
        title: "کارت گرافیک",
        titleEn: "GPU",
        item: null,
        itemEn: null,
      },
      {
        filter: "hard&&SSD",
        title: "هارد و اس اس دی",
        titleEn: "hard & ssd",
        item: null,
        itemEn: null,
      },
      {
        filter: "mindboard",
        title: "مادربرد",
        titleEn: "mainboard",
        item: null,
        itemEn: null,
      },
      {
        filter: "powerSupply",
        title: "منبع تغذیه",
        titleEn: "power supply",
        item: null,
        itemEn: null,
      },
      {
        filter: "CDWriter",
        title: "درایو نوری",
        titleEn: "CD writer",
        item: null,
        itemEn: null,
      },
      {
        filter: "expansionCard",
        title: "کارت توسعه",
        titleEn: "expansion card",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "tablet",
    lable: "تبلت",
    labelEn: "Tablet",
    data: [
      {
        filter: "tabletApple",
        title: "تبلت اپل",
        titleEn: "apple tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletSamsung",
        title: "تبلت سامسونگ",
        titleEn: "samsung tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletHuawei",
        title: "تبلت هوآوی",
        titleEn: "huawei tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletLenovo",
        title: "تبلت لنوو",
        titleEn: "lenovo tablet",
        item: null,
        itemEn: null,
      },
      {
        filter: "tabletMicrosoft",
        title: "تبلت میاکروسافت",
        titleEn: "microsoft tablet",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "smartwatch",
    lable: "مچ بند و ساعت هوشمند",
    labelEn: "Smart Watch",
    data: [
      {
        filter: "smartwatchApple",
        title: "مچ بند و ساعت اپل",
        titleEn: "apple smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartwatchSamsung",
        title: "مچ بند و ساعت سامسونگ",
        titleEn: "samsung smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartwatchXiaomi",
        title: "مچ بند و ساعت شیائومی",
        titleEn: "xiaomi smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartwatchHuawei",
        title: "مچ بند و ساعت هوآوی",
        titleEn: "huawei smart watch",
        item: null,
        itemEn: null,
      },
      {
        filter: "smartWatch",
        title: "مچ بند و ساعت",
        titleEn: "SmartWatch",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "security",
    lable: "سیتسم های امنیتی و نظارتی",
    labelEn: "security & survelliance systems",
    data: [
      {
        filter: "CCTV",
        title: "دوربین مداربسته",
        titleEn: "CCTV",
        item: null,
        itemEn: null,
      },
      {
        filter: "AlarmPlaces",
        title: "دزدگیر اماکن",
        titleEn: "alarm places",
        item: null,
        itemEn: null,
      },
      {
        filter: "DVR",
        title: "دستگاه دی وی آر",
        titleEn: "DVR",
        item: null,
        itemEn: null,
      },
      {
        filter: "automaticDoors",
        title: "درب اتوماتیک و کرکره برقی",
        titleEn: "automatic doors & electric shutters",
        item: null,
        itemEn: null,
      },
      {
        filter: "gate&&Barries",
        title: "گیت و راه بند",
        titleEn: "gate & barries",
        item: null,
        itemEn: null,
      },
      {
        filter: "wireless",
        title: "بیسیم",
        titleEn: "wireless",
        item: null,
        itemEn: null,
      },
      {
        filter: "cordless",
        title: "گوشی تلفن بیسیم و باسیم",
        titleEn: "cordless & coordless telephone",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "gameConsole",
    lable: "کنسول بازی",
    labelEn: "game console",
    data: [
      {
        filter: "playstation&&Xbox",
        title: "پلی استیشن و ایکس باکس",
        titleEn: "playstation & xbox",
        item: null,
        itemEn: null,
      },
      {
        filter: "games",
        title: "بازی ها",
        titleEn: "games",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "officeMachine",
    lable: "ماشین های اداری",
    labelEn: "office machines",
    data: [
      {
        filter: "printer",
        title: "پرینتر",
        titleEn: "printer",
        item: null,
        itemEn: null,
      },
      {
        filter: "fax",
        title: "فکس",
        titleEn: "fax",
        item: null,
        itemEn: null,
      },
      {
        filter: "scaner",
        title: "اسکنر",
        titleEn: "scaner",
        item: null,
        itemEn: null,
      },
    ],
  },
  {
    filter: "audioEquipment",
    lable: "تجهیزات صوتی",
    labelEn: "audio equipment",
    data: [
      {
        filter: "microphone",
        title: "میکروفون",
        titleEn: "microphone",
        item: null,
        itemEn: null,
      },
      {
        filter: "speaker",
        title: "اسپیکر بلوتوثی و باسیم",
        titleEn: "bluetooth & wired speaker",
        item: null,
        itemEn: null,
      },
    ],
  },
];
const ProductsBannersImages: Array<string> = [
  "https://static.ttaria.com/banners/2022/03/14/bdb1fa9de1d947d4548f46b381dc3cc0dbd5bbacf70debf2afd3026107512047MJanbi.jpg",
  "https://static.ttaria.com/banners/2022/03/13/8e3affecfb5b37f125c6e5a21a27877313bf9a972f355122f69d8a6490bfdeb2MGhataat.jpg",
  "https://static.ttaria.com/banners/2022/03/13/2ecd2408a0db4f27e58eea6d5278dc8cd27ab9610f85374eed32f82deebea66cMLaptop.jpg",
  "https://static.ttaria.com/banners/2022/03/13/f766ef8fcfb250407b0080ae5d6f8c503d83f3e6f15758658787e6bed31b4cacMMobile.jpg",
  "https://static.ttaria.com/banners/2022/03/13/a934daf812c811db935f2aa7d2c8f55da5e98c4da66cbc0e3546626bdb22e29cMPs5.jpg",
  "https://static.ttaria.com/banners/2022/03/13/615c7354b766b9dcc7208093de701f0351fbb1d018fb9169666e24ba8c5ac272MGLaptop.jpg",
  "https://static.ttaria.com/banners/2022/03/13/bfcb558317eeae5ea549946e7c88734ab2900146d1c851896392243d8345a74bMSpiker.jpg",
  "https://static.ttaria.com/banners/2022/03/13/5c2de68d4274ded6c8cbc0637fc100b31b779aea32711f71cd96a6eba583dac9MTablet.jpg",
];
const ProductsBannersBetweenImages: Array<string> = [
  "https://static.ttaria.com/banners/2022/03/13/117abe75ed52ad5559a7503e09e7af53879e613c8557223b56f2f152c24219adprinter.jpg",
  "https://static.ttaria.com/banners/2022/03/14/82a5a68361451f729e1aa9a78857190d6eae15de3b74116fbc8f85fc96f2674afax.jpg",
  "https://static.ttaria.com/banners/2022/03/13/ba7b1e675816526d2c204545494f3205ec6aaf3e59425559c22497471f8ac5abBISIM.jpg",
  "https://static.ttaria.com/banners/2022/03/13/955f2daad9b0b121c546f5af960ac5cb758d98a965b4f15eee577edb97790dc4TELEPHONE.jpg",
];
const HomeLastReadableData: Array<HomeLastReadableType> = [
  {
    img: "https://static.ttaria.com/blogs/cover/2022/06/05/09830798065c3ef4bbe5b0fa6fa399cb.jpg",
    caption: "بهترین گوشی هوآوی",
    writerName: "یوسف هنرمند",
    date: "یکشنبه،15 خرداد 1401",
    link: "./",
  },
  {
    img: "https://static.ttaria.com/blogs/cover/2022/06/06/1a063013676854008f1de3ab63df4679.jpg",
    caption: "جدیدترین گوشی هوآوی",
    writerName: "یوسف هنرمند",
    date: "دوشنبه،9 خرداد 1401",
    link: "./",
  },
  {
    img: "https://static.ttaria.com/blogs/cover/2022/05/29/eb042ee3923c0a241c0619fa2eb1a692.jpg",
    caption: "مقایسه آیفون 11 با 12",
    writerName: "یوسف هنرمند",
    date: "یکشنبه، 08 خرداد 1401",
    link: "./",
  },
  {
    img: "https://static.ttaria.com/blogs/cover/2022/05/28/76b075d12602e3b7c1a65bc6cadb4f62.jpg",
    caption: "بهترین گوشی تا 15 میلیون تومان",
    writerName: "یوسف هنرمند",
    date: "شنبه،07 خرداد 1401",
    link: "./",
  },
];
const HomeRedableData: Array<HomeRedableType> = [
  {
    title: "خرید گوشی",
    titleBlue: "",
    pictureOne:
      "https://static.ttaria.com/editor/2022/02/27/1645963963-9924%D8%AE%D8%B1%DB%8C%D8%AF-%DA%AF%D9%88%D8%B4%DB%8C.jpg",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645963981-4884%D8%AE%D8%B1%DB%8C%D8%AF-%DA%AF%D9%88%D8%B4%DB%8C-%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%DA%AF.jpg",
  },
  {
    titleBlue: "خرید گوشی سامسونگ",
    title: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645963990-2492%D8%AE%D8%B1%DB%8C%D8%AF-%DA%AF%D9%88%D8%B4%DB%8C-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C.jpg",
  },
  {
    titleBlue: "خرید گوشی شیائومی",
    title: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645963998-2737%D8%AE%D8%B1%DB%8C%D8%AF-%DA%AF%D9%88%D8%B4%DB%8C-%D8%A7%D9%BE%D9%84.jpg",
  },
  {
    titleBlue: "خرید گوشی اپل",
    title: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645964025-4821%D8%AE%D8%B1%DB%8C%D8%AF-%DA%AF%D9%88%D8%B4%DB%8C-%D9%87%D9%88%D8%A7%D9%88%DB%8C.jpg",
  },
  {
    titleBlue: "خرید گوشی هوآوی",
    title: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645964039-2635%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8-%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%DA%AF%D9%88%D8%B4%DB%8C.jpg",
  },
  {
    title: "انتخاب بهترین گوشی",
    titleBlue: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645964049-7553IOS-%DB%8C%D8%A7-%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF%D8%9F.jpg",
  },
  {
    title: "IOS یا Android ؟",
    titleBlue: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645964059-3042%D9%86%D9%85%D8%A7%DB%8C%D8%B4%DA%AF%D8%B1-%D8%A7%D9%85%D9%88%D9%84%D8%AF-%DB%8C%D8%A7-LCD.jpg",
  },
  {
    title: "نمایشگر AMOLED یا LCD ?",
    titleBlue: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645964070-5288%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A7%DB%8C%D9%86%D8%AA%D8%B1%D9%86%D8%AA%DB%8C-%DA%AF%D9%88%D8%B4%DB%8C.jpg",
  },
  {
    title: "خرید اینترنتی بهترین گوشی های موبایل",
    titleBlue: "",
    pictureOne: "",
    pictureTwo:
      "https://static.ttaria.com/editor/2022/02/27/1645964080-9117%D9%81%D8%B1%D9%88%D8%B4%DA%AF%D8%A7%D9%87-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84%D8%8C-%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE.jpg",
  },
  {
    title: "فروشگاه موبایل، لپ تاپ و لوازم جانبی آریا",
    titleBlue: "",
    pictureOne: "",
    pictureTwo: "",
  },
];
const FooterData: FooterTypes = {
  services: [
    {
      title: "ارسال سریع به سراسر کشور",
      caption: "تحویل سریع تمامی مرسولات به سراسر کشور",
      logo: "https://ttaria.com/images/icons/delivery.png",
    },
    {
      title: "7 روز ضمانت بازگشت",
      caption: "در صورت نارضایتی به هر دلیلی می توانید محصول را بازگردانید",
      logo: "https://ttaria.com/images/icons/refund.png",
    },
    {
      title: "پشتیبانی 24 ساعته",
      caption: "در صورت وجود هرگونه سوال یا ابهامی، با ما در تماس باشید",
      logo: "https://ttaria.com/images/icons/support.png",
    },
    {
      title: "ضمانت اصل بودن کالا",
      caption: "محصولات مدنظر خود را با خیال آسوده از اصل بودن آن خریداری کنید",
      logo: "https://ttaria.com/images/icons/guarantee.png",
    },
  ],
  links: [
    [
      {
        link: "/",
        text: "پشتیبانی واتساپ",
      },
      {
        link: "/",
        text: "تماس با ما",
      },
      {
        link: "/",
        text: "درباره ما",
      },
      {
        link: "/",
        text: "روند ارسال سفارشات",
      },
      {
        link: "/",
        text: "رویه عودت سازی سفارش",
      },
      {
        link: "/",
        text: "قوانین و مقررات",
      },
      {
        link: "/",
        text: "تجربه خرید از آریا",
      },
      {
        link: "/",
        text: "مقالات",
      },
      {
        link: "/",
        text: "گوشی استوک",
      },
      {
        link: "/",
        text: "تماس با ما",
      },
    ],
    [
      {
        link: "/",
        text: "قیمت گوشی",
      },
      {
        link: "/",
        text: "قیمت لپ تاپ",
      },
      {
        link: "/",
        text: "قیمت قطعات کامپیوتر",
      },
      {
        link: "/",
        text: "گوشی آیفون",
      },
      {
        link: "/",
        text: "گوشی سامسونگ",
      },
      {
        link: "/",
        text: "گوشی شیائومی",
      },
      {
        link: "/",
        text: "گوشی هوآوی",
      },
      {
        link: "/",
        text: "گوشی نوکیا",
      },
    ],
  ],
};
export {
  NavbarListItemsData,
  ProductsBannersImages,
  ProductsBannersBetweenImages,
  HomeLastReadableData,
  HomeRedableData,
  FooterData,
};
