// ══ DATA ══
const T={
  ru:{cert:'Сертификат ГОСТ 23833-95',nav_home:'Главная',nav_products:'Продукты',nav_adv:'Преимущества',nav_tech:'Технические данные',nav_projects:'Проекты',nav_contact:'Контакты',nav_cta:'Запросить цену',hero_title_blue:'Профессиональное тепловое оборудование и кухонная посуда',hero_desc:'ООО «NS-plus» — единственный производитель торгово-технологического оборудования и экологически чистой кухонной посуды из нержавеющей стали в Центральной Азии.',hero_btn1:'Смотреть каталог',hero_btn2:'Позвонить нам',feat_temp:'Рабочая температура',feat_warranty_val:'5 лет',feat_warranty:'Гарантия',feat_delivery_val:'В сборе',feat_delivery:'Доставка',feat_custom_val:'Индивидуальный проект',feat_custom:'Любые размеры',badge_title:'Сертифицировано',stat1:'Довольных клиентов',stat2:'Лет опыта',stat3:'Готовых проектов',stat4:'Тех. поддержка',cat_label:'КАТАЛОГ ПРОДУКЦИИ',cat_title:'Всё оборудование NS Plus',cat_sub:'Нажмите на любое изделие — увидите характеристики и сможете позвонить',tab_700:'700 серия',tab_900:'Плиты 900',tab_classic:'Раздача Classic',tab_modern:'Раздача Modern',tab_cold:'Холод. камеры',tab_mini:'Minicella',tab_kp:'КП-130',tab_cis:'Цистерны',adv_label:'ПРЕИМУЩЕСТВА',adv_title:'Почему NS Plus?',adv_sub:'Наши продукты обеспечивают максимальную эффективность и надёжность.',adv1_title:'Соединение паз-гребень',adv1_desc:'Герметичность и надёжная теплоизоляция. Можно многократно разбирать и собирать.',adv2_title:'ППУ теплоизоляция',adv2_desc:'Коэффициент теплопроводности 0.022 Вт/м²·К.',adv3_title:'Полный монтажный комплект',adv3_desc:'Поставляется со всеми необходимыми деталями и материалами.',adv4_title:'Гарантия 5 лет',adv4_desc:'На все наши продукты предоставляется 5-летняя гарантия.',adv5_title:'Техподдержка 24/7',adv5_desc:'Наши специалисты всегда готовы решить любую проблему.',partners_title:'Наши партнёры',step1_title:'Обращение',step1_desc:'Вы описываете свои потребности, мы рекомендуем лучшую модель.',step2_title:'Расчёт',step2_desc:'Быстрый расчёт комплектации с помощью нашей программы.',step3_title:'Доставка',step3_desc:'Камера доставляется в разобранном виде с полным комплектом.',step4_title:'Монтаж',step4_desc:'Профессиональный монтаж и тестирование. Гарантия 5 лет.',footer_slogan:'Правильный выбор!',footer_menu:'Меню',footer_contact:'Контакты',footer_social:'Социальные сети',footer_rights:'Все права защищены.',call_now:'+998 (33) 702-07-07 — Позвонить',desc_700:'Электромармит кухонный настольный типа ЭМК предназначен для кратковременного хранения первых блюд в горячем состоянии (в гастроёмкостях объёмом 6 л) и их раздачи потребителю. Устанавливается на подставку или стол. Имеет плавную регулировку температуры воды. Слив воды осуществляется через кран, расположенный на передней панели мармита. Оснащён регулируемыми по высоте ножками.',desc_900:'Электромармит кухонный настольный типа ЭМК предназначен для кратковременного хранения в горячем состоянии первых и вторых блюд в гастроёмкостях, а также для их раздачи потребителю. Имеет плавную регулировку температуры воды. Слив воды осуществляется через кран, расположенный на передней панели мармита. Оснащён регулируемыми по высоте ножками.',desc_cold:'Холодильные камеры – модульные сборно-разборные конструкции из сэндвич-панелей, предназначены для поддержания температуры, создаваемой внутри камер холодильными машинами. Камеры могут эксплуатироваться при температуре окружающей среды от -30 до +40С°.',desc_kp:'Форма: эллиптическая, с цилиндрическими днищами, без теплоизоляции. Материал: пищевая нержавеющая сталь AISI 304 или аналог. Волнорез: установлен внутри для стабилизации жидкости при движении. Сливной патрубок: оснащён шаровым краном Ду-40. Горловина: снабжена откидной крышкой и дыхательным клапаном.'},
  uz:{cert:'GOST 23833-95 Sertifikati',nav_home:'Bosh sahifa',nav_products:'Mahsulotlar',nav_adv:'Afzalliklar',nav_tech:"Texnik ma'lumot",nav_projects:'Loyihalar',nav_contact:'Aloqa',nav_cta:"Narx so'rash",hero_title_blue:'Professional issiqlik uskunalari va oshxona idishlari',hero_desc:"«NS-plus» MChJ — Markaziy Osiyoda savdo-texnologik uskunalar va ekologik toza zanglamaydigan po'latdan oshxona idishlari ishlab chiqaruvchi yagona korxona.",hero_btn1:"Katalogni ko'rish",hero_btn2:"Qo'ng'iroq qilish",feat_temp:'Ish harorati',feat_warranty_val:'5 yil',feat_warranty:'Kafolat',feat_delivery_val:"Yig'ilgan holda",feat_delivery:'Yetkazib berish',feat_custom_val:'Individual loyiha',feat_custom:"Har qanday o'lcham",badge_title:'Sertifikatlangan',stat1:'Mamnun mijozlar',stat2:'Yil tajriba',stat3:'Tayyor loyiha',stat4:'Texnik yordam',cat_label:'MAHSULOTLAR KATALOGI',cat_title:'NS Plus barcha uskunalari',cat_sub:"Istalgan mahsulot rasmiga bosing — xarakteristikasini ko'ring",tab_700:'700-seriya',tab_900:'Plitalar 900',tab_classic:'Classic liniya',tab_modern:'Modern liniya',tab_cold:'Sovutish kameral.',tab_mini:'Minicella',tab_kp:'KP-130',tab_cis:'Sisternalar',adv_label:'AFZALLIKLAR',adv_title:'Nima uchun NS Plus?',adv_sub:"Mahsulotlarimiz maksimal samaradorlik va ishonchlilik ta'minlaydi.",adv1_title:"Ship-paz ulanishi",adv1_desc:"Germetiklik va ishonchli termoizolyatsiya. Bir necha bor yig'ib-yechish mumkin.",adv2_title:"PPU termoizolyatsiya",adv2_desc:"Issiqlik o'tkazuvchanlik koeffitsienti 0.022 Vt/m²·K.",adv3_title:"To'liq montaj to'plami",adv3_desc:"Barcha kerakli detal va materiallar bilan yetkazib beriladi.",adv4_title:"5 yil kafolat",adv4_desc:"Barcha mahsulotlarimizga 5 yillik kafolat beriladi.",adv5_title:"24/7 texnik yordam",adv5_desc:"Har qanday muammo uchun mutaxassislarimiz doimo tayyor.",partners_title:'Bizning Hamkorlar',step1_title:'Murojaat',step1_desc:"Ehtiyojlaringizni aytasiz, biz eng yaxshi modelni tavsiya qilamiz.",step2_title:'Hisoblash',step2_desc:"Dasturimiz yordamida tez hisob-kitob.",step3_title:'Yetkazib berish',step3_desc:"To'liq to'plam bilan yig'ilmagan holda yetkaziladi.",step4_title:"O'rnatish",step4_desc:"Professional o'rnatish va sinov. 5 yillik kafolat.",footer_slogan:"To'g'ri tanlov!",footer_menu:'Menu',footer_contact:'Aloqa',footer_social:'Ijtimoiy tarmoqlar',footer_rights:'Barcha huquqlar himoyalangan.',call_now:"+998 (33) 702-07-07 — Qo'ng'iroq",desc_700:"EMK tipidagi oshxona stol usti elektr-marmiti birinchi taomlarni qisqa muddatli issiq holda saqlash (6 litrlik gastronorm idishlarda) va ularni iste'molchiga tarqatish uchun mo'ljallangan.",desc_900:"EMK tipidagi oshxona stol usti elektr-marmiti birinchi va ikkinchi taomlarni gastronorm idishlarda qisqa muddatli issiq holda saqlash hamda iste'molchiga tarqatish uchun mo'ljallangan.",desc_cold:"Sovutish kameralari — sandwich-panellardan yig'iladigan va demontiraj qilinadigan modulli konstruksiyalar. Kameralar -30 dan +40°C gacha bo'lgan atrof-muhit haroratida ishlatilishi mumkin.",desc_kp:"Shakli: elliptik, silindrsimon tublar bilan. Materiali: AISI 304 oziq-ovqat sifatidagi zanglamaydigan po'lat. To'lqin o'chiruvchi ichkariga o'rnatilgan. Qochirish shtutser: Du-40 shar krani bilan jihozlangan."},
  en:{cert:'GOST 23833-95 Certificate',nav_home:'Home',nav_products:'Products',nav_adv:'Advantages',nav_tech:'Technical Data',nav_projects:'Projects',nav_contact:'Contact',nav_cta:'Request Price',hero_title_blue:'Professional thermal equipment and kitchen utensils',hero_desc:'NS-plus LLC is the only manufacturer of commercial food-service equipment and eco-friendly stainless-steel kitchenware in Central Asia.',hero_btn1:'View Catalogue',hero_btn2:'Call Us',feat_temp:'Working temperature',feat_warranty_val:'5 years',feat_warranty:'Warranty',feat_delivery_val:'Pre-assembled',feat_delivery:'Delivery',feat_custom_val:'Custom design',feat_custom:'Any size',badge_title:'Certified',stat1:'Happy clients',stat2:'Years experience',stat3:'Finished projects',stat4:'Tech. support',cat_label:'PRODUCT CATALOGUE',cat_title:'All NS Plus Equipment',cat_sub:'Click any product to view specifications',tab_700:'700 Series',tab_900:'Cookers 900',tab_classic:'Classic Line',tab_modern:'Modern Line',tab_cold:'Cold Rooms',tab_mini:'Minicella',tab_kp:'KP-130',tab_cis:'Cisterns',adv_label:'ADVANTAGES',adv_title:'Why NS Plus?',adv_sub:'Our products deliver maximum efficiency and reliability.',adv1_title:'Tongue & Groove',adv1_desc:'Airtight seal and reliable thermal insulation. Can be assembled and disassembled multiple times.',adv2_title:'PU Foam Insulation',adv2_desc:'Thermal conductivity coefficient 0.022 W/m²·K.',adv3_title:'Complete Installation Kit',adv3_desc:'Delivered with all necessary parts and materials.',adv4_title:'5-Year Warranty',adv4_desc:'All our products come with a 5-year warranty.',adv5_title:'24/7 Technical Support',adv5_desc:'Our specialists are always ready to resolve any issue.',partners_title:'Our Partners',step1_title:'Enquiry',step1_desc:"Tell us your requirements and we'll recommend the best model.",step2_title:'Calculation',step2_desc:'Fast specification using our software.',step3_title:'Delivery',step3_desc:'Delivered disassembled with the full installation kit.',step4_title:'Installation',step4_desc:'Professional installation and testing. 5-year warranty.',footer_slogan:'The right choice!',footer_menu:'Menu',footer_contact:'Contact',footer_social:'Social Media',footer_rights:'All rights reserved.',call_now:'+998 (33) 702-07-07 — Call Now',desc_700:'The EMK-type countertop bain-marie is designed for short-term hot storage of first courses in 6-litre GN containers. Smooth temperature control, front drain tap, height-adjustable feet.',desc_900:'The EMK-type countertop bain-marie stores first and second courses in GN containers. Smooth temperature control, front drain tap, height-adjustable feet.',desc_cold:'Cold rooms are modular prefabricated sandwich-panel structures maintaining temperature from -30 to +40°C ambient.',desc_kp:'Elliptical shape, cylindrical ends, no insulation. Material: AISI 304. Internal baffle for stability. DN-40 ball valve drain. Hinged lid with breather valve.'}
  };
  
  const SLD=new Set(['plity900','cold','cistern']);
  const TABS=[{k:'tab_700',id:'teplo700'},{k:'tab_900',id:'plity900'},{k:'tab_classic',id:'classic'},{k:'tab_modern',id:'modern'},{k:'tab_cold',id:'cold'},{k:'tab_mini',id:'minicella'},{k:'tab_kp',id:'kp130'},{k:'tab_cis',id:'cistern'}];
  
  // Shared specs helper
  const sp3=(ru,uz,en)=>({ru,uz,en});
  
  const CAT=[
   {id:'teplo700',k:'tab_700',c:'#1a56db',dk:'desc_700',
    t:{ru:'Тепловая линия 700 серия',uz:'700-seriya issiqlik liniyasi',en:'700 Series Thermal Line'},
    items:[
     {img:'./images/1.jpg',b:'ЭМК-40Ш',t:{ru:'Электромармит ЭМК-40Ш',uz:'Elektromarmit EMK-40Sh',en:'Bain-Marie EMK-40Sh'},d:{ru:'Напольный электромармит, нижний шкаф для инвентаря.',uz:"Polga o'rnatiladigan bain-marie. Pastki shkaf.",en:'Floor-standing bain-marie. Lower storage cabinet.'},s:{ru:['Тип: Напольный','Нижний шкаф: есть','Регулировка: плавная','Слив: кран спереди','Ножки: регулируемые'],uz:["Turi: Polga o'rnatiladigan",'Pastki shkaf: mavjud','Rostlash: silliq','Oqim: old kran','Oyoqlar: sozlanadi'],en:['Type: Floor-standing','Lower cabinet: yes','Control: smooth','Drain: front tap','Feet: adjustable']}},
     {img:'./images/2.jpg',b:'ЭМК-40Н',t:{ru:'Электромармит ЭМК-40Н',uz:'Elektromarmit EMK-40N',en:'Countertop Bain-Marie EMK-40N'},d:{ru:'Настольный, гастроёмкости 6 л.',uz:"Stol usti, 6 l GN idishlar.",en:'Countertop, 6 L GN containers.'},s:{ru:['Тип: Настольный','Объём: 6 л','Регулировка: плавная','Слив: кран спереди','Ножки: регулируемые'],uz:['Turi: Stol usti','Hajm: 6 l','Rostlash: silliq','Oqim: old kran','Oyoqlar: sozlanadi'],en:['Type: Countertop','Volume: 6 L','Control: smooth','Drain: front tap','Feet: adjustable']}},
     {img:'./images/3.jpg',b:'ЭМК-80Ш',t:{ru:'Электромармит ЭМК-80Ш (двойной)',uz:'Elektromarmit EMK-80Sh (juft)',en:'Bain-Marie EMK-80Sh (Double)'},d:{ru:'Напольный двойной, первые и вторые блюда.',uz:"Juft polga o'rnatiladigan bain-marie.",en:'Floor-standing double bain-marie.'},s:{ru:['Тип: Напольный, двойной','Нижний шкаф: есть','Габариты: 800×600×940 мм','Регулировка: плавная','Ножки: регулируемые'],uz:["Turi: Polga o'rnatiladigan, juft",'Pastki shkaf: mavjud',"O'lcham: 800×600×940 mm",'Rostlash: silliq','Oyoqlar: sozlanadi'],en:['Type: Floor-standing double','Lower cabinet: yes','Dims: 800×600×940 mm','Control: smooth','Feet: adjustable']}},
     {img:'./images/4.jpg',b:'ЭПК-27Н',t:{ru:'Плита ЭПК-27Н (настольная)',uz:"Plita EPK-27N (stol usti)",en:'Cooker EPK-27N (Countertop)'},d:{ru:'2-конфорочная настольная, 3 ТЭНа на конфорку.',uz:'2 konforkalik stol usti plita. 3 TEN.',en:'2-burner countertop. 3 elements per burner.'},s:{ru:['Тип: Настольный','Конфорки: 2 чугунных','ТЭН/конфорка: 3 шт','Нагрев: быстрый','Ножки: регулируемые'],uz:['Turi: Stol usti',"Konforka: 2 ta cho'yan",'TEN/konforka: 3 ta','Qizdirish: tez','Oyoqlar: sozlanadi'],en:['Type: Countertop','Burners: 2 cast-iron','Elements/burner: 3','Heating: fast','Feet: adjustable']}},
     {img:'./images/5.jpg',b:'ЭПК-27Ш',t:{ru:'Плита ЭПК-27Ш (напольная)',uz:"Plita EPK-27Sh (polga o'rnatiladigan)",en:'Cooker EPK-27Sh (Floor-standing)'},d:{ru:'Напольная 2-конфорочная с нижним шкафом.',uz:"Quyi shkafli polga o'rnatiladigan plita.",en:'Floor-standing 2-burner with lower cabinet.'},s:{ru:['Тип: Напольный','Конфорки: 2 чугунных','ТЭН/конфорка: 3 шт','Нижний шкаф: есть','Ножки: регулируемые'],uz:["Turi: Polga o'rnatiladigan",'Konforka: 2 ta','TEN/konforka: 3 ta','Pastki shkaf: mavjud','Oyoqlar: sozlanadi'],en:['Type: Floor-standing','Burners: 2 cast-iron','Elements/burner: 3','Lower cabinet: yes','Feet: adjustable']}},
     {img:'./images/6.jpg',b:'ЭМК-80Н',t:{ru:'Электромармит ЭМК-80Н (4-секц.)',uz:"Elektromarmit EMK-80N (4-bo'lim)",en:'Countertop Bain-Marie EMK-80N (4-well)'},d:{ru:'Настольный 4-секционный, плавная регулировка.',uz:"4 bo'limli stol usti bain-marie.",en:'Countertop 4-section bain-marie.'},s:{ru:['Тип: Настольный, 4 секции','Регулировка: плавная','Слив: кран спереди','Ножки: регулируемые'],uz:["Turi: Stol usti, 4 bo'lim",'Rostlash: silliq','Oqim: old kran','Oyoqlar: sozlanadi'],en:['Type: Countertop, 4-section','Control: smooth','Drain: front tap','Feet: adjustable']}}
    ]},
   {id:'plity900',k:'tab_900',c:'#0f4fa8',dk:'desc_900',
    t:{ru:'Плиты A 900 серия',uz:'A 900 seriyali plitalar',en:'A 900 Series Cookers'},
    items:[
     {img:'./images/2.jpg',b:'ЭПК-47ЖШ',t:{ru:'Плита 4-конфорочная + духовка ЭПК-47ЖШ',uz:'4 konforkalik pechli plita EPK-47ZhSh',en:'4-Burner + Oven EPK-47ZhSh'},d:{ru:'4 конфорки 900 серии + GN 2/1. Конвекция, пар. 65–270°C.',uz:"900-seriya, 4 konforka + GN 2/1 pech. Konveksiya, bug'.",en:'900-series 4 burners + GN 2/1 oven. Convection, steam.'},s:{ru:['Конфорки: 4 (900-серия)','Духовка: GN 2/1','Температура: 65–270°C','Конвекция и пар: есть','Ножки: регулируемые'],uz:['Konforka: 4 ta (900-seriya)','Pech: GN 2/1','Harorat: 65–270°C',"Konveksiya va bug': mavjud",'Oyoqlar: sozlanadi'],en:['Burners: 4 (900-series)','Oven: GN 2/1','Temp: 65–270°C','Convection & steam: yes','Feet: adjustable']}},
     {img:'./images/3.jpg',b:'ЭПК-47Н',t:{ru:'Плита 4-конфорочная настольная ЭПК-47Н',uz:'4 konforkalik stol usti plita EPK-47N',en:'Countertop 4-Burner EPK-47N'},d:{ru:'Настольная 4-конфорочная 900 серии. 0,36 м².',uz:'900-seriya stol usti plita. 0,36 m².',en:'900-series countertop 4-burner. 0.36 m².'},s:{ru:['Тип: Настольный','Конфорки: 4 (900-серия)','Площадь: 0,36 м²','Ножки: регулируемые'],uz:['Turi: Stol usti','Konforka: 4 ta','Yuza: 0,36 m²','Oyoqlar: sozlanadi'],en:['Type: Countertop','Burners: 4 (900-series)','Area: 0.36 m²','Feet: adjustable']}},
     {img:'./images/4.jpg',b:'ЭПК-47П',t:{ru:'Плита 4-конфорочная на подставке ЭПК-47П',uz:'4 konforkalik stendli plita EPK-47P',en:'4-Burner on Stand EPK-47P'},d:{ru:'4 конфорки, без духовки, нержавеющая полка.',uz:"Pechsiz 4 konforkalik plita. Ochiq pastki javon.",en:'4-burner, no oven. Open stainless lower shelf.'},s:{ru:['Конфорки: 4 (900-серия)','Площадь: 0,36 м²','Нижняя полка: нержавеющая','Ножки: регулируемые'],uz:['Konforka: 4 ta','Yuza: 0,36 m²','Pastki javon: zanglamaydigan','Oyoqlar: sozlanadi'],en:['Burners: 4 (900-series)','Area: 0.36 m²','Lower shelf: stainless','Feet: adjustable']}},
     {img:'./images/5.jpg',b:'ЭП-6ЖП',t:{ru:'Плита 6-конфорочная + духовка ЭП-6ЖП',uz:'6 konforkalik pechli plita EP-6ZhP',en:'6-Burner + Oven EP-6ZhP'},d:{ru:'6 конфорок + духовка. 0,72 м². Боковые столешницы.',uz:'6 konforka + pech. 0,72 m². Yon stol yuzalari.',en:'6 burners + oven. 0.72 m². Side worktops.'},s:{ru:['Конфорки: 6','Площадь: 0,72 м²','Духовка: 65–270°C','Столешницы: 2 шт'],uz:['Konforka: 6 ta','Yuza: 0,72 m²','Pech: 65–270°C','Yon stollar: 2 ta'],en:['Burners: 6','Area: 0.72 m²','Oven: 65–270°C','Side worktops: 2']}},
     {img:'./images/6.jpg',b:'ЭП-6П',t:{ru:'Плита 6-конфорочная на подставке ЭП-6П',uz:'6 konforkalik stendli plita EP-6P',en:'6-Burner on Stand EP-6P'},d:{ru:'6 конфорок без духовки. Боковые столешницы.',uz:"Pechsiz 6 konforkalik plita. Yon stol yuzalari.",en:'6-burner, no oven. Side worktops.'},s:{ru:['Конфорки: 6','Площадь: 0,72 м²','Столешницы: 2 шт','Нижняя полка: металл'],uz:['Konforka: 6 ta','Yuza: 0,72 m²','Yon stollar: 2 ta','Pastki javon: metall'],en:['Burners: 6','Area: 0.72 m²','Side worktops: 2','Lower shelf: metal']}},
     {img:'./images/3.jpg',b:'ЭП-6П',t:{ru:'Плита 6-конфорочная на подставке ЭП-6П',uz:'6 konforkalik stendli plita EP-6P',en:'6-Burner on Stand EP-6P'},d:{ru:'6 конфорок без духовки. Боковые столешницы.',uz:"Pechsiz 6 konforkalik plita.",en:'6-burner, no oven. Side worktops.'},s:{ru:['Конфорки: 6','Площадь: 0,72 м²','Столешницы: 2 шт','Нижняя полка: металл'],uz:['Konforka: 6 ta','Yuza: 0,72 m²','Yon stollar: 2 ta','Pastki javon: metall'],en:['Burners: 6','Area: 0.72 m²','Side worktops: 2','Lower shelf: metal']}}
    ]},
   {id:'classic',k:'tab_classic',c:'#b45309',
    t:{ru:'Линия раздачи Classic',uz:'Classic ovqat ulash liniyasi',en:'Classic Food Service Line'},
    items:[
     {img:'./images/5.jpg',b:'ПМЭС-70к',t:{ru:'Мармит 1-х блюд ПМЭС-70к',uz:'Birinchi taomlar marmiti PMES-70k',en:'First Course Bain-Marie PMES-70k'},d:{ru:'30–285°C. Полка с подсветкой.',uz:'30–285°C. Yoritilgan ustki javon.',en:'30–285°C. Illuminated shelf.'},s:{ru:['Температура: 30–285°C','Полка: с подсветкой','Направляющие для подносов: есть','Ножки: регулируемые'],uz:['Harorat: 30–285°C','Javon: yoritilgan',"Tovoq yo'naltirgichlari: mavjud",'Oyoqlar: sozlanadi'],en:['Temp: 30–285°C','Shelf: illuminated','Tray guides: yes','Feet: adjustable']}},
     {img:'./images/6.jpg',b:'ПМЭС-70К-01',t:{ru:'Мармит 1-х блюд ПМЭС-70К-01',uz:'Marmit PMES-70K-01',en:'Bain-Marie PMES-70K-01'},d:{ru:'30–285°C. Ширина 1500 мм.',uz:'30–285°C. Kenglik 1500 mm.',en:'30–285°C. Width 1500 mm.'},s:{ru:['Температура: 30–285°C','Ширина: 1500 мм','Полка: с подсветкой','Ножки: регулируемые'],uz:['Harorat: 30–285°C','Kenglik: 1500 mm','Javon: yoritilgan','Oyoqlar: sozlanadi'],en:['Temp: 30–285°C','Width: 1500 mm','Shelf: illuminated','Feet: adjustable']}},
     {img:'./images/1.jpg',b:'ПМЭС-70к-60',t:{ru:'Мармит 2-х блюд ПМЭС-70к-60',uz:'Ikkinchi taomlar marmiti PMES-70k-60',en:'Second Course Bain-Marie PMES-70k-60'},d:{ru:'Горячий воздух. Нижний нейтральный шкаф. 30–85°C.',uz:"Issiq havo. Pastki neytral shkaf. 30–85°C.",en:'Hot air. Lower neutral cabinet. 30–85°C.'},s:{ru:['Температура: 30–85°C','Обогрев: горячий воздух','Нижний шкаф: нейтральный','Ножки: регулируемые'],uz:['Harorat: 30–85°C','Isitish: issiq havo','Pastki shkaf: neytral','Oyoqlar: sozlanadi'],en:['Temp: 30–85°C','Heating: hot air','Lower cabinet: neutral','Feet: adjustable']}},
     {img:'./images/2.jpg',b:'ПТЭ-70к-80',t:{ru:'Подогреватель тарелок ПТЭ-70к-80',uz:'Tarelka isitgich PTE-70k-80',en:'Plate Warmer PTE-70k-80'},d:{ru:'30–60°C. 40 тарелок. Пружинный подъём.',uz:"30–60°C. 40 ta tarelka. Yay ko'tarish.",en:'30–60°C. 40 plates. Spring lift.'},s:{ru:['Температура: 30–60°C','Загрузка: 40 тарелок','Механизм: пружинный','Ножки: регулируемые'],uz:['Harorat: 30–60°C','Tarelka: 40 ta',"Mexanizm: yay ko'tarish",'Oyoqlar: sozlanadi'],en:['Temp: 30–60°C','Capacity: 40 plates','Mechanism: spring lift','Feet: adjustable']}},
     {img:'./images/3.jpg',b:'ПВТ-70К',t:{ru:'Витрина тепловая ПВТ-70К',uz:'Issiqlik vitrinasi PVT-70K',en:'Heated Display PVT-70K'},d:{ru:'Хлебобулочные изделия. Вентилятор, подсветка.',uz:"Non mahsulotlari. Ventilyator, yoritish.",en:'Bakery products. Fan, lighting.'},s:{ru:['Обогрев: пар/воздух','Вентилятор: есть','Подсветка: есть','Ножки: регулируемые'],uz:["Isitish: bug'/havo",'Ventilyator: mavjud','Yoritish: mavjud','Oyoqlar: sozlanadi'],en:['Heating: steam/air','Fan: yes','Lighting: yes','Feet: adjustable']}},
     {img:'./images/1.jpg',b:'ПВТ-70К',t:{ru:'Витрина тепловая ПВТ-70К',uz:'Issiqlik vitrinasi PVT-70K',en:'Heated Display PVT-70K'},d:{ru:'Хлебобулочные изделия. Вентилятор, подсветка.',uz:"Non mahsulotlari. Ventilyator, yoritish.",en:'Bakery products. Fan, lighting.'},s:{ru:['Обогрев: пар/воздух','Вентилятор: есть','Подсветка: есть','Ножки: регулируемые'],uz:["Isitish: bug'/havo",'Ventilyator: mavjud','Yoritish: mavjud','Oyoqlar: sozlanadi'],en:['Heating: steam/air','Fan: yes','Lighting: yes','Feet: adjustable']}}
    ]},
   {id:'cold',k:'tab_cold',c:'#0369a1',dk:'desc_cold',
    t:{ru:'Холодильные камеры — готовые решения',uz:'Sovutish kameralari — tayyor yechimlar',en:'Cold Rooms — Ready Solutions'},
    items:[
     {img:'./images/21.jpg',b:'КХН-2,94',t:{ru:'Камера КХН-2,94',uz:'Kamera KXN-2,94',en:'Cold Room KXN-2.94'},d:{ru:'2,94 м³. Панель 80 мм. Дверь с любой стороны.',uz:"2,94 m³. Panel 80 mm. Eshik har tomondan.",en:'2.94 m³. 80 mm panel. Door any side.'},s:{ru:['Объём: 2,94 м³','Панель: 80 мм','Внутри: 1200×1200×2200 мм','Вес: 190/310 кг'],uz:['Hajm: 2,94 m³','Panel: 80 mm','Ichki: 1200×1200×2200 mm',"Og'irlik: 190/310 kg"],en:['Volume: 2.94 m³','Panel: 80 mm','Inner: 1200×1200×2200 mm','Weight: 190/310 kg']}},
     {img:'./images/22.jpg',b:'КХН-4,41',t:{ru:'Камера КХН-4,41',uz:'Kamera KXN-4,41',en:'Cold Room KXN-4.41'},d:{ru:'4,41 м³. Панель 80 мм.',uz:"4,41 m³. Panel 80 mm.",en:'4.41 m³. 80 mm panel.'},s:{ru:['Объём: 4,41 м³','Панель: 80 мм','Внутри: 1800×1200×2200 мм','Вес: 247/370 кг'],uz:['Hajm: 4,41 m³','Panel: 80 mm','Ichki: 1800×1200×2200 mm',"Og'irlik: 247/370 kg"],en:['Volume: 4.41 m³','Panel: 80 mm','Inner: 1800×1200×2200 mm','Weight: 247/370 kg']}},
     {img:'./images/23.jpg',b:'КХН-6,61',t:{ru:'Камера КХН-6,61',uz:'Kamera KXN-6,61',en:'Cold Room KXN-6.61'},d:{ru:'6,61 м³. Всегда в наличии.',uz:"6,61 m³. Har doim mavjud.",en:'6.61 m³. Always in stock.'},s:{ru:['Объём: 6,61 м³','Панель: 80 мм','Внутри: 1800×1800×2200 мм','Вес: 311/435 кг'],uz:['Hajm: 6,61 m³','Panel: 80 mm','Ichki: 1800×1800×2200 mm',"Og'irlik: 311/435 kg"],en:['Volume: 6.61 m³','Panel: 80 mm','Inner: 1800×1800×2200 mm','Weight: 311/435 kg']}},
     {img:'./images/24.jpg',b:'КХН-7,71',t:{ru:'Камера КХН-7,71',uz:'Kamera KXN-7,71',en:'Cold Room KXN-7.71'},d:{ru:'7,71 м³. С монтажным комплектом.',uz:"7,71 m³. Montaj to'plami bilan.",en:'7.71 m³. With installation kit.'},s:{ru:['Объём: 7,71 м³','Панель: 80 мм','Внутри: 2100×1800×2200 мм','Вес: 343/470 кг'],uz:['Hajm: 7,71 m³','Panel: 80 mm','Ichki: 2100×1800×2200 mm',"Og'irlik: 343/470 kg"],en:['Volume: 7.71 m³','Panel: 80 mm','Inner: 2100×1800×2200 mm','Weight: 343/470 kg']}},
     {img:'./images/fasadom.jpg',b:'КХН-8,81',t:{ru:'Камера КХН-8,81',uz:'Kamera KXN-8,81',en:'Cold Room KXN-8.81'},d:{ru:'8,81 м³. Для средних предприятий.',uz:"8,81 m³. O'rta kattalikdagi korxonalar.",en:'8.81 m³. For mid-size enterprises.'},s:{ru:['Объём: 8,81 м³','Панель: 80 мм','Внутри: 2400×1800×2200 мм','Вес: 376/505 кг'],uz:['Hajm: 8,81 m³','Panel: 80 mm','Ichki: 2400×1800×2200 mm',"Og'irlik: 376/505 kg"],en:['Volume: 8.81 m³','Panel: 80 mm','Inner: 2400×1800×2200 mm','Weight: 376/505 kg']}},
     {img:'./images/20.jpg',b:'КХН-11,02',t:{ru:'Камера КХН-11,02',uz:'Kamera KXN-11,02',en:'Cold Room KXN-11.02'},d:{ru:'11,02 м³. Для крупных предприятий.',uz:"11,02 m³. Yirik korxonalar.",en:'11.02 m³. For major enterprises.'},s:{ru:['Объём: 11,02 м³','Панель: 80 мм','Внутри: 3000×1800×2200 мм','Вес: 441/573 кг'],uz:['Hajm: 11,02 m³','Panel: 80 mm','Ichki: 3000×1800×2200 mm',"Og'irlik: 441/573 kg"],en:['Volume: 11.02 m³','Panel: 80 mm','Inner: 3000×1800×2200 mm','Weight: 441/573 kg']}}
    ]},
   {id:'minicella',k:'tab_mini',c:'#0284c7',
    t:{ru:'Холодильная миникамера Minicella',uz:'Minicella mini sovutish kamerasi',en:'Minicella Mini Cold Room'},
    items:[
     {img:'./images/21.jpg',b:'Minicella',t:{ru:'Minicella — с полом, 1 дверь',uz:'Minicella — pollik, 1 eshik',en:'Minicella — floor, 1 door'},d:{ru:'~1500 л. -5…+5°C / до -23°C. Потолочный моноблок.',uz:"~1500 l. -5…+5°C / -23°C. Shift monoблоki.",en:'~1500 L. -5…+5°C / to -23°C. Ceiling monobloc.'},s:{ru:['Объём: ~1500 л','Режим: -5…+5°C / до -23°C','Агрегат: потолочный','Дверь: самозакрывающаяся','LED: есть'],uz:['Hajm: ~1500 l','Rejim: -5…+5°C / -23°C','Agregat: shift','Eshik: avto','LED: mavjud'],en:['Volume: ~1500 L','Mode: -5…+5°C / to -23°C','Unit: ceiling','Door: self-closing','LED: yes']}},
     {img:'./images/22.jpg',b:'Minicella',t:{ru:'Minicella — с полом, 2 двери',uz:'Minicella — pollik, 2 eshik',en:'Minicella — floor, 2 doors'},d:{ru:'Сквозная загрузка. -5…+5°C / до -23°C.',uz:"O'tkazish yuklama. -5…+5°C / -23°C.",en:'Pass-through. -5…+5°C / to -23°C.'},s:{ru:['Объём: ~1500 л','Дверей: 2 сквозных','Режим: -5…+5°C / до -23°C','Агрегат: потолочный','LED: есть'],uz:['Hajm: ~1500 l',"Eshik: 2 ta o'tkazish",'Rejim: -5…+5°C / -23°C','Agregat: shift','LED: mavjud'],en:['Volume: ~1500 L','Doors: 2 pass-through','Mode: -5…+5°C / to -23°C','Unit: ceiling','LED: yes']}},
     {img:'./images/23.jpg',b:'Minicella',t:{ru:'Minicella — без пола, 1 дверь',uz:'Minicella — polsiz, 1 eshik',en:'Minicella — no floor, 1 door'},d:{ru:'На пол помещения. Только -5…+5°C.',uz:"Xona poliga. Faqat -5…+5°C.",en:'On room floor. Medium-temp only.'},s:{ru:['Объём: ~1500 л','Пол: нет','Режим: -5…+5°C','Агрегат: потолочный','LED: есть'],uz:['Hajm: ~1500 l',"Pol: yo'q",'Rejim: -5…+5°C','Agregat: shift','LED: mavjud'],en:['Volume: ~1500 L','Floor: none','Mode: -5…+5°C','Unit: ceiling','LED: yes']}},
     {img:'./images/24.jpg',b:'Minicella',t:{ru:'Minicella — без пола, 2 двери',uz:'Minicella — polsiz, 2 eshik',en:'Minicella — no floor, 2 doors'},d:{ru:'Только -5…+5°C. Сквозная загрузка.',uz:"Faqat -5…+5°C. O'tkazish yuklamasi.",en:'Medium-temp only. Pass-through.'},s:{ru:['Объём: ~1500 л','Пол: нет','Режим: -5…+5°C','Дверей: 2','LED: есть'],uz:['Hajm: ~1500 l',"Pol: yo'q",'Rejim: -5…+5°C','Eshik: 2 ta','LED: mavjud'],en:['Volume: ~1500 L','Floor: none','Mode: -5…+5°C','Doors: 2','LED: yes']}},
     {img:'./images/21.jpg',b:'Minicella',t:{ru:'Minicella — с полом, 1 дверь',uz:'Minicella — pollik, 1 eshik',en:'Minicella — floor, 1 door'},d:{ru:'~1500 л. Моноблок. LED.',uz:"~1500 l. Monoблок. LED.",en:'~1500 L. Monobloc. LED.'},s:{ru:['Объём: ~1500 л','Режим: -5…+5°C / до -23°C','Агрегат: потолочный','LED: есть'],uz:['Hajm: ~1500 l','Rejim: -5…+5°C / -23°C','Agregat: monoблок','LED: mavjud'],en:['Volume: ~1500 L','Mode: -5…+5°C / to -23°C','Unit: monobloc','LED: yes']}},
     {img:'./images/22.jpg',b:'Minicella',t:{ru:'Minicella — с полом, 2 двери',uz:'Minicella — pollik, 2 eshik',en:'Minicella — floor, 2 doors'},d:{ru:'~1500 л. Сквозная загрузка.',uz:"~1500 l. O'tkazish yuklama.",en:'~1500 L. Pass-through loading.'},s:{ru:['Объём: ~1500 л','Дверей: 2','Режим: -5…+5°C / до -23°C','LED: есть'],uz:['Hajm: ~1500 l','Eshik: 2 ta','Rejim: -5…+5°C / -23°C','LED: mavjud'],en:['Volume: ~1500 L','Doors: 2','Mode: -5…+5°C / to -23°C','LED: yes']}}
    ]},
   {id:'kp130',k:'tab_kp',c:'#65a30d',dk:'desc_kp',
    t:{ru:'Полевые кухни КП-130',uz:'KP-130 dala oshxonalari',en:'Field Kitchens KP-130'},
    items:[
     {img:'./images/1a.jpg',b:'КП-130',t:{ru:'КП-130 — вид сбоку',uz:"KP-130 — yon ko'rinish",en:'KP-130 — side view'},d:{ru:'130 чел. 3824×2200×1620 мм. Вес 1790 кг.',uz:'130 kishi. 3824×2200×1620 mm. 1790 kg.',en:'130 persons. 3824×2200×1620 mm. 1790 kg.'},s:{ru:['Вместимость: 130 чел.','4 котла: 80+75 л','Топливо: дизель/дрова/уголь','Расход: 10 л/ч','Вес: 1790 кг'],uz:['Sig\'im: 130 kishi','4 qozon: 80+75 l',"Yoqilg'i: dizel/yog'och/ko'mir",'Sarfi: 10 l/soat','Og\'irlik: 1790 kg'],en:['Capacity: 130 persons','4 pots: 80+75 L','Fuel: diesel/wood/coal','Rate: 10 L/h','Weight: 1790 kg']}},
     {img:'./images/2a.jpg',b:'КП-130',t:{ru:'КП-130 — вид сзади',uz:'KP-130 — orqa',en:'KP-130 — rear view'},d:{ru:'Котлы 80 л×2 и 75 л×2. Духовка 0,025 м³.',uz:'Qozonlar 80 l×2 va 75 l×2. Pech 0,025 m³.',en:'Pots 80 L×2 and 75 L×2. Oven 0.025 m³.'},s:{ru:['Котёл 1-е блюдо: 80 л','Котёл кипяток: 80 л','Котлы 2-е блюдо: 75 л','Духовка: 0,025 м³','Закипание: 60–90 мин'],uz:['Qozon 1-taom: 80 l','Qozon qaynaq: 80 l','Qozon 2-taom: 75 l','Pech: 0,025 m³','Qaynash: 60–90 daq'],en:['Pot 1st course: 80 L','Pot boiling: 80 L','Pot 2nd: 75 L','Oven: 0.025 m³','Boiling: 60–90 min']}},
     {img:'./images/3a.jpg',b:'КП-130',t:{ru:'КП-130 — 3D-рендер',uz:'KP-130 — 3D render',en:'KP-130 — 3D render'},d:{ru:'Экспедиции, военные лагеря, соревнования.',uz:"Ekspeditsiyalar, harbiy lagerlar.",en:'Expeditions, military camps, competitions.'},s:{ru:['Применение: экспедиции/лагеря','Прицеп: одноосный','Рабочая длина: до 3350 мм'],uz:["Qo'llanish: ekspeditsiya/lager","Pritsep: bitta o'qli",'Ish uzunligi: 3350 mm'],en:['Use: expeditions/camps','Trailer: single-axle','Working length: 3350 mm']}},
     {img:'./images/4a.jpg',b:'КП-130',t:{ru:'КП-130 — комплектация',uz:"KP-130 — to'liq jihozlash",en:'KP-130 — full equipment'},d:{ru:'Дизель, дрова, уголь. Форсуночные горелки.',uz:"Dizel, yog'och, ko'mir. Forsunka yoqish.",en:'Diesel, wood, coal. Nozzle burners.'},s:{ru:['Топливо: дизель/дрова/уголь','Горелки: форсуночные','Духовка: 0,025 м³','Водонагреватель: 34,5 л'],uz:["Yoqilg'i: dizel/yog'och/ko'mir",'Yoqish: forsunka','Pech: 0,025 m³','Suv isitgich: 34,5 l'],en:['Fuel: diesel/wood/coal','Burners: nozzle','Oven: 0.025 m³','Water heater: 34.5 L']}},
     {img:'./images/5a.jpg',b:'КП-130',t:{ru:'КП-130 + цистерна',uz:'KP-130 + sisterna',en:'KP-130 + cistern'},d:{ru:'С прицепом ЦВ-1.2 (1200 л).',uz:"TV-1.2 sisterna (1200 l) bilan.",en:'With TV-1.2 cistern (1200 L).'},s:{ru:['Цистерна: 1200 л AISI 304','Комплекс: КП-130 + ЦВ-1.2','Назначение: автономное питание'],uz:['Sisterna: 1200 l AISI 304','Majmua: KP-130 + TV-1.2','Maqsad: avtonom ovqatlanish'],en:['Cistern: 1200 L AISI 304','Complex: KP-130 + TV-1.2','Use: autonomous catering']}}
    ]},
   {id:'cistern',k:'tab_cis',c:'#0f766e',
    t:{ru:'Прицепы-цистерны',uz:'Pritsep-sisternalar',en:'Cistern Trailers'},
    items:[
     {img:'./images/6a.jpg',b:'ЦВ-1.2',t:{ru:'Цистерна ЦВ-1.2',uz:"Sisterna TV-1.2",en:'Cistern TV-1.2'},d:{ru:'1200 л. AISI 304. Ду-40. До 70 км/ч.',uz:'1200 l. AISI 304. Du-40. 70 km/soat.',en:'1200 L. AISI 304. DN-40. 70 km/h.'},s:{ru:['Объём: 1200 л','Материал: AISI 304','Клапан: Ду-40','Скорость: до 70 км/ч','Ось: одноосная'],uz:['Hajm: 1200 l','Material: AISI 304','Klapan: Du-40','Tezlik: 70 km/soat',"O'q: bitta"],en:['Volume: 1200 L','Material: AISI 304','Valve: DN-40','Speed: 70 km/h','Axle: single']}},
     {img:'./images/7a.jpg',b:'Цистерна',t:{ru:'Двухосная цистерна',uz:"Ikki o'qli sisterna",en:'Twin-axle Cistern'},d:{ru:'AISI 304. Два люка Ø500.',uz:'AISI 304. Ikki lyuk Ø500.',en:'AISI 304. Two hatches Ø500.'},s:{ru:['Материал: AISI 304','Люки: 2×Ø500 мм','Ось: двухосная'],uz:['Material: AISI 304','Lyuklar: 2×Ø500 mm',"O'q: ikkita"],en:['Material: AISI 304','Hatches: 2×Ø500 mm','Axles: twin']}},
     {img:'./images/8a.jpg',b:'Цистерна',t:{ru:'Двухосный прицеп 3D',uz:"Ikki o'qli pritsep 3D",en:'Twin-axle Trailer 3D'},d:{ru:'BPW ECO AIR COMPACT. ABS WABCO.',uz:'BPW ECO AIR COMPACT. ABS WABCO.',en:'BPW ECO AIR COMPACT. ABS WABCO.'},s:{ru:['Шасси: BPW ECO AIR','Подвеска: пневматика','Тормоза: ABS WABCO','Материал: AISI 304'],uz:['Shassi: BPW ECO AIR','Suspenziya: pnevmatik','Tormoz: ABS WABCO','Material: AISI 304'],en:['Chassis: BPW ECO AIR','Suspension: air','Brakes: ABS WABCO','Material: AISI 304']}},
     {img:'./images/9a.jpg',b:'10 500 л',t:{ru:'Цистерна 10 500 л — сбоку',uz:"10 500 l sisterna — yon",en:'10 500 L Cistern — side'},d:{ru:'3 секции. Термоизоляция ±2°C/10ч.',uz:'3 bo\'lim. Termoizolyatsiya ±2°C/10 soat.',en:'3 sections. Insulation ±2°C/10h.'},s:{ru:['Объём: 10 500 л','Секций: 3','Сечение: овальное','Клапаны: Ду-50'],uz:['Hajm: 10 500 l',"Bo'lim: 3",'Kesim: oval','Klapan: Du-50'],en:['Volume: 10 500 L','Sections: 3','Section: oval','Valves: DN-50']}},
     {img:'./images/4a.jpg',b:'10 500 л',t:{ru:'Цистерна 10 500 л — вид',uz:"10 500 l sisterna — ko'rinish",en:'10 500 L Cistern — view'},d:{ru:'Донные клапаны Ду-50. AISI 304.',uz:'Tub klapanlar Du-50. AISI 304.',en:'DN-50 bottom valves. AISI 304.'},s:{ru:['Объём: 10 500 л','Клапаны: Ду-50','Площадки: с обеих сторон','Материал: AISI 304'],uz:['Hajm: 10 500 l','Klapan: Du-50','Maydonlar: har ikki tomondan','Material: AISI 304'],en:['Volume: 10 500 L','Valves: DN-50','Platforms: both sides','Material: AISI 304']}}
    ]}
  ];
  
  // ══ DARK MODE ══
  const html=document.documentElement;
  const dkBtn=document.getElementById('dkBtn');
  const saved=localStorage.getItem('theme')||'light';
  html.setAttribute('data-theme',saved);
  dkBtn.onclick=()=>{
    const nxt=html.getAttribute('data-theme')==='dark'?'light':'dark';
    html.setAttribute('data-theme',nxt);
    localStorage.setItem('theme',nxt);
  };
  
  // ══ HAMBURGER ══
  const hbg=document.getElementById('hbg'),mm=document.getElementById('mm');
  hbg.onclick=()=>{hbg.classList.toggle('op');mm.classList.toggle('op');};
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{hbg.classList.remove('op');mm.classList.remove('op');}));
  document.addEventListener('click',e=>{if(!hbg.contains(e.target)&&!mm.contains(e.target)&&!dkBtn.contains(e.target)){hbg.classList.remove('op');mm.classList.remove('op');}});
  
  // ══ BACK TO TOP ══
  const bttBtn=document.getElementById('btt');
  window.addEventListener('scroll',()=>{bttBtn.classList.toggle('show',scrollY>400);},{ passive:true});
  bttBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  
  // ══ SCROLL REVEAL ══
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  
  // ══ COUNTER ANIMATION ══
  function animCount(el,target,dur=1800){
    let start=null;
    const step=ts=>{
      if(!start)start=ts;
      const p=Math.min((ts-start)/dur,1);
      const ease=1-Math.pow(1-p,3);
      el.textContent=Math.floor(ease*target)+'+'
      if(p<1)requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const cio=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const t=parseInt(e.target.dataset.count);
        animCount(e.target,t);
        cio.unobserve(e.target);
      }
    });
  },{threshold:.5});
  document.querySelectorAll('.sn[data-count]').forEach(el=>cio.observe(el));
  
  // ══ FLOATING PARTICLES ══
  (function(){
    const c=document.getElementById('particles');
    if(!c)return;
    const colors=['rgba(26,86,219,.15)','rgba(99,102,241,.12)','rgba(59,130,246,.1)','rgba(139,92,246,.08)'];
    for(let i=0;i<14;i++){
      const d=document.createElement('div');
      d.className='p';
      const sz=Math.random()*60+20;
      d.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:${colors[i%colors.length]};--dur:${6+Math.random()*8}s;animation-delay:-${Math.random()*8}s`;
      c.appendChild(d);
    }
  })();
  
  // ══ LIGHTBOX ══
  const lbEl=document.getElementById('lb');
  document.getElementById('lbc').onclick=closeLB;
  lbEl.onclick=e=>{if(e.target===lbEl)closeLB();};
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB();});
  function openLB(item){
    const ti=typeof item.t==='object'?item.t[L]:item.t;
    const de=typeof item.d==='object'?item.d[L]:(item.d||'');
    const sp=Array.isArray(item.s)?item.s:item.s[L];
    document.getElementById('lbimg').src=item.img;
    document.getElementById('lbimg').alt=ti;
    document.getElementById('lbtit').textContent=ti;
    document.getElementById('lbdesc').textContent=de;
    const bg=document.getElementById('lbbg');
    bg.textContent=item.b||'';bg.style.display=item.b?'':'none';
    document.getElementById('lbsp').innerHTML=sp.map(s=>`<li>${s}</li>`).join('');
    lbEl.classList.add('on');document.body.style.overflow='hidden';
  }
  function closeLB(){lbEl.classList.remove('on');document.body.style.overflow='';}
  
  // ══ CARD ══
  const LENS=`<div class="clens"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div>`;
  function mkCard(item,g){
    const ti=typeof item.t==='object'?item.t[L]:item.t;
    const sp=Array.isArray(item.s)?item.s:item.s[L];
    const d=document.createElement('div');d.className='cc reveal scale';
    d.innerHTML=`<div class="cimg"><img src="${item.img}" alt="${ti}" loading="lazy">${LENS}<span class="cbadge" style="background:${g.c}">${item.b}</span></div><div class="cbody"><p class="cname">${ti}</p><p class="chint">${sp[0]}</p></div>`;
    d.onclick=()=>openLB(item);
    setTimeout(()=>io.observe(d),50);
    return d;
  }
  
  // ══ SLIDER ══
  const SVG_P=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
  const SVG_N=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
  function mkSlider(sec,g){
    const wrap=document.createElement('div');wrap.className='cswrap';
    const prev=document.createElement('button');prev.className='sb sbp';prev.innerHTML=SVG_P;prev.type='button';
    const next=document.createElement('button');next.className='sb sbn';next.innerHTML=SVG_N;next.type='button';
    const vp=document.createElement('div');vp.className='csvp';
    const tr=document.createElement('div');tr.className='cstr';
    g.items.forEach(item=>tr.appendChild(mkCard(item,g)));
    vp.appendChild(tr);wrap.appendChild(prev);wrap.appendChild(vp);wrap.appendChild(next);
    const dots=document.createElement('div');dots.className='sdots';
    sec.appendChild(wrap);sec.appendChild(dots);
    let cur=0,GAP=14;
    function vis(){const w=wrap.getBoundingClientRect().width||wrap.offsetWidth;return w<520?1:w<860?3:4;}
    function cw(){const w=wrap.getBoundingClientRect().width||wrap.offsetWidth;const v=vis();return(w-(v-1)*GAP)/v;}
    function tot(){return Math.max(1,g.items.length-vis()+1);}
    function mkDots(){
      dots.innerHTML='';const n=tot();
      if(n<=1){dots.style.display='none';return;}dots.style.display='';
      for(let i=0;i<n;i++){const d=document.createElement('button');d.type='button';d.className='sdot'+(i===cur?' on':'');d.onclick=()=>go(i);dots.appendChild(d);}
    }
    function go(i){
      cur=Math.max(0,Math.min(i,tot()-1));
      const w=cw();
      tr.querySelectorAll('.cc').forEach(c=>{c.style.flex=`0 0 ${w}px`;c.style.maxWidth=`${w}px`;});
      tr.style.transform=`translateX(-${cur*(w+GAP)}px)`;
      prev.classList.toggle('off',cur===0);next.classList.toggle('off',cur>=tot()-1);
      dots.querySelectorAll('.sdot').forEach((d,j)=>d.classList.toggle('on',j===cur));
    }
    prev.onclick=()=>go(cur-1);next.onclick=()=>go(cur+1);
    let tx=0;
    vp.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
    vp.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>40){dx<0?go(cur+1):go(cur-1);}},{passive:true});
    const ro=new ResizeObserver(()=>{mkDots();go(Math.min(cur,tot()-1));});
    ro.observe(wrap);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{mkDots();go(0);}));
  }
  
  
  // ══ LANG ══
  let L='ru';
  function setLang(l){
    L=l;document.documentElement.lang=l;
    const t=T[l];
    document.querySelectorAll('[data-t]').forEach(el=>{const k=el.dataset.t;if(t[k]!=null)el.textContent=t[k];});
    document.querySelectorAll('.lb').forEach(b=>b.classList.remove('on'));
    const ab=document.querySelector(`.lb[onclick="setLang('${l}')"]`);if(ab)ab.classList.add('on');
    document.title={ru:'NS Plus – Профессиональное оборудование',uz:'NS Plus – Professional uskunalar',en:'NS Plus – Professional Equipment'}[l];
    document.querySelectorAll('.ctab[data-k]').forEach(b=>{const k=b.dataset.k;if(t[k])b.textContent=t[k];});
    buildCat();
  }
  
  // ══ TABS ══
  function buildTabs(){
    const el=document.getElementById('ctabs');el.innerHTML='';
    TABS.forEach((tab,i)=>{
      const btn=document.createElement('button');
      btn.className='ctab'+(i===0?' on':'');
      btn.dataset.k=tab.k;btn.dataset.id=tab.id;
      btn.textContent=T[L][tab.k]||tab.k;
      btn.onclick=()=>{
        document.querySelectorAll('.ctab').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
        const el2=document.getElementById(tab.id);
        if(el2)window.scrollTo({top:el2.getBoundingClientRect().top+scrollY-140,behavior:'smooth'});
      };
      el.appendChild(btn);
    });
  }
  
  // ══ CATALOG ══
  function buildCat(){
    const con=document.getElementById('catcon');if(!con)return;
    con.innerHTML='';
    CAT.forEach(g=>{
      const sec=document.createElement('div');sec.className='csec';sec.id=g.id;
      sec.innerHTML=`<div class="csh reveal"><span class="csd" style="background:${g.c}"></span><h3 class="cst" style="color:${g.c}">${g.t[L]}</h3></div>`;
      if(g.dk&&T[L][g.dk]){const p=document.createElement('p');p.className='csdesc reveal';p.textContent=T[L][g.dk];sec.appendChild(p);setTimeout(()=>io.observe(p),50);}
      sec.querySelectorAll('.reveal').forEach(el=>setTimeout(()=>io.observe(el),50));
      if(SLD.has(g.id)){mkSlider(sec,g);}
      else{const gr=document.createElement('div');gr.className='cgrid';g.items.forEach(item=>gr.appendChild(mkCard(item,g)));sec.appendChild(gr);}
      con.appendChild(sec);
    });
  }
  
  // ══ INIT ══
  buildTabs();
  setLang('ru');