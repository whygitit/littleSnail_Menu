const menu = [
  {
    id: 1,
    title: "ESCARGOTS 달팽이 *추천",
    category: "Entrée",
    price: 1,
    img: "./images/item-1.jpg",
    desc: `마늘 버터 소스에 요리한 달팽이. 빵2개 나옴 Dozen snails marinated in herb-infused court bouillon, oven baked in garlic butter`,
  },
  {
    id: 2,
    title: "FILLET OF BEEF TENDERLOIN 안심 스테이크",
    category: "Mains",
    price: 1,
    img: "./images/item-2.jpg",
    desc: `served with potato millefeuille and red wine jus`,
  },
  {
    id: 3,
    title: "슈크림 빵 HANDMADE PROFITEROLE",
    category: "Desserts",
    price: 1,
    img: "./images/item-3.jpg",
    desc: `슈크림에 민트초코 소스 Crème patisserie and chocolate sauce`,
  },
  {
    id: 4,
    title: "PATE 푸아그라",
    category: "Entrée",
    price: 1,
    img: "./images/item-4.jpg",
    desc: `Armagnac flavoured duck liver pate with marinated champignons, date chutney and port vinaigrette`,
  },
  {
    id: 5,
    title: "COTE DE VEAU 송아지 스테이크",
    category: "Mains",
    price: 1,
    img: "./images/item-5.jpg",
    desc: `송아지 안심 스테이크에 그래비 소스 올린것 Veal tenderloin with champignon and chardonnay beurre blanc, served with potato croquette and seasonal greens`,
  },
  {
    id: 6,
    title: "대추 푸딩 WARM STICKY DATE PUDDING",
    category: "Desserts",
    price: 1,
    img: "./images/item-6.png",
    desc: `달달한 푸딩빵에 바닐라 아이스크림 Butterscotch and French vanilla ice cream.`,
  },
  {
    id: 7,
    title: "LOIN OF LAMB 양고기 안심 스테이크",
    category: "Mains",
    price: 1,
    img: "./images/item-7.jpg",
    desc: `양의 안심부위를 스테이크 처럼 구움 With wilted baby spinach, maple glazed pommes boulangere and thyme jus`,
  },
  {
    id: 8,
    title: "캥거루 고기 KANGAROO FILLET",
    category: "Mains",
    price: 1,
    img: "./images/item-8.png",
    desc: `On garlic pommes puree with a Dijon mustard and honey bordelaise sauce.`,
  },
  {
    id: 9,
    title: "캐러멜 푸딩 CLASSIC CRÈME CARAMEL",
    category: "Desserts",
    price: 1,
    img: "./images/item-99.jpg",
    desc: `평범하지만 맛있는 캐러멜 푸딩`,
  },
  {
    id: 10,
    title: "SALT AND PEPPER SQUID 오징어 튀김",
    category: "Entrée",
    price: 1,
    img: "./images/item-9.jpg",
    desc: `Lightly coated in panko, fried, with petite mesclun and capers and cornichons aioli`,
  },
  {
    id: 11,
    title: "SALMON ROULADE 훈제연어 크림치즈 롤",
    category: "Entrée",
    price: 1,
    img: "./images/item-11.jpg",
    desc: `Filled with herb cheese mousseline, served with potato nest and passion fruit dressing.`,
  },
  {
    id: 12,
    title: "BOULETTE DE FRUITS DE MER",
    category: "Entrée",
    price: 1,
    img: "./images/item-12.jpg",
    desc: `다진 연어와 새우를 쪄서 토마토 베이스 소스 뿌린것 Salmon and prawn, steamed, served with tomato and chervil veloute`,
  },
  {
    id: 13,
    title: "BOUILLABAISSE DE MARSEILLE",
    category: "Entrée",
    price: 1,
    img: "./images/item-13.jpg",
    desc: `서양식 해물탕 Traditional French seafood soup of mussels, fish fillets and prawns, cooked in seafood broth, served with garlic baguette.`,
  },
  {
    id: 14,
    title: "MUSHROOM AND LEEK CREPE *비추천",
    category: "Entrée",
    price: 1,
    img: "./images/item-14.jpg",
    desc: `맛이 없음 버섯과 파 크레이프 With chives, Monte Veronese cheese, and Breton sauce`,
  },
  {
    id: 15,
    title: "오리 고기 MAGRET DE CANARD",
    category: "Mains",
    price: 1,
    img: "./images/item-15.jpg",
    desc: `오리고기에 라즈베리 소스 Crispy skin duck breast fillet with wok tossed spinach served with cassis and raspberry sauce`,
  },
  {
    id: 16,
    title: "연어 구이 CITRUS MARINATED TASMANIAN SALMON",
    category: "Mains",
    price: 1,
    img: "./images/item-16.png",
    desc: `Served with tomato, lemon, basil and roasted red pepper coulis`,
  },
  {
    id: 17,
    title: "해산물 모음 SEAFOOD PLATE",
    category: "Mains",
    price: 1,
    img: "./images/item-17.png",
    desc: `연어, 새우, 오징어, 홍합, 꽃게 모음 Grilled salmon, garlic prawns, salt and pepper squid, chilli mussels, beer battered soft shell crab and mesclun salad`,
  },
  {
    id: 18,
    title: "새우 파스타 CHILLI PRAWNS AND BASIL LINGUINI",
    category: "Mains",
    price: 1,
    img: "./images/item-18.png",
    desc: `Garlic and lime juice, tossed with olive oil, roasted tomato concasse and fresh basil leaves.`,
  },
  {
    id: 19,
    title: "야채 리조또 VEGETARIAN RISOTTO",
    category: "Mains",
    price: 1,
    img: "./images/item-19.jpg",
    desc: `Sweet peas, marinated mushrooms, semi dried tomatoes, olives, spinach and Grana Padano cheese`,
  },
  {
    id: 20,
    title: "초콜렛 무스 KAHLUA INFUSED CHOCOLATE MOUSSE",
    category: "Desserts",
    price: 1,
    img: "./images/item-20.jpg",
    desc: `맛있는 초콜렛 무스`,
  },
  {
    id: 21,
    title: "CHEF CHURNED HAZELNUT AND PRALINE ICE CREAM",
    category: "Desserts",
    price: 1,
    img: "./images/item-21.png",
    desc: `빵 베이스에 헤이즐넛 아이스크림과 캐러멜 소스 Sable breton and Grand Marnier caramel.`,
  },
  {
    id: 22,
    title: "초콜렛 케이크 BELGIAN CHOCOLATE GATEAU",
    category: "Desserts",
    price: 1,
    img: "./images/item-22.jpg",
    desc: `With pineapple and coconut candy.`,
  },
  {
    id: 23,
    title: "치즈 플레터 FOURME D’AMBERT",
    category: "Desserts",
    price: 1,
    img: "./images/item-23.jpg",
    desc: `블루 치즈와 크래커 Mild blue cheese, creamy texture and delicate bouquet.`,
  },
  {
    id: 24,
    title: "알코올 칵테일 Cocktail",
    category: "Drink",
    price: 1,
    img: "./images/item-24.jpg",
    desc: `패션후르츠, 파인애플 칵테일 알코올 첨가`,
  },
  {
    id: 25,
    title: "무알코올 목테일 Mocktail",
    category: "Drink",
    price: 1,
    img: "./images/item-24.jpg",
    desc: `패션후르츠, 파인애플 목테일 알코올 무첨가`,
  },
  {
    id: 26,
    title: "화이트 와인 White wine",
    category: "Drink",
    price: 1,
    img: "./images/item-25.jpg",
    desc: `화이트 와인 Don't know which brand wine is available `,
  },
];
export default menu;
