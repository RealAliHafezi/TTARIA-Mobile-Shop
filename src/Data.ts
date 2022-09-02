// icon
import {
  TbDeviceMobile,
  TbDeviceWatch,
  BsSpeakerFill,
  MdInventory,
  FaSearchengin,
  GiSightDisabled,
  AiOutlineHome,
  BsPlusLg,
} from "./assets/icons/icons";
//
import {
  NavbarListDataType,
  HomeLastReadableType,
  HomeRedableType,
  FooterTypes,
  ProductDescriptionType,
  PanelSidebarItemsType,
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
const ProductDescriptionData: Array<ProductDescriptionType> = [
  {
    title: null,
    desc1: `همیشه در میان گوشی‌های میان رده، شاهد گلکسی A52s سامسونگ نیز هستیم. این گوشی میان رده پرطرفدار، موفق شده تا همانند نسل گذشته فروش خوبش را حفظ کند و بسیاری از طرفداران به سراغش بروند. درست است گوشی گلکسی A51 سامسونگ گوشی خوبی از آب درنیامد اما سامسونگ با گلکسی A52s توانست نظر هوادارن را به خودش جلب کند. این گوشی میان رده شاهد بهبود نسبت به نسل قبلی خودش بوده و ارزش خرید را با این بهبودها بالا برده است. این نسخه که در حال بررسی آن هستیم گوشی موبایل سامسونگ A52 نسخه پرسرعت 5G است، نسخه‌ی 4G این گوشی نیز در بازار موجود می‌باشد که می‌توانید بسته به انتخاب هرکدام از این گوشی‌ها را تهیه کنید.
    سری A محصولات سامسونگ، دارای متنوع‌ترین گوشی‌های موبایل هستند که نسبت به ویژگی‌ها و قابلیت‌هایی که دارند،‌ ارزش خرید بالایی نیز دارند. این سری از گوشی‌‌های سامسونگ دارای قیمتی مناسب، سخت افزار خوب، قابلیت‌ها و ویژگی‌هایی می‌باشد که نظر هر کاربری را به خود جلب می‌کند. جالب است بدانید که گوشی‌های سری A سامسونگ، بخش عظیمی از فروش سامسونگ را تشکیل داده‌اند و سامسونگ نیز در این بخش سرمایه گذاری زیادی انجام داده تا بتواند کاربران زیادتری را به سمت خرید این سری از گوشی‌های خودش بکشاند.
    سامسونگ در گوشی‌های سری A خودش امکانات رقابتی قرار داده است تا بتواند با قیمتی مناسب و امکانات ویژه، از دیگر رقبا در این عرصه جلو بیافتد. حال در این بررسی قصد داریم تا گوشی موبایل سامسونگ A52s را مورد بررسی قرار دهیم و در آخر به شما بگوییم که این گوشی آیا ارزش خرید دارد یا خیر. پس تا آخر این بررسی همراه فروشگاه آریا باشید.`,
    desc2: null,
    pic1: null,
    pic2: null,
  },
  {
    title: "طراحی گوشی موبایل سامسونگ A52s",
    desc1: `طراحی گوشی سامسونگ A52s به ما یک گوشی باکیفیت در حد موبایل‌های پرچمداران را القا می‌کند که همین ویژگی باعث می‌شود این گوشی از دیگر گوشی‌های رقیب خودش سرتر شود. گلکسی A52s و A72 همانند هم از طراحی خاصی بهره‌مند شده‌اند تا بتوانند جوان پسندانه‌تر بنظر برسند که البته در این زمینه موفق نیز بوده اند. سامسونگ در این گوشی به خوبی توانسته خودی نشان دهد و با طراحی آن از همه جهات کاربر را به سمت خودش بکشاند. همانطور که کاملا نیز مشخص است، سامسونگ در طراحی A52 خود بیشتر تمرکز را برروی قاب پشتی قرار داده و این قاب پشتی آن نیز واقعا زیبا و خواستی شده است.
    قاب پشتی این دستگاه شبیه به پلاستیک مات است که کیفیت بالایی دارد و در چهار رنگ مشکی، سفید، بنفش و آبی روانه‌ی بازار شده است. سامسونگ در زمان عرضه این گوشی از کلمه Awesome استفاده کرده بود که به معنای بی‌نظیر است و واقعا نیز قاب این دستگاه بی‌نظیر طراحی شده. ظاهر قاب پشتی خاص است و شاهد یک زاویه نسبتاً تند و بسته تا وسط‌های فریم هستیم. طراحی ماژول دوربین عقب نیز کاملا شبیه به گوشی A51 همین شرکت بوده و شاهد ماژول چهارگانه هستیم.`,
    desc2: `
    در سمت راست این گوشی شاهد دکمه‌های ولوم و پاور هستیم که همانند دیگر گوشی‌ها طراحی و ساخته ‌شده‌اند. در این سمت از گوشی دیگر خبری از چیزی نیست و تنها شاهد دکمه‌های گفته شده هستیم. در سمت چپ A52s نیز چیزی به چشم نمی‌خورد و سامسونگ در طراحی آن تصمیم گرفته تا چپ و راست گوشی را خلوت بگذارد. در قاب پایینی گوشی نیز شاهد جک هدفون 3.5 میلی‌متری هستیم که واقعا خوشحال کننده هستش که هنوز این جک وجود دارد و جدای از جک شاهد پورت USB-C از نوع USB 2.0 هستیم که از OTG پشتیبانی می‌کند. همچنین اسپیکر نیز در این قسمت قرار گرفته است. لازم به ذکر است که بگویم اسپیکرهای استریویی استفاده شده در این گوشی واقعا قدرتمند است و صدایی بسیار خوب را به شما تقدیم می‌کند.
     در قسمت بالایی دستگاه نیز شاهد اسلات سیم‌کارت و کارت میکرو SD هستیم که بین سیم‌کارت دوم و کارت میکرو SD باید یکی را انتخاب کنید. در این قسمت از دستگاه دیگر شاهد چیزی نیستیم و سامسونگ سعی کرده تا گوشی را کمتر شلوغ کند. فریم دور تا دور دستگاه کمی شاید بی‌کیفیت به نظر برسد و زمانی که به فریم دور دستگاه نگاه می‌کنید احساس پلاستیکی بودن به شما دست خواهد داد. اما اصلا بدنه‌ی دستگاه از پلاستیک بی‌کیفیت ساخته نشده است و سامسونگ سعی کرده تا بهترین کیفیت پلاستیک را برای این گوشی استفاده کند.
     در قسمت جلویی دستگاه نیز شاهد یک نمایشگر 6.5 اینچی باریک و کوچک هستیم که خطوط اطراف آن بسیار کم است و سامسونگ سعی کرده است تا در این گوشی نهایت ظرافت را خرج کند. در قسمت بالایی نمایشگر شاهد اسپیکر هستیم و در پایین اسپیکر نیز دوربین سلفی به چشم می‌خورد که ظاهر بروزی همانند دیگر گوشی‌های جدید دارد. سنسور اثر انگشت نیز در زیر نمایشگر قرار گرفته که دقت بالایی دارد و عملکرد آن نیز خوب است اما بازهم به سرعت سنسورهای دیگر نمی‌رسد.
     درنهایت باید ذکر کنم که سامسونگ در طراحی این گوشی تاجایی که توانسته دست و دل بازی کرده و زمانی که شما گوشی را در دست می‌گیرید، حس یک گوشی پرچمدار به شما القا خواهد شد. وزن این گوشی 189 گرم است و طول، عرض و ضخامت به ترتیب به 159.9*75.1*8.4 میلی‌متر می‌رسد که واقعا خوب است. همچنین سامسونگ برروی نمایشگر این گوشی از محافظ گوریلا گلس 5 استفاده کرده که نسبت به گوریلا گلس 3 استفاده شده در گلکسی A51 مستحکم‌تر است. گوشی سامسونگ A52s دارای تأییدیه ضد آب و خاک IP67 می‌باشد.`,
    pic1: "https://static.ttaria.com/editor/2022/05/15/21e50f57c5259717ca32cad92268ef068e439dcea95d927fd405d2634311bde9.jpg",
    pic2: "https://static.ttaria.com/editor/2022/05/15/3809aabac5aac13bbf97d05d9e14438362807c0c18064c169d0fc082ca00b60e.jpg",
  },
  {
    title: "دوربین گوشی سامسونگ A52s",
    desc1: `همانطور که مشاهده می‌کنید، در هر دو گوشی A52s و A72 شاهد 4 لنز هستیم که در گلکسی A52sخبری از لنز تلفوتو نیست و سامسونگ به جای این لنز از لنز تشخیص عمق استفاده کرده که همین موضوع باعث شده است تا خبری از زوم‌ اپتیکال و زوم ۳۰ برابری در این گوشی نباشد. لنز اصلی این گوشی ۶۴ مگاپیکسل است و شاهد یک لنز اولترا واید ۱۲ مگاپیکسلی، دو لنز با سنسورهای ۵ مگاپیکسلی نیز هستیم
   حال قرار است به کیفیت عکاسی با گلکسی A52s بپردازیم، تصاویری که با گلکسی A52s ثبت کردیم واقعا باکیفیت بودند و رنگ بندی عالی نیز داشتند. تصاویر اولتراواید زاویه دید خوبی داشتند ثبت رنگ و جزئیات به خوبی صورت می‌گرفت. دوربین سلفی نیز کیفیت خوبی دارد و می‌تواند تصاویر سلفی خوبی را به ثبت برساند. اما در شب عکس‌ها دارای نویز هستند اما ثبت جزئیات خوب است و می‌توان تصاویر خوبی از دل آن‌ها خارج کرد. در ادامه به صورت مفصل به دوربین سلفی می‌پردازیم.
   جدای از دوربین، قطعا اپلیکیشن دوربین و رابط کاربری آن نیز مورد اهمیت می‌باشد. نرم افزار دوربین گوشی‌های سامسونگ مدت‌هاست که تغییری در خود ندیده است اما می‌توان از آن به عنوان یک نرم افزار با ثبات یاد کرد که رابط کاربری بسیار خوبی دارد و سامسونگ به همین دلیل دست به تغییر آن نزده. در اپلیکیشن این گوشی شاهد سطح بزرگنمایی نیم برابری 0.5x، یک برابری 1x، دو برابری برابری 2x، چهار برابری 4x و ده برابری 10x هستیم. لازم به ذکر است که این گوشی می‌تواند به صورت خودکار 30 صحنه را شناسایی کند که اگر صحنه‌ای شناسایی نشد سامسونگ این قابلبت را برای شما در نظر گرفته که بتوانید با گزینه بهبود صحنه این کار را به صورت دستی انجام دهید. همچنین در این اپ شاهد فلاش LED و فیلترهای متعددی نیز هستیم.
   زیاد وارد جزئیات نخواهیم شد اما باید ذکر کنم که کاربران می‌توانند از حالات متعددی نظیر AR Doodle، Food Mode و Single Take استفاده کنند. در رابط کاربری اپلیکیشن دوربین گلکسی A52s گزینه‌هایی نیز مانند HEIF برای عکسبرداری و HEVC برای فیلمبرداری وجود دارد که می‌توانید از آن‌ها استفاده کنید. همچنین شاهد عکسبرداری پیشرفته (Pro) و Video Capture نیز هستیم که امکان تغییر کوچکترین جزئیات و حالت پیش‌فرض عکسبرداری متفاوت را در اختیار ما قرار می‌دهند. با لنز اولترا واید حتی می‌تواند فیلم‌های 4K بگیرد و با دیگر دوستانتان به اشتراک بگذارید.
   حال نوبت تمرکز برروی دوربین سلفی است که چندی پیش ذکر کردم که به صورت کمی دقیق‌تر به بررسی آن می‌پردازیم. دوربین سلفی این گوشی می‌تواند تصاویری با کیفیت 3264*2448 پیکسلی به ثبت برساند که کیفیت خوبی دارد اما حالت عکسبرداری عریض در نظر گرفته شده. کیفیت کلی تصاویر خوب است و شاهد نویز کمی هستیم و HDR موجود باعث می‌شود برخی از عیوب نیز برطرف شوند.`,
    desc2: null,
    pic1: "https://static.ttaria.com/editor/2022/05/15/0d1aca46a082f5dd7b0e8f2b1c6e1fc3dbcbf0caa05e2af6aa94a44409391500.jpg",
    pic2: null,
  },
  {
    title: "باتری گلکسی A52s",
    desc1: `گوشی سامسونگ A52s از یک باتری با ظرفیت 4500 میلی‌آمپری استفاده کرده که انتظار می‌رفت شاهد یک باتری 5000 میلی‌آمپری باشیم. باتری این گوشی در پخش مداوم ویدئو توانسته ۸ ساعت دوام بیاورد که به صورت کلی رضایت بخش است. در حالت High Smoothness نیز این گوشی توانست 105 ساعت دوام داشته باشد که نسبت به نمایشگر و پردازنده‌ای که دارد خوب است.
    نمایشگر این گوشی در دو حالت و با نرخ بازسازی 90 هرتزی و 60 هرتزی می‌تواند کار کند که اگر از حالت 90 هرتزی آن استفاده کنید،‌ قطعا شارژ شما زودتر تمام می‌شود و منطقی‌تر است که برروی 60 هرتز قرار دهید. ما در زمان اتصال به وای فای و گشت و گذار در وب نیز این گوشی را تست کردیم و متوجه شدیم که مصرف زیادی ندارد و تنها نمایشگر آن است که مصرف انرژی زیادی دارد که بهتر است برروی 60 هرتز تنظیم شود.
      سامسونگ همراه با گلکسی A52s یک شارژر 15 واتی سریع و کابل مبدل USB-A به USB-C قرار داده است. A52s از ۰ تا ۵۰ درصد را در ۴۰ دقیقه شارژ می‌کند و اگر قصد داشته باشید که گوشی خود را ۱۰۰ درصد کنید تقریبا چیزی حدود ۱۰۰ دقیقه زمان می‌برد. گلکسی A52 از شارژ 25 واتی نیز پشتیبانی می‌کند که واقعا خوب است اما باید این شارژر را جداگانه خریداری کنید تا بتوانید از این ویژگی نیز استفاده کنید.`,
    desc2: null,
    pic1: null,
    pic2: null,
  },
  {
    title: "نمایشگر گوشی موبایل سامسونگ A52s",
    desc1: `سامسونگ در این گوشی از یک نمایشگر ۶.۵ اینچی استفاده کرده است. گوشی سامسونگ A52s نسبت به مدل‌های پیشین، دارای نمایشگر باکیفیت‌تری است  و از نرخ بازسازی 90 هرتزی در نمایشگر این گوشی استفاده شده است. همچنین سامسونگ در این گوشی از حداکثر روشنایی 800 نیتی استفاده کرده که واقعا خوب است. با روشنایی 800 نیتی در نمایشگر این گوشی دیگر در زیر نور خورشید و فضاهای با نور زیاد مشکلی در استفاده از گوشی نخواهید داشت.
    نمایشگر گلکسی A52s از نظر فضای رنگی sRGB نیز از دقت بالایی برخوردار است و رنگ‌ها در آن به خوبی نمایش داده می‌شوند. همچنین سامسونگ دو نمایه Vivid و Natural را در این گوشی قرار داده تا بتوانید نوع نور را تنظیم کنید. اما با تمامی این مواردی که ذکر کردیم، گلکسی A52s کیفیت HDR را دارا نیست، اما از Widevine L1 پشتیبانی می‌کند که می‌توان ویدئوها را با کیفیت Full HD مشاهده کرد. خداروشکر سامسونگ در این گوشی میان رده از ye Comfort Shield استفاده کرده تا بسته به زمان و میزان روشنایی محیط بتواند نور آبی را فیلتر کند. با این ویژگی دیگر چشمان شما کمتر آسیب می‌بیند و خسته می‌شود و امکان تغییر برای زمان‌‌های مختلف نیز وجود دارد.`,
    desc2: null,
    pic1: null,
    pic2: null,
  },
  {
    title: "اسپیکر گلکسی A52s",
    desc1: `یکی از مواردی که در گوشی سامسونگ A52s شاهد آن بودیم که واقعا قابل توجه بود بخش اسپیکر این گوشی بود. اسپیکر گلکسی A52s یک اسپیکر استریویی است که در پایین فریم گوشی قرار گرفته. میکروفون این گوشی نیز به نوعی کار همین اسپیکر را انجام می‌دهد که کمک این دو به هم باعث شده تا کیفیت صدای بسیار خوبی داشته باشیم. A52s جدا از اینکه اسپیکر استریویی دارد بلکه می‌تواند صداها را با کیفیت صدای Dolby Atmos نیز پخش کند. همچنین در این گوشی شاهد تکنولوژی Dolby Atmos for Gaming هستیم که صداهای بازی را با کیفیت بالاتری پخش می‌کند.`,
    desc2:
      "در تست‌هایی که ما انجام دادیم، Dolby Atmos به خوبی فرکانس‌های صدایی را ارتقا می‌دهد و کیفیت صدا را بالا نگه می‌دارد. درکل در قسمت اسپیکر، سامسونگ در این گوشی میان رده چیزی کم نگذاشته و سعی داشته است نسبت به مبلغی که پرداخت می‌کنید، کیفیت صدا با تکنولوژی‌های روز را دریافت کنید که هم در بازی‌ها و هم در تماشای فیلم و سریال و موزیک حسابی شما را غرق در خود می‌کند.",
    pic1: "https://static.ttaria.com/editor/2022/05/15/c100d961ac1da2bc39f8f522648b725fccd8e0c05170f95d0b19f2374e37d749.jpg",
    pic2: null,
  },
  {
    title: "بخش نرم افزار گلکسی A52s",
    desc1: `در بخش نرم افزاری نیز انتظار داریم که شاهد اندروید ۱۱ و One UI 3.1 باشیم که خداروشکر هستیم. گوشی سامسونگ A52s به صورت پیش فرض از اندروید 11 و رابط کاربری One UI 3.1 پشتیبانی می‌کند و کمپانی سامسونگ نیز خبر داده که با خرید این گوشی به مدت ۳ سال آپدیت‌های مربوطه را دریافت خواهید کرد. پس می‌توان گفت که این گوشی تا سال 2023 به اندروید 14 آپدیت خواهد شد.`,
    desc2: null,
    pic1: null,
    pic2: null,
  },
  {
    title: "عملکرد سخت افزاری گلکسی A52s",
    desc1: `سامسونگ در گلکسی A52s خود از پردازنده اسنپدراگون 720G استفاده کرده که از این چیپست در گوشی A72 نیز استفاده شده است. اسنپدراگون 720G آنقدر پردازنده قدرتمندی است که می‌تواند به راحتی و بدون داغ شدن تمامی اپ‌ها و بازی‌ها را اجرا کند. البته باید ذکر کنم که در بازی‌های خیلی سنگین شاهد داغ شدن هستیم که زیاد اذیت نمی‌کند. پردازنده این گوشی بسیار قدرتمند می‌باشد و همانطور که گفته شد می‌تواند بازی‌ها را به راحتی اجرا کند اما با همین حدود قیمت گوشی سامسونگ A52s می‌توانید گوشی‌هایی نظیر Galaxy M51 و OnePlus Nord را خریداری کنید که دارای پردازنده‌ای قوی‌تر هستند. Galaxy M51 از اسنپدراگون 730G و گوشی OnePlus Nord از تراشه‌های اسنپدراگون 690G بهره برده‌اند که پردازنده‌های بسیار قوی هستند.
      خب به همین پردازنده اسنپدراگون 720G می‌پردازیم که متشکل از دو هسته Kryo 465 Gold با سرعت 2.3 گیگاهرتزی و شش هسته Kryo 465 Silver با سرعت 1.8 گیگاهرتزی است. این پردازنده در تست‌هایی که انجام شده توانسته است، سربلند بیرون بیاید. سامسونگ همیشه سعی کرده تا از بهترین پردازنده‌ها در محصولاتش استفاده کند و همین موضوع باعث شده تا محصولاتش همیشه با ثبات باشند.`,
    desc2: `در تست‌هایی که گرفتیم، پردازنده اسنپدراگون 720G گوشی گلکسی A52s سامسونگ توانست به خوبی عمل کند و با رابط کاربری فوق‌العاده‌ای که دارد به خوبی و بدون هیچ اتلاف وقت و انرژی می‌تواند پاسخگوی نیاز شما باشد. لازم به ذکر است که به واسطه‌ی این چیپ قوی و قدرتمند، شاهد فرم نوسازی 90 هرتزی و فیلمبرداری یاکیفیت بالای 4K هستیم.
        در کل باید ذکر کنم که گلکسی A52s سامسونگ در بخش سخت افزاری چیزی کم نگذاشته و اگر قصد داشته باشید با گوشی خود کارهایی نظیر طراحی و گرافیکی انجام دهید این گوشی به خوبی جوابگوی نیازهای شما خواهد بود. همچنین به واسطه رم بالا و پردازنده قوی، این گوشی مناسب گیمرهای عزیز نیز می‌باشد. همانطور که در ابتدای بررسی نیز ذکر کردیم، سامسونگ این گوشی را برای جوانان طراحی کرده و همین سخت افزار فوق العاده باعث شده است تا خیلی از جوانان و نوجوانان که بیشتر با گوشی بازی می‌کنند به سراغ آن بروند.`,
    pic1: "https://static.ttaria.com/editor/2022/05/15/36b0bf49c0a89841bee262f7a582e46f8cfbae136d6cf168b8a1b733d1116b60.jpg",
    pic2: null,
  },
  {
    title: "بررسی ارزش خرید گوشی موبایل سامسونگ A52s",
    desc1: `گوشی سامسونگ A52s یک گوشی میان رده با قابلیت‌های بسیار زیاد است که جوانان را هدف قرار داده است. این گوشی با طراحی منحصربفرد خودش و جذابیت و حس و حال پرچمداران، توانسته بهترین حس را به کاربر انتقال دهد. دوربین این گوشی نیز با بالاترین کیفیت می‌تواند در دستان شما باشد و با آن می‌توانید تصاویر 4k را ثبت کنید. دوربین این گوشی در کنار سخت افزار آن ترکیب فوق العاده‌ای رو رقم زده‌اند که حتی به دنبال یک گوشی مخصوص فیلمبرداری هستین، دوربین این گوشی می‌تواند یکی از انتخاب‌ها باشد.
    سامسونگ در بخش اسپیکر نیز چیزی کم نگذاشته است و سعی کرده است تا بهترین اسپیکر را در این گوشی میان رده قرار دهد تا کیفیت صدای خوبی را به خریداران هدیه دهد. در بخش سخت افزار و نرم افزار نیز باید ذکر کنم که همه چیز درجه یک است و سامسونگ سعی کرده است بهترین چیپ ممکن را در این گوشی میان رده قرار دهد. این گوشی با اندروید ۱۱ و One UI 3.1 روانه‌ی بازار شده است و سامسونگ وعده داده تا ۳ سال آپدیت‌های لازم را دریافت می‌کند.
    درنهایت باید ذکر کنم که اگر به دنبال یک گوشی میان رده با قابلیت‌های یک گوشی پرچمدار هستید، گلکسی A52s سامسونگ بهترین انتخاب برای شماست. قطعا با در دست گرفتن این گوشی، حس و حال یک گوشی پرچمدار را خواهید داشت نه یک گوشی میان رده! نسبت به مبلغی که پرداخت می‌کنید و کیفیتی که تحویل می‌گیرید این گوشی انتخاب مناسبی که طرفداران بسیار زیادی نیز دارد. اگر قصد خرید گوشی و چک کردن قیمت گوشی را دارید، می‌توانید در فروشگاه آریا اقدام به چک کردن قیمت، بررسی و خرید فرمایید.`,
    desc2: null,
    pic1: null,
    pic2: null,
  },
];
const PanelSidebarItems: PanelSidebarItemsType = {
  BaseItems: [
    {
      txt: "خانه",
      link: "",
      icon: AiOutlineHome,
    },
    {
      txt: "محصول",
      link: "addProduct",
      icon: BsPlusLg,
    },
    {
      txt: "ناموجود",
      link: "unAvailable",
      icon: MdInventory,
    },
    {
      txt: "غیرفعال",
      link: "disable",
      icon: GiSightDisabled,
    },
    {
      txt: "پیشرفته",
      link: "advanceSearch",
      icon: FaSearchengin,
    },
  ],
  GroupItems: [
    {
      txt: "موبایل",
      link: "mobiles",
      icon: TbDeviceMobile,
    },
    {
      txt: "ساعت",
      link: "watches",
      icon: TbDeviceWatch,
    },
    {
      txt: "اسپیکر",
      link: "speakers",
      icon: BsSpeakerFill,
    },
  ],
};
export {
  NavbarListItemsData,
  ProductsBannersImages,
  ProductsBannersBetweenImages,
  HomeLastReadableData,
  HomeRedableData,
  FooterData,
  ProductDescriptionData,
  PanelSidebarItems,
};
