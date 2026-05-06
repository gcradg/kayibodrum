type Language = "en" | "tr";
type LocalizedText = Record<Language, string>;

export type Project = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  year: string;
  location: string;
  cover: string;
  palette: "dark" | "ivory";
  summary: LocalizedText;
  overview: LocalizedText;
  materials: Record<Language, string[]>;
  process: LocalizedText;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "yacht-exterior-identity",
    title: { en: "Yacht Exterior Identity", tr: "Yat Dış Kimliği" },
    category: { en: "Marine", tr: "Marine" },
    year: "2026",
    location: "Yalikavak Marina",
    cover: "/images/project-01.jpg",
    palette: "dark",
    summary: {
      en: "A restrained exterior language for a yacht presence shaped by bronze, charcoal and sea light.",
      tr: "Bronz, kömür tonları ve deniz ışığıyla şekillenen ölçülü bir yat dış dili."
    },
    overview: {
      en: "Exterior signage, deck accents and surface refinements were developed as a quiet identity system that belongs to the vessel without overpowering it.",
      tr: "Dış tabela, güverte vurguları ve yüzey iyileştirmeleri, tekneyi bastırmadan ona ait duran sakin bir kimlik sistemi olarak geliştirildi."
    },
    materials: {
      en: ["Marine-grade bronze", "Teak", "Charcoal lacquer", "Salt-resistant finish"],
      tr: ["Marine sınıfı bronz", "Tik", "Kömür lake", "Tuza dayanıklı bitiş"]
    },
    process: {
      en: "We began with the yacht's existing proportions, then refined every visible line through small mockups, finish samples and on-board adjustments.",
      tr: "Yatın mevcut oranlarıyla başladık; ardından her görünür çizgiyi küçük maketler, bitiş örnekleri ve teknedeki ayarlarla rafine ettik."
    },
    gallery: ["/images/project-01.jpg", "/images/yacht-detail.jpg", "/images/material-metal.jpg"]
  },
  {
    slug: "private-cabin-woodwork",
    title: { en: "Private Cabin Woodwork", tr: "Özel Kabin Ahşap İşleri" },
    category: { en: "Carpentry", tr: "Marangozluk" },
    year: "2025",
    location: "Golturkbuku",
    cover: "/images/project-02.jpg",
    palette: "ivory",
    summary: {
      en: "Cabin joinery with warm grain, concealed storage and calm hospitality.",
      tr: "Sıcak damarlar, gizli depolama ve sakin bir konforla tasarlanan kabin doğraması."
    },
    overview: {
      en: "A private cabin interior was reworked with custom panels, softened corners and tactile storage details for long days at sea.",
      tr: "Özel bir kabin iç mekanı, denizde geçirilen uzun günler için özel paneller, yumuşatılmış köşeler ve dokunsal depolama detaylarıyla yenilendi."
    },
    materials: {
      en: ["Oak veneer", "Linen panels", "Aged brass", "Soft-touch varnish"],
      tr: ["Meşe kaplama", "Keten paneller", "Eskitilmiş pirinç", "Yumuşak dokulu vernik"]
    },
    process: {
      en: "Every cabinet line was measured on site, built in the atelier and returned for a quiet installation with minimal visual interruption.",
      tr: "Her dolap çizgisi yerinde ölçüldü, atölyede üretildi ve minimum görsel müdahaleyle sakin bir montaj için geri getirildi."
    },
    gallery: ["/images/project-02.jpg", "/images/interior-wood.jpg", "/images/material-wood.jpg"]
  },
  {
    slug: "bodrum-villa-interior",
    title: { en: "Bodrum Villa Interior", tr: "Bodrum Villa İç Mekanı" },
    category: { en: "Decoration", tr: "Dekorasyon" },
    year: "2025",
    location: "Bodrum",
    cover: "/images/project-03.jpg",
    palette: "dark",
    summary: {
      en: "An interior atmosphere of ivory plaster, dark wood and filtered Mediterranean light.",
      tr: "Fildişi sıva, koyu ahşap ve süzülmüş Akdeniz ışığından oluşan bir iç mekan atmosferi."
    },
    overview: {
      en: "Material direction, built-in elements and decorative details were composed to make the villa feel collected, permanent and serene.",
      tr: "Malzeme yönü, gömme elemanlar ve dekoratif detaylar villanın derli toplu, kalıcı ve dingin hissettirmesi için kurgulandı."
    },
    materials: {
      en: ["Walnut", "Ivory plaster", "Travertine", "Bronze details"],
      tr: ["Ceviz", "Fildişi sıva", "Traverten", "Bronz detaylar"]
    },
    process: {
      en: "The palette was edited down to a few lasting materials, allowing daylight, craft and proportion to become the decorative language.",
      tr: "Palet birkaç kalıcı malzemeye indirildi; gün ışığı, zanaat ve oran dekoratif dilin kendisi haline geldi."
    },
    gallery: ["/images/project-03.jpg", "/images/workshop.jpg", "/images/material-wood.jpg"]
  },
  {
    slug: "custom-marine-signage",
    title: { en: "Custom Marine Signage", tr: "Özel Marine Tabela" },
    category: { en: "Marine", tr: "Marine" },
    year: "2024",
    location: "Bodrum Shipyard",
    cover: "/images/yacht-detail.jpg",
    palette: "ivory",
    summary: {
      en: "Low-profile marine signage engineered for salt air, reflection and distance.",
      tr: "Tuzlu hava, yansıma ve mesafe için geliştirilmiş düşük profilli marine tabela."
    },
    overview: {
      en: "A family of vessel marks and cabin indicators was produced with precise spacing, slim profiles and finishes suited to the marine environment.",
      tr: "Tekne işaretleri ve kabin göstergeleri; hassas aralıklar, ince profiller ve marine ortama uygun bitişlerle üretildi."
    },
    materials: {
      en: ["Brushed metal", "UV-stable paint", "Bronze inlay", "Marine adhesive"],
      tr: ["Fırçalı metal", "UV dayanımlı boya", "Bronz kakma", "Marine yapıştırıcı"]
    },
    process: {
      en: "Scale tests were reviewed under direct sun and evening light before the final finish was selected and installed.",
      tr: "Final bitiş seçilip monte edilmeden önce ölçek testleri doğrudan güneş ve akşam ışığında değerlendirildi."
    },
    gallery: ["/images/yacht-detail.jpg", "/images/project-01.jpg", "/images/material-metal.jpg"]
  },
  {
    slug: "deck-lounge-detailing",
    title: { en: "Deck & Lounge Detailing", tr: "Güverte ve Lounge Detayları" },
    category: { en: "Craftsmanship", tr: "Zanaatkarlık" },
    year: "2024",
    location: "Torba",
    cover: "/images/hero-yacht.jpg",
    palette: "dark",
    summary: {
      en: "Deck and lounge details crafted for barefoot comfort and understated ceremony.",
      tr: "Çıplak ayak konforu ve gösterişsiz bir ritüel için üretilen güverte ve lounge detayları."
    },
    overview: {
      en: "From handrails to lounge edges, the work focused on touch, shadow and durability across a sea-facing hospitality area.",
      tr: "Korkuluklardan lounge kenarlarına kadar çalışma, denize bakan bir konuk alanında temas, gölge ve dayanıklılığa odaklandı."
    },
    materials: {
      en: ["Teak", "Outdoor textile", "Bronze hardware", "Marine oil"],
      tr: ["Tik", "Dış mekan tekstili", "Bronz donanım", "Marine yağ"]
    },
    process: {
      en: "The detailing was prototyped at full scale so transitions between wood, textile and metal felt natural by hand.",
      tr: "Ahşap, tekstil ve metal arasındaki geçişlerin elde doğal hissettirmesi için detaylar tam ölçekte prototiplendi."
    },
    gallery: ["/images/hero-yacht.jpg", "/images/project-02.jpg", "/images/material-wood.jpg"]
  },
  {
    slug: "atelier-furniture-piece",
    title: { en: "Atelier Furniture Piece", tr: "Atölye Mobilya Parçası" },
    category: { en: "Carpentry", tr: "Marangozluk" },
    year: "2023",
    location: "KAYI Atelier",
    cover: "/images/workshop.jpg",
    palette: "ivory",
    summary: {
      en: "A one-off furniture object made as a study in restraint, grain and balance.",
      tr: "Sadelik, damar ve denge üzerine tekil bir mobilya çalışması."
    },
    overview: {
      en: "A sculptural cabinet was designed and built in the atelier as a material study for future private interior commissions.",
      tr: "Gelecekteki özel iç mekan işleri için malzeme çalışması olarak atölyede heykelsi bir dolap tasarlanıp üretildi."
    },
    materials: {
      en: ["Walnut", "Hand-rubbed oil", "Bronze pull", "Stone top"],
      tr: ["Ceviz", "Elle uygulanmış yağ", "Bronz kulp", "Taş tabla"]
    },
    process: {
      en: "The object was shaped through slow adjustments, letting the wood grain determine the final rhythm of its front elevation.",
      tr: "Obje yavaş ayarlarla şekillendi; ahşap damarının ön cephedeki final ritmi belirlemesine izin verildi."
    },
    gallery: ["/images/workshop.jpg", "/images/material-wood.jpg", "/images/interior-wood.jpg"]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
