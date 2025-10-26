import pic1 from "../assets/images/article1.png";
import pic2 from "../assets/images/article2.png";
import pic3 from "../assets/images/article3.png";
import pic4 from "../assets/images/article4.png";
import pic5 from "../assets/images/article5.png";
import pic6 from "../assets/images/article6.png";
import pic7 from "../assets/images/article7.png";
import pic8 from "../assets/images/article8.png";
import pic9 from "../assets/images/article9.png";
import audio1 from "../assets/audio/podcast1.m4a";
import audio2 from "../assets/audio/podcast2.m4a";
import audio3 from "../assets/audio/podcast3.m4a";
import audio4 from "../assets/audio/podcast4.m4a";
import logo1 from "../assets/images/podcast1.jpg";
import logo2 from "../assets/images/podcast2.jpg";
import logo3 from "../assets/images/podcast3.jpg";
import logo4 from "../assets/images/podcast4.jpg";
import type { ModalContentType, NavigationItem } from "./types";
export const figuresConfig = [
  {
    type: "cloud",
    color: "#CA9FDD",
    className:
      "absolute  top-[15%] left-[5%] lg:top-[5%] lg:left-[7%] w-[50px] lg:w-[250px] sm:w-[100px]",
  },
  {
    type: "cloud",
    color: "#FDD888",
    className:
      "absolute  top-[0%] left-[20%] lg:top-[10%] lg:left-[33%] w-[70px] lg:w-[250px] sm:w-[100px]",
  },
  {
    type: "cloud",
    color: "#FF5724",
    className:
      "absolute top-[15%] right-[5%] lg:top-[16%] lg:right-[10%] lg:w-[350px] w-[80px] sm:w-[150px]",
  },
  {
    type: "cloud",
    color: "#F08080",
    className:
      "absolute bottom-[15%] left-[10%] lg:bottom-[16%] lg:left-[0%] lg:w-[550px] w-[60px] sm:w-[140px]",
  },
  {
    type: "cloud",
    color: "#FF8BB4",
    className:
      "absolute bottom-[35%] right-[5%] lg:bottom-[46%] lg:right-[0%] lg:w-[380px] w-[75px] sm:w-[170px]",
  },
  {
    type: "cloud",
    color: "#C5CC82",
    className:
      "absolute bottom-[2%] right-[5%] lg:bottom-[6%] lg:right-[2%] lg:w-[300px] w-[75px] sm:w-[150px]",
  },
  {
    type: "flower1",
    color: "#93AECA",
    className:
      "absolute top-[15%] left-[37%]  lg:top-[26%] lg:left-[27%] w-[55px] lg:w-[75px] sm:w-[70px]",
  },
  {
    type: "cloud",
    color: "#E4405F",
    className:
      "absolute top-[3%] right-[3%] lg:top-[6%] lg:right-[3%] w-[30px] lg:w-[90px] sm:w-[70px]",
  },
  {
    type: "flower2",
    color: "#9E93E6",
    className:
      "absolute top-[0%] right-[35%]  lg:top-[6%] lg:right-[37%] w-[45px] sm:w-[100px]",
  },
  {
    type: "flower2",
    color: "#9E93E6",
    className:
      "absolute bottom-[17%] right-[25%] lg:bottom-[20%] lg:right-[27%] w-[40px] sm:w-[100px]",
  },
  {
    type: "tulip",
    color: "#5966B1",
    className:
      "absolute bottom-[25%] left-[5%] lg:bottom-[25%] lg:left-[7%] rotate-45 w-[20px] sm:w-[100px]",
  },
  {
    type: "cloud",
    color: "#3B77F6",
    className:
      "absolute top-[35%] left-[7%] lg:top-[35%] lg:left-[0%] lg:w-[280px] w-[60px] sm:w-[170px]",
  },
  {
    type: "cloud",
    color: "#A7B5FE",
    className:
      "absolute bottom-[5%] left-[30%] lg:bottom-[5%] lg:left-[45%] lg:w-[150px] w-[70px] sm:w-[140px]",
  },
];

export const ellipseConfig = [
  {
    type: "ellipse",
    color: "#A7B5FE",
    className:
      "w-5 sm:w-7 lg:w-10 top-[10%] left-[45%] lg:top-[10%] lg:left-[45%]",
  },
  {
    type: "ellipse",
    color: "#5966B1",
    className:
      "w-5 sm:w-7 lg:w-10 bottom-[10%] right-[15%] lg:bottom-[27%] lg:right-[45%]",
  },
  {
    type: "ellipse",
    color: "#AA7AB6",
    className:
      "w-5 sm:w-7 lg:w-10 bottom-[35%] left-[45%] lg:bottom-[5%] lg:left-[20%] ",
  },
  {
    type: "ellipse",
    color: "#B3D07E",
    className:
      "w-5 sm:w-7 lg:w-10 top-[30%] left-[65%] lg:top-[-5%] lg:right-[15%] ",
  },
  {
    type: "ellipse",
    color: "#F49AA2",
    className:
      "w-5 sm:w-7 lg:w-10 top-[20%] right-[0%] lg:bottom-[0%] lg:right-[5%] ",
  },
  {
    type: "ellipse",
    color: "#FF5724",
    className:
      "w-5 sm:w-7 lg:w-10 bottom-[10%] left-[25%] lg:bottom-[10%] lg:left-[5%] ",
  },
  {
    type: "ellipse",
    color: "#FF8237",
    className:
      "w-5 sm:w-7 lg:w-10 top-[0%] right-[5%] lg:top-[0%] lg:right-[15%] ",
  },
  {
    type: "ellipse",
    color: "#FFBE54",
    className:
      "w-5 sm:w-7 lg:w-10 top-[12%] left-[5%] lg:top-[10%] lg:left-[15%] ",
  },
  {
    type: "ellipse",
    color: "#FF8237",
    className:
      "w-5 sm:w-7 lg:w-10 top-[2%] left-[15%] lg:top-[0%] lg:left-auto lg:right-[15%] ",
  },
  {
    type: "ellipse",
    color: "#FF8237",
    className:
      "w-5 sm:w-7 lg:w-10 top-[2%] left-[15%] lg:top-[2%] lg:left-[5%] ",
  },
  {
    type: "ellipse",
    color: "#CA9FDD",
    className:
      "w-5 sm:w-7 lg:w-10 bottom-[21%] left-[5%] lg:bottom-[19%] lg:left-auto  lg:right-[10%] ",
  },
  {
    type: "ellipse",
    color: "#B6C687",
    className:
      "w-5 sm:w-7 lg:w-10 bottom-[5%] left-[45%] lg:bottom-[10%] lg:left-[5%] ",
  },
  {
    type: "ellipse",
    color: "#FF8BB4",
    className:
      "w-5 sm:w-7 lg:w-10 hidden lg:flex lg:bottom-[10%] lg:right-[35%] ",
  },
  {
    type: "ellipse",
    color: "#FF6875",
    className:
      "w-5 sm:w-7 lg:w-10 hidden lg:flex lg:bottom-[4%] lg:left-[35%] ",
  },
];

export const circlesConfig = [
  {
    type: "ellipse",
    color: "#BEDA9D70",
    className: "lg:top-[1%] lg:left-[45%]",
    size: " !w-[124px] !h-[124px]",
  },
  {
    type: "ellipse",
    color: "#FEB18770",
    className: "lg:bottom-[27%] lg:right-[45%]",
    size: " !w-[124px] !h-[124px]",
  },
  {
    type: "ellipse",
    color: "#FF8BB470",
    className: "lg:top-[30%] lg:left-[20%] ",
    size: " !w-[124px] !h-[124px]",
  },
  {
    type: "ellipse",
    color: "#B3D07E70",
    className: "lg:top-[10%] lg:right-[15%] ",
    size: " !w-[124px] !h-[124px]",
  },
  {
    type: "ellipse",
    color: "#F49AA270",
    className: "lg:bottom-[25%] lg:right-[5%] ",
    size: " !w-[124px] !h-[124px]",
  },
  {
    type: "ellipse",
    color: "#93AECA70",
    className: "lg:bottom-[10%] lg:left-[5%] ",
    size: " !w-[124px] !h-[124px]",
  },
  {
    type: "ellipse",
    color: "#FF8BB470",
    className: "top-[-4%] left-[5%]  lg:top-[10%] lg:right-[15%] ",
    size: " !w-[124px] !h-[124px]",
  },
  {
    type: "ellipse",
    color: "#FF823770",
    className: "top-[10%] left-[15%] lg:top-[10%] lg:left-[15%] ",
    size: " !w-[124px] !h-[124px]",
  },
];

export const navigation: Record<"en" | "kz", NavigationItem[]> = {
  en: [
    {
      name: "Our team",
      link: "/team",
    },
    {
      name: "Our books",
      link: "/books",
    },
    {
      name: "Short film",
      link: "/",
    },
    {
      name: "Podcasts",
      link: "/podcasts",
    },
    {
      name: "Highlights",
      dropdown: [
        { name: "Eternal Legacy", link: "/history/heritage" },
        { name: "Traditional crafts", link: "/history/traditions" },
        { name: "Cuisine", link: "/history/food" },
      ],
    },
    {
      name: "Muppet Show",
      link: "/",
    },
  ],
  kz: [
    {
      name: "Тобымыз",
      link: "/team",
    },
    {
      name: "Кітаптары",
      link: "/books",
    },
    {
      name: "Мини фильм",
      link: "/",
    },
    {
      name: "Подкасты",
      link: "/podcasts",
    },
    {
      name: "Ерекшеліктері",
      dropdown: [
        { name: "Мәңгілік Мұра", link: "/history/heritage" },
        { name: "Дәстүрлі қолөнер", link: "/history/traditions" },
        { name: "Ұлттық тағамдар", link: "/history/food" },
      ],
    },
    {
      name: "Muppet Show",
      link: "/",
    },
  ],
};

export const articles = {
  en: [
    {
      id: "heritage",
      category: {
        heading: "Eternal Heritage: Traditions",
        paragraph:
          "Customs and traditions passed down from ancestors, bestowing spiritual wealth upon future generations.",
      },
      articles: [
        {
          id: 1,
          img: pic1,
          name: "A Unique Ceremony in the Kazakh Wedding Tradition",
          text: "Among the wedding traditions that have formed over centuries among the Kazakhs, Betashar holds a special meaning. The purpose of this ceremony is to introduce the new bride to her in-laws and teach her to respectfully accept the elders and relatives of the family. Betashar is not just a formal introduction; it is a manifestation of etiquette, courtesy, and Kazakh values.",
          content: {
            sections: [
              {
                title: "🐎 Historical Origin",
                text: "The roots of Betashar trace back to the social structure of nomadic Kazakh society. In ancient times, knowing kinship ties within each clan and family was an important cultural rule. When a new bride arrived in the village, by getting to know the entire family and greeting them, she demonstrated her courtesy and readiness to adapt to the new environment. During Betashar, the bride's face was covered with a white scarf or silk cloth, a sign of modesty and the beginning of a new life.",
              },
              {
                title: "📖 Procedure of the Ceremony",
                text: "Traditionally, Betashar is conducted by an akyn (poet) or a zhyrshy (storyteller). He plays the dombra, names each relative in verse, and instructs the bride to greet those people. These songs and poems are, on one hand, cheerful, and on the other, have an educational meaning. Usually, during the verse, the status of family members, the history of the lineage, and good wishes are mentioned. As each name is called, the bride bows, placing her hand on her chest as a greeting.",
              },
              {
                title: "🌺 Content and Meaning",
                text: "Betashar holds multi-level meanings in Kazakh society. First, it is a tool for strengthening kinship ties. Second, it is a sign of the bride's respectful acceptance into the new environment. Third, it is the moment of officially stepping into a new life before the community.",
              },
              {
                title: "📆  Changes Over Time",
                text: "Like many traditions during the Soviet era, Betashar underwent changes. In some places, this ceremony was shortened and became part of the official wedding program. However, after gaining independence, interest in national traditions increased, and Betashar was revived. Today, in some regions, modern elements are added to this ceremony, but its core meaning—respect and introduction—is preserved.",
              },
              {
                title: "💌 Modern Significance",
                text: "Today, Betashar is performed not only in rural areas but also often at urban weddings. It is a living witness of Kazakh culture, a cultural code passed down from generation to generation. Through this ceremony, young people get acquainted with national traditions, and the bond between family and society is strengthened.",
              },
              {
                title: "🧩 Conclusion",
                text: "Betashar is a custom that has stood the test of time, preserved in the people's memory, and adapted to this day. It prepares the bride to step into a new life, introduces her to the family, and most importantly, promotes Kazakh etiquette and respect.",
              },
            ],
          },
        },
        {
          id: 2,
          img: pic2,
          name: "The Tradition of Celebrating a Child's First Steps",
          text: "For the Kazakh people, a child's first steps are not just a physical achievement but also an important milestone spiritually and culturally. Tusauker (literally 'cutting the fetters') is the ritual dedicated to marking this special moment. In this ritual, a string is tied to the child's legs, and it is cut by a respected, honest person. The meaning of the ritual is the wish for the child's life path to be open, honest, and successful.",
          content: {
            sections: [
              {
                title: "🐎 Historical Origin",
                text: "The history of Tusauker originates from the traditions of child-rearing in nomadic Kazakh society. For nomads, every child's step was a guarantee of the future of the family and the clan. Therefore, marking the first steps with a certain ritual was important. The string, often woven from white and black threads, symbolized honesty and justice. In some regions, thread made from grass or wool was used, signifying a life in harmony with nature.",
              },
              {
                title: "📖 Procedure of the Ceremony",
                text: "Tusauker usually takes place with the participation of the child's relatives and villagers. First, a multicolored string is tied to the child's legs. The person conducting the ritual must be someone known for their honesty, hard work, a respected and exemplary figure in life. After cutting the string, they help the child take their first steps. Those gathered give blessings (bata) to the child, sing songs, and sometimes organize special games.",
              },
              {
                title: "🌺 Content and Meaning",
                text: "The main meaning of Tusauker is to express wishes for the child's future. The multicolored string is a symbol of an honest path and upright walking. A respected person cutting the fetters signifies the wish for those qualities to be bestowed upon the child. This ritual strengthens the bond between the family and the community, fostering a culture of mutual support.",
              },
              {
                title: "📆 Changes Over Time",
                text: "During the Soviet era, some everyday rituals began to be forgotten, but Tusauker remained widely practiced. Today, this tradition is observed both in villages and cities. Some families complement the ritual with modern elements—photo/video shooting, a festive dastarkhan (feast table), special invitations. However, its main symbolism remains unchanged.",
              },
              {
                title: "💌 Modern Significance",
                text: "Tusauker is not just a family celebration but also a cultural code representing the continuity of generations. Through this ritual, children learn to respect tradition, receive the blessings of elders, and establish a connection with the community. It continues to be an important tool for passing on the Kazakh people's love and hope for their children from generation to generation.",
              },
              {
                title: "🧩 Conclusion",
                text: "Tusauker is a tradition that has stood the test of time, with deep meaning and rich content. It transforms the child's first steps into the beginning of their life's path, endowing them with the power of good wishes and blessings. It is a clear manifestation of unity and support in Kazakh society.",
              },
            ],
          },
        },
        {
          id: 3,
          img: pic3,
          name: "The Holiday Celebrating the Arrival of Spring",
          text: "Nauryz is one of the oldest and most important holidays of the Kazakh people. It signifies the equinox of day and night, the renewal of nature, and the beginning of the new year. In Kazakh culture, Nauryz is not just an astronomical phenomenon but is considered a symbol of the renewal of life and the return of hope.",
          content: {
            sections: [
              {
                title: "🐎 Historical Origin",
                text: "The history of Nauryz dates back thousands of years to the ancient calendar traditions related to nature of Iranian, Turkic, and other peoples. For nomads, the equinox of day and night was a significant milestone in the change of seasons. During this period, the earth begins to warm, livestock give birth, and a new economic season begins. Archaeological evidence and written monuments show that Nauryz has been celebrated for several millennia in Central Asia and the Middle East.",
              },
              {
                title: "📖 Content and Meaning of the Holiday",
                text: "Nauryz is a holiday of renewal, reconciliation, and unity. The main dish of the holiday is Nauryz kozhe, prepared from seven types of ingredients, each symbolizing abundance and prosperity. During the holiday days, villages organize games and festivities, such as baige (horse races), kures (wrestling), and altybakan (swing). People visit each other, forgive grievances, and start the new year with good wishes.",
              },
              {
                title: "📆 Changes During the Soviet Era",
                text: "During the Soviet era, the Nauryz holiday was officially banned at certain periods. However, among the people, it was celebrated secretly. It was only in 1988 that the holiday was revived and began to be celebrated at a republican level. This was an important historical moment that paved the way for the preservation and renewal of national traditions.",
              },
              {
                title: "🌺 Nauryz Today",
                text: "Today, Nauryz is officially celebrated in Kazakhstan and many Turkic countries. Large concerts, fairs, and ethnic villages are organized in cities. In rural areas, however, the holiday is still held as an event that unites the community and brings neighbors closer together. Nauryz is an important tool for strengthening national identity and conveying cultural heritage to future generations.",
              },
              {
                title: "💌 Cultural and Spiritual Significance",
                text: "Nauryz is not just a festive mood; it is a spiritual moment that promotes harmony with nature, understanding, and kindness among people. Through this holiday, Kazakhs and other peoples recall their cultural roots and renew their common values.",
              },
              {
                title: "🧩 Conclusion",
                text: "Nauryz Meiramy (Nauryz Holiday) is a convergence point of time, tradition, and spiritual values. It has been preserved in the nation's memory for centuries and has been renewed for the new generation. This holiday is a clear reflection of the Kazakh people's philosophy of living in harmony with nature.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "traditions",
      category: {
        heading: "Traces of Mastery: Traditional Crafts",
        paragraph:
          "Artworks created by the hands of nomadic masters and their history",
      },
      articles: [
        {
          id: 4,
          img: pic4,
          name: "The Warmth and Art of the Steppe",
          text: "Felt making (Kiiз basu) is a traditional craft that holds a special place not only in the life of Kazakhs but also in the lives of all Central Asian nomads. Items made from felt not only served everyday needs but were also a manifestation of artistry and culture. For the Kazakh people, felt is the warmth of the home, the beauty of the household, and a mark of craftsmanship.",
          content: {
            sections: [
              {
                title: "🐎 Historical Origin",
                text: "The history of felt making stretches back thousands of years. Archaeological evidence proves that as early as the 1st millennium BC, nomads in the Altai and Saryarka regions widely used felt in daily life. Felt covers, carpets, and the elements of the yurt (tuyrlyk and uzigi) were fundamental elements of the nomadic lifestyle. The use of felt developed in connection with the Kazakhs' engagement in animal husbandry and their mastery of processing sheep's wool.",
              },
              {
                title: "📖 The Felt Making Process",
                text: "Traditional felt making is meticulous labor consisting of several stages. First, the sheep's wool is sheared, cleaned, and freed from dust and debris. Then the wool is sprinkled with hot water, spread evenly, and rolled onto a reed mat. The rolled mat is beaten and rolled by several people, allowing the wool fibers to bond. The songs, jokes, and banter used during this process are part of the ritual, adding mood to the work.",
              },
              {
                title: "🌺 Symbolism and Cultural Significance",
                text: "For nomads, felt is a sign of warmth, prosperity, and a steadfast life. Felt making is not just about creating a necessary household item; it is a communal task that unites the community. Women and girls work together, sharing experiences, stories, and songs. The patterns on the felt display the distinct characteristics of each clan.",
              },
              {
                title: "📆 Changes Over Time",
                text: "During the Soviet era, felt making continued at an industrial level in professional artels and factories. However, the quality and pattern of traditionally hand-made felt were always highly valued. Nowadays, while its everyday importance has decreased, it is experiencing a revival in ethno-tourism, the fashion industry, and interior decoration.",
              },
              {
                title: "💌 Modern Significance",
                text: "Today, felt making is an important part of cultural heritage. Masters present their work at exhibitions and fairs and teach craftsmanship lessons to the youth. Felt products are finding new life by combining with modern design. This craft remains a clear example of generational continuity.",
              },
              {
                title: "🧩 Conclusion",
                text: "Felt making is an art that reflects the nomadic way of life, their connection with nature, and community cooperation. It has adapted to changes over the centuries while preserving its essence and spirit. Preserving this craft is one way of preserving national culture.",
              },
            ],
          },
        },
        {
          id: 5,
          img: pic5,
          name: "A Sign of a Girl's Transition into Bridehood",
          text: "Saukele is the most beautiful and solemn headdress of the Kazakh people, intended for the bride. It is not just a decorative item but also a cultural symbol representing the family's status and the girl's step into a new life. Making a Saukele is an art form that requires a long time and special skill.",
          content: {
            sections: [
              {
                title: "🐎 Historical Origin",
                text: "The history of the Saukele is closely linked to traditional Kazakh wedding customs. Archaeological data and ethnographic studies prove that the Saukele was widespread in the nomadic environment from the 14th to the 18th centuries. Many Saukeles were decorated with silver jewelry, pearls, corals, and precious stones, and their height sometimes reached 70-80 centimeters.",
              },
              {
                title: "📖 The Manufacturing Process",
                text: "Making a Saukele is a complex process that lasts for months. First, its base is made of felt or quilted material. The exterior is covered with expensive fabric and decorated with patterned plates plated with silver, pearls, and precious stones. One of the important elements is the ukі (owl feathers) attached to the top, believed to protect from evil.",
              },
              {
                title: "🌺 Cultural and Symbolic Meaning",
                text: "The Saukele is not just about beauty; it is a cultural code with deep meaning. It symbolizes the bride's entry into a new family, future prosperity, and respect. A tall Saukele indicates the status of the girl's parents, while the decorations demonstrate the wealth and skill of the family.",
              },
              {
                title: "📆 Changes Over Time",
                text: "During the Soviet era, the Saukele became less commonly used, mostly turning into ethnographic collections and museum exhibits. However, in the years of independence, interest in traditional fashion increased, and the Saukele once again became part of wedding celebrations.",
              },
              {
                title: "💌 Modern Significance",
                text: "Today, making Saukele is a developing field of ethnic craftsmanship. Masters engaged in its production participate in international exhibitions, introducing Kazakh culture to the world. Furthermore, the Saukele is often used in photoshoots and cultural events as the main element of national dress.",
              },
              {
                title: "🧩 Conclusion",
                text: "Making Saukele is a vivid manifestation of a national tradition that has continued uninterrupted for centuries. This art is not just a material value but also a spiritual heritage preserved in the people's memory. Through the Saukele, the culture and traditions of the Kazakh people are passed down from generation to generation.",
              },
            ],
          },
        },
        {
          id: 6,
          img: pic6,
          name: "Art Transparent as Marble",
          text: "Jewelry (Zergerlik) is the most delicate type of craft in Kazakh culture that combines beauty and meaning, requiring supreme skill. It is not just making decorative items; in every pattern and form lies a spiritual code left by our ancestors, preserving aesthetic perception and life philosophy. Items from the hands of a jeweler are not just decorative elements but a mirror reflecting the status, taste, and history of their owner.",
          content: {
            sections: [
              {
                title: "🐎 Historical Origin",
                text: "The art of jewelry developed in the Kazakh steppe from ancient times. Artifacts found in archaeological excavations—items inlaid with gold, silver, and precious stones—are evidence of this art's thousand-year history. In nomadic life, jewelry was not just for fashion; it was a sign indicating certain status, wealth, and nobility. Especially, bride's jewelry, warriors' weapons, and horse harnesses were decorated with great skill.",
              },
              {
                title: "📖 Techniques and Materials",
                text: "In traditional jewelry art, silver was considered the main material, valued as a symbol of purity and protective power. Additionally, gold, copper, and precious and semi-precious stones—pearls, agate, jet, turquoise—were widely used. The methods of making decorations varied: casting in a mold, forging, engraving, chasing, blackening (niello), embossing, filigree. These methods defined the uniqueness of each item and formed regional styles.",
              },
              {
                title: "🌺 Cultural and Symbolic Meaning",
                text: "Deep symbolism lies in the shape and pattern of each piece of jewelry. The 'Tuyetaban' (camel's foot) pattern is a sign of strength and endurance, the 'Qoshqar muiz' (ram's horn) signifies abundance and prosperity. Earrings, necklaces, and amulets for girls and women were worn not only for beauty but also with the belief that they protected from evil. Jewelry art highlighted both the delicacy of women and the dignity of men and was considered a heritage passed down through generations.",
              },
              {
                title: "📆 Changes Over Time",
                text: "During the Soviet era, jewelry art was elevated from everyday use to the level of decorative and applied art. The jewelry craft was taught in special workshops and art schools, and the works of Kazakh jewelers were presented at national exhibitions. Today, this art is finding application by combining with modern design in fashion houses, national brands, and interiors.",
              },
              {
                title: "💌 Modern Significance",
                text: "In modern Kazakhstan, jewelry art is an integral part of the national brand and ethno-cultural tourism. Local masters participate in international exhibitions, combining traditional patterns with modern forms, and entering the world fashion stage. The youth are also showing interest in jewelry, mastering this craft through workshops and online courses.",
              },
              {
                title: "🧩 Conclusion",
                text: "Jewelry is an art that has found the language of metal and stone, preserving the history and aesthetics that have continued for centuries. Without losing its delicacy, spiritual depth, and symbolic meaning, it is adapting to the demands of the new era. Preserving this art means safely delivering the precious treasure of Kazakh culture to the future.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "food",
      category: {
        heading: "Taste and Tradition: National Dishes",
        paragraph:
          "The national cuisine and art of cooking have been passed down from generation to generation.",
      },
      articles: [
        {
          id: 7,
          img: pic7,
          name: "The nation's main dish",
          text: "Beshbarmak is the most famous and essential national dish of the Kazakh people. Its name means 'five fingers,' a reference to the ancient tradition of eating it with one's hands. This dish is more than just a daily meal; it is an embodiment of the connection between generations, a symbol of hospitality, and a cherished tradition. The Beshbarmak dastarkhan (the ceremonial table spread) is a profound symbol of respect and unity in Kazakh culture.",
          content: {
            sections: [
              {
                title: "🐎 Historical origins",
                text: "The history of beshbarmak is deeply intertwined with the nomadic lifestyle, which was fundamentally based on animal husbandry. Its primary ingredients are the meat of sheep, horse, and cattle. In nomadic life, the lengthy process of boiling the meat not only enriched its flavor but also transformed it into a nourishing dish, vital for warming the body in the harsh cold of the steppe. While beshbarmak is a quintessential Kazakh dish, similar traditional meals are found among the Kyrgyz, Nogai, and Bashkir peoples, with each nation preparing it according to their own unique customs and variations.",
              },
              {
                title: "📖 Method of preparation",
                text: "Traditional Beshbarmak is prepared by simmering meat in a large pot for several hours. This process results in a clear broth (sorpa) and exceptionally tender meat. Once the meat is cooked, it is combined with wide, flat noodles. These noodles are specially rolled out from dough, stretched thin, and cut into squares or rectangles. An essential part of the dish is the addition of onions and spices to the broth.",
              },
              {
                title: "🌺 Cultural and social significance",
                text: "Beshbarmak is more than just a dish; it is a profound symbol of unity and hospitality in Kazakh culture. The meat is traditionally served on a large platter and is first presented to the most respected elders at the head of the dastarkhan (the ceremonial table). The offering of the boiled sheep's head to the guest of honor is a special and deeply respected tradition. This cherished meal brings family and community together, creating a warm atmosphere for shared conversation and storytelling..",
              },
              {
                title: "📆 Changes over time",
                text: "During the Soviet era, beshbarmak was rarely prepared in everyday life, yet it retained its significance as a celebratory dish. Today, it is also widely found on the menus of urban restaurants. Modern chefs are experimenting with the recipe, developing variations with fish, vegetables, or chicken; however, the classic version is still held in the highest esteem..",
              },
              {
                title: "💌 Current importance",
                text: "Today, beshbarmak stands as a premier gastronomic brand of Kazakhstan. It is showcased not only domestically but also at international exhibitions and food fairs. For visitors from abroad, beshbarmak offers one of the most essential and authentic ways to experience the taste of Kazakh culture",
              },
              {
                title: "🧩 Overall",
                text: "Beshbarmak is more than just a dish; it is a mirror reflecting culture, history, and national identity. While it has adapted to changes over the centuries, it has steadfastly preserved its core essence, its symbolic power, and its unique role in uniting people..",
              },
            ],
          },
        },
        {
          id: 8,
          img: pic8,
          name: "The Steppe's Sweet Heritage",
          text: "Zhent is one of the ancient traditional sweet dishes of the Kazakh people. Valued for its unique taste, long shelf life, and high nutritional value, it held an important place in the nomadic way of life. Zhent is not merely a decoration for the dastarkhan (festive table); it is also an integral part of the culture of hospitality.",
          content: {
            sections: [
              {
                title: "🐎 Historical origins",
                text: "The history of Zhent is deeply intertwined with the economic and domestic practices of the nomads. Since ancient times, the Kazakh people have cultivated millet extensively, using it to create a variety of dishes. Zhent is a nutritious food prepared by mixing millet with animal fat and sweetening agents such as sugar, honey, or sometimes dried fruits. It was commonly prepared for long journeys, during the long winter nights, and for festive occasions.",
              },
              {
                title: "📖 Method of preparation",
                text: "To prepare traditional Zhent, millet is first roasted and then ground into a fine powder using a mill. This powder is then combined with butter and sugar (or honey). In some regions, ingredients such as raisins, dried apricots, or nuts are added to the mixture. All components are thoroughly blended and then pressed into small round or rectangular shapes. Once prepared, Zhent can be enjoyed immediately or stored for long-term use.",
              },
              {
                title: "🌺 Cultural and social significance",
                text: "Zhent holds a special place in the Kazakh tradition of hospitality. When honored guests arrive, sweets are an essential part of the dastarkhan (the festive table), served alongside the main meat dishes, and among them, Zhent occupies a unique position. For children, it is the taste of celebration; for adults, it is a nostalgic memory of days gone by. Zhent is natural and rich in nutrients, and millet—its main ingredient—is a symbol of prosperity and abundance in Kazakh culture.",
              },
              {
                title: "📆 Changes over time",
                text: "During the Soviet era, Zhent was preserved in rural areas but was rarely prepared in cities. However, following independence, interest in the national cuisine grew, and Zhent experienced a revival in popularity. Today, it is a common feature on the menus of national restaurants and at ethnic festivals. Some skilled chefs are enriching Zhent with various new ingredients, presenting it as a modern dessert.",
              },
              {
                title: "💌 Current importance",
                text: "Today, Zhent is not only a national dish but also an integral part of Kazakhstan's gastronomic brand, representing the country on the international stage. At ecotourism sites and ethnic festivals, it is offered to foreign visitors as a unique culinary experience. Its simple method of preparation and all-natural composition align perfectly with modern healthy lifestyle trends.",
              },
              {
                title: "🧩 Overall",
                text: "Zhent is a sweet delicacy that has endured through the centuries. It embodies the harmony of the nomads' life with nature, their profound hospitality, and the beauty found in simplicity. More than just a food, Zhent is a sweet national heritage—a precious flavor passed down as a legacy to future generations.",
              },
            ],
          },
        },
        {
          id: 9,
          img: pic9,
          name: "A Taste of the Steppe That Lasts",
          text: "Kurt is one of the traditional dairy products of the Kazakh people, a staple in the nomadic diet for centuries. Its unique taste, long shelf life, and health benefits made it an indispensable food in the nomadic way of life. Kurt is more than just sustenance; it is a vivid reflection of living in harmony with nature.",
          content: {
            sections: [
              {
                title: "🐎 Historical origins",
                text: "The history of Kurt is deeply intertwined with the Kazakh lifestyle, based on animal husbandry. For nomads, finding effective ways to preserve dairy products was a vital part of survival. Kurt was born from this necessity: prepared in summer, it was used as provisions during the long winter days, long journeys, and military campaigns.",
              },
              {
                title: "📖 Method of preparation",
                text: "Traditional Kurt is made from boiled ayran (a fermented milk drink) or katyk (strained yogurt). The ayran is simmered over a low fire until it thickens. It is then strained to separate the whey. The remaining thick mass is salted and shaped by hand into small balls or pellets. The finished Kurt is dried for several days in the sun or in a shaded, breezy place. This process allows it to be stored for months, even years, without spoiling.",
              },
              {
                title: "🌺 Cultural and social significance",
                text: "Kurt is also a part of hospitality. On the traditional dastarkhan (feast table), Kurt is offered alongside kumys or shubat (fermented dairy drinks). It was also the most convenient provision for travel, as it is lightweight, nutritious, and long-lasting. Furthermore, Kurt has always been valued as a tasty and healthy snack for children.",
              },
              {
                title: "💌 Types and regional characteristics",
                text: "There are several types of Kurt: 'Mayly Kurt' with added butter, 'Aqmalta Kurt' which is finely ground and dried, and 'Esilgen Kurt' which is powdered. Each region prepared it according to its own traditions, adding seasonings or changing the shape. In some areas, Kurt is also added to soups.",
              },
              {
                title: "📆 Current importance",
                text: "Today, Kurt has become a national brand. At ecotourism sites and national festivals, international guests taste Kurt and take it home as a unique souvenir from Kazakhstan. Moreover, its high protein and all-natural composition are making it popular among those who follow a healthy lifestyle.",
              },
              {
                title: "🧩 Overall",
                text: "Kurt is not just food; it is the fruit of nomadic wisdom. It demonstrates harmony with nature, a life without waste, and is a way of passing national traditions from generation to generation.",
              },
            ],
          },
        },
      ],
    },
  ],
  kz: [
    {
      id: "heritage",
      category: {
        heading: "Мәңгілік Мұра: Дәстүрлер",
        paragraph:
          "Ата-бабадан жалғасқан салт-дәстүрлер мен әдет-ғұрыптар, ұрпаққа рухани байлық сыйлайды.",
      },
      articles: [
        {
          id: 1,
          img: pic1,
          name: "Қазақ үйлену салтындағы айрықша рәсім",
          text: "Қазақтың ғасырлар бойы қалыптасқан үйлену дәстүрлері ішінде Беташар — ерекше мәнгеие. Бұл рәсімнің мақсаты — жаңа түскен келінді қайын жұртына таныстыру, оған отбасының үлкендері мен туыстарын құрметпен қабылдауды үйрету. Беташар — тек формальды таныстыру емес, ол – әдеп, сыпайылық, және қазақы құндылықтардың көрінісі.",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Беташардың түп-төркіні көшпелі қазақ қоғамының әлеуметтік құрылымына барып тіреледі. Ертеде әр ру мен отбасының ішінде туыстық байланыстарды білу — маңызды мәдени ереже болған. Жаңа келін ауылға келгенде, ол бүкіл әулетті танып, оларға сәлем беру арқылы өзінің сыпайылығын және жаңа ортаға бейімделуге дайындығын білдіретін. Беташар кезінде келіннің бетін ақ орамалмен немесе жібек матамен жапқан, бұл – ибалылық пен жаңа өмірдің басталуын білдіретін белгі.",
              },
              {
                title: "Рәсімнің өткізілу тәртібі",
                text: "Дәстүр бойынша, Беташарды ақын немесе жыршы жүргізеді. Ол домбыра тартып, әр туыстың атын өлеңмен атап, келінге сол кісілерге сәлем салуды нұсқайды. Бұл өлең-жырлар бір жағынан көңілді, екінші жағынан тәрбиелік мәні бар. Әдетте, жыр барысында отбасы мүшелерінің мәртебесі, әулет тарихы және ізгі тілектер айтылады. Келін әр аты аталған сайын иіліп, қолын кеудесіне қойып сәлем береді.",
              },
              {
                title: "Мазмұны мен мәні",
                text: "Беташар — қазақ қоғамында бірнеше деңгейлі мағынаға ие. Біріншіден, ол — туыстық байланысты нығайту құралы. Екіншіден, келіннің жаңа ортаға құрметпен қабылдануының белгісі. Үшіншіден, бұл – көпшілік алдында жаңа өмірге ресми қадам басу сәті.",
              },
              {
                title: "Уақыт өте келе өзгерістер",
                text: "Кеңес дәуірінде көптеген дәстүрлер сияқты Беташар да өзгеріске ұшырады. Кей жерлерде бұл рәсім қысқарып, ресми той бағдарламасының бір бөлігіне айналды. Дегенмен, тәуелсіздік алғаннан кейін ұлттық дәстүрлерге қызығушылық артып, Беташар қайта жаңғырды. Қазіргі таңда, кейбір өңірлерде бұл рәсімге заманауи элементтер қосылады, бірақ негізгі мәні — сыйластық пен таныстыру — сақталып отыр.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Беташар бүгінде тек ауылдық жерлерде ғана емес, қаладағы тойларда да жиі орындалады. Ол – қазақ мәдениетінің тірі куәгері, ұрпақтан ұрпаққа берілетін мәдени код. Бұл рәсім арқылы жастар ұлттық дәстүрлермен танысып, отбасы мен қоғам арасындағы байланыс нығаяды.",
              },
              {
                title: "Қорытынды",
                text: "Беташар — уақыт сынағынан өткен, халық жадында сақталған, әрі бүгінгі күнге бейімделген салт. Ол келінді жаңа өмірге қадам басуға дайындайды, әулетпен таныстырады және ең бастысы — қазақы әдеп пен құрметті насихаттайды.",
              },
            ],
          },
        },
        {
          id: 2,
          img: pic2,
          name: "Баланың алғашқы қадамын тойлау дәстүрі",
          text: "Қазақ халқы үшін баланың алғашқы қадамы — тек физикалық жетістік қана емес, рухани және мәдени тұрғыда да маңызды белес. Тұсаукесер — осы сәтті ерекше атап өтуге арналған салт. Бұл рәсімде баланың аяғына жіп байланып, оны беделді, адал адам кеседі. Рәсімнің мәні — баланың өмір жолы ашық, адал әрі сәтті болсын деген тілек",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Тұсаукесердің тарихы көшпелі қазақ қоғамының бала тәрбиесіне байланысты дәстүрлерінен бастау алады. Көшпенділер үшін әр баланың қадамы — отбасының, рудың болашағының кепілі. Сондықтан алғашқы қадамды белгілі бір рәсіммен атап өту маңызды болған. Тұсауды алажіалаж жіппен, кейде ақ пен қара жіптен өру — адалдық пен әділеттіліктің символы. Кей өңірлерде шөптен немесе жүннен жасалған жіп қолданылған, бұл — табиғатпен үйлесімді өмір сүруді білдірген.",
              },
              {
                title: "Рәсімнің өткізілу тәртібі",
                text: "Тұсаукесер әдетте баланың туған-туыстары мен ауылдастарының қатысуымен өтеді. Алдымен балаға ала жіп байланады. Рәсімді жүргізетін адам — адалдығымен, еңбекқорлығымен танылған, өмірде беделді, үлгілі тұлға болуы керек. Ол жіпті кескен соң, балаға алғашқы қадамдарын жасауға көмектеседі. Жиналғандар балаға бата береді, ән-жыр айтады, кейде арнайы ойындар ұйымдастырады.",
              },
              {
                title: "Мазмұны мен мәні",
                text: "Тұсаукесердің негізгі мәні — баланың болашағына тілек айту. Ала жіп — адал жолдың, тік жүрістің нышаны. Беделді адамның тұсауды кесуі — сол қасиеттердің балаға даруын тілеу. Бұл рәсім отбасы мен қауымдастық арасындағы байланысты нығайтып, бір-біріне қолдау көрсетудің мәдениетін қалыптастырады.",
              },
              {
                title: "Уақыт өте келе өзгерістер",
                text: "Кеңес дәуірінде тұрмыстық салттардың кейбірі ұмыт бола бастады, бірақ Тұсаукесер кең таралған күйінде қалды. Қазіргі таңда бұл дәстүр ауылда да, қалада да орындалады. Кей отбасылар рәсімді заманауи элементтермен толықтырады — фото-видео түсіру, мерекелік дастарқан, арнайы шақыру билеттері. Дегенмен, негізгі символикасы өзгеріссіз сақталған.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Тұсаукесер — тек отбасы тойы ғана емес, ұрпақтар сабақтастығын бейнелейтін мәдени код. Бұл рәсім арқылы балаларға дәстүрді құрметтеу, үлкендердің батасын алу, қоғаммен байланыс орнату үйретіледі. Ол қазақтың балаға деген мейірімі мен үмітін ұрпақтан ұрпаққа жеткізетін маңызды құрал болып қала береді.",
              },
              {
                title: "Қорытынды",
                text: "Тұсаукесер — уақыт сынынан өткен, мәні терең, мазмұны бай дәстүр. Ол баланың алғашқы қадамын өмір жолының бастауына айналдырып, оған ізгі тілектер мен ақ батаның күшін дарытады. Бұл — қазақ қоғамындағы бірлік пен қолдаудың айқын көрінісі.",
              },
            ],
          },
        },
        {
          id: 3,
          img: pic3,
          name: "Көктемнің келуін қарсы алатын мереке",
          text: "Наурыз — қазақ халқының ең көне әрі ең маңызды мерекелерінің бірі. Ол күн мен түннің теңелуін, табиғаттың жаңаруын және жаңа жылдың басталуын білдіреді. Қазақ мәдениетінде Наурыз тек астрономиялық құбылыс қана емес, өмірдің жаңаруы мен үміттің қайта оралуының символы болып саналады",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Наурыздың тарихы мыңдаған жылдар бұрынғы ежелгі иран, түркі және басқа да халықтардың табиғатпен байланысты күнтізбелік дәстүрлерінен бастау алады. Көшпенділер үшін күн мен түннің теңелуі — жыл маусымдарының ауысуындағы маңызды белес. Бұл кезеңде жер жылына бастайды, мал төлдейді, жаңа шаруашылық маусымы басталады. Археологиялық деректер мен жазба ескерткіштер Наурыздың Орталық Азия мен Таяу Шығыста бірнеше мың жыл бойы атап өтілгенін көрсетеді.",
              },
              {
                title: "Мерекенің мазмұны мен мәні",
                text: "Наурыз — жаңару, татулық пен бірліктің мерекесі. Мерекенің басты тағамы — наурыз көже, ол жеті түрлі дәмнен дайындалады, әрбір ингредиент молшылық пен берекенің нышаны саналады. Мереке күндері ауылдарда ойын-сауық, бәйге, күрес, алтыбақан секілді ұлттық ойындар ұйымдастырылады. Адамдар бір-біріне қонаққа барып, өкпе-ренішті кешіріп, жаңа жылды ізгі тілекпен бастайды.",
              },
              {
                title: "Кеңес дәуіріндегі өзгерістер",
                text: "Кеңес дәуірінде Наурыз мерекесі кей кезеңдерде ресми түрде тыйым салынған. Алайда, халық арасында ол жасырын түрде тойланып отырды. 1988 жылы ғана мереке қайта жаңғыртылып, республикалық деңгейде атап өтіле бастады. Бұл — ұлттық дәстүрлердің сақталуына және жаңаруына жол ашқан маңызды тарихи сәт болды.",
              },
              {
                title: "Қазіргі Наурыз",
                text: "Бүгінде Наурыз Қазақстанда және көптеген түркі елдерінде ресми мереке ретінде аталып өтеді. Қалаларда үлкен концерттер, жәрмеңкелер, этноауылдар ұйымдастырылады. Ауылдық жерлерде болса, мереке әлі де қауымдастықты біріктіретін, көрші-қолаңды жақындастыратын шара ретінде өткізіледі. Наурыз — ұлттық бірегейлікті нығайтып, мәдени мұраны болашақ ұрпаққа жеткізудің маңызды құралы.",
              },
              {
                title: "Мәдени және рухани маңызы",
                text: "Наурыз — тек мерекелік көңіл-күй ғана емес, табиғатпен үндестікті, адамдар арасындағы түсіністік пен мейірімділікті дәріптейтін рухани сәт. Бұл мереке арқылы қазақтар мен басқа да халықтар өздерінің мәдени тамырын еске алып, ортақ құндылықтарын жаңғыртады.",
              },
              {
                title: "Қорытынды",
                text: "Наурыз мейрамы — уақыттың, дәстүрдің және рухани құндылықтардың тоғысқан нүктесі. Ол ғасырлар бойы ұлттың жадында сақталып, жаңа буынға жаңарып жеткен. Бұл мереке — қазақ халқының табиғатпен үйлесімді өмір сүру философиясының айқын көрінісі.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "traditions",
      category: {
        heading: "Шеберлік ізі: Дәстүрлі қолөнер",
        paragraph:
          "Көшпенділер шеберлерінің қолынан шыққан өнер туындылары мен олардың тарихы",
      },
      articles: [
        {
          id: 4,
          img: pic4,
          name: "Даланың жылуы мен өнері",
          text: "Киіз басу — қазақтың тұрмысында ғана емес, бүкіл Орталық Азия көшпенділерінің өмірінде ерекше орын алған дәстүрлі қолөнер. Киізден дайындалған бұйымдар тек тұрмыстық қажеттілікті өтеп қана қоймай, көркемдік пен мәдениеттің көрінісі болды. Қазақ халқы үшін киіз — үйдің жылуы, тұрмыстың сәні, шеберліктің нышаны.",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Киіз басу тарихы мыңдаған жылдарға созылады. Археологиялық деректер б.з.д. І мыңжылдықта-ақ Алтай мен Сарыарқа өңірінде көшпенділердің киізді тұрмыста кеңінен қолданғанын дәлелдейді. Киізден жасалған жабулар, төсеніштер, киіз үйлердің туырлығы мен үзігі — көшпенді өмір салтының негізгі элементтері болды. Киізді пайдалану қазақтардың мал шаруашылығымен айналысуына, қой жүнін өңдеу өнерін меңгеруіне байланысты дамыды.",
              },
              {
                title: "Киіз басу процесі",
                text: "Дәстүрлі киіз басу — бірнеше кезеңнен тұратын ұқыпты еңбек. Алдымен қойдың жүнін қырқып, сабайды, шаң-тозаңнан тазартады. Содан кейін жүнді ыстық сумен шылап, біркелкі етіп жайып, ши үстіне орайды. Оралған ши бірнеше адамның көмегімен теуіп, домалатып, жүн талшықтарының бірігуіне мүмкіндік береді. Бұл процесте қолданылатын ән-жыр мен әзіл-қалжың да рәсімнің бір бөлігі болып саналады, ол жұмысқа көңіл-күй сыйлайды.",
              },
              {
                title: "Символикасы мен мәдени маңызы",
                text: "Киіз — көшпелілер үшін жылылық, береке және берік өмірдің белгісі. Киіз басу — тек тұрмысқа қажетті бұйымды жасау ғана емес, қауымдастықты біріктіретін ортақ іс. Әйелдер мен қыз-келіншектер бірлесіп істеп, тәжірибені, әңгіме мен әнді бөліседі. Киіздегі ою-өрнектер арқылы әр рудың өзіндік ерекшелігі көрініс табады.",
              },
              {
                title: "Уақыт өте келе өзгерістер",
                text: "Кеңес дәуірінде киіз басу кәсіби артельдер мен фабрикаларда өндірістік деңгейде жалғасты. Дегенмен, қолмен басылған дәстүрлі киіздің сапасы мен өрнегі әрдайым жоғары бағаланды. Қазіргі уақытта бұл өнердің тұрмыстық маңызы азайғанымен, этнотуризм мен сән индустриясында, интерьер безендіруде қайта жаңғырып отыр.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Бүгінде киіз басу — мәдени мұраның маңызды бөлігі. Шеберлер көрмелер мен жәрмеңкелерде өз жұмыстарын ұсынып, жастарға шеберлік сабақтарын өткізеді. Киіз бұйымдары заманауи дизайнмен үйлесіп, жаңа өмір табуда. Бұл өнер ұрпақтар сабақтастығының айқын мысалы болыплы болып қала береді.",
              },
              {
                title: "Қорытынды",
                text: "Киіз басу — көшпенділердің өмір сүру салтын, табиғатпен байланысын және қауымдық ынтымақтастығын бейнелейтін өнер. Ол ғасырлар бойы өзгерістерге бейімделіп, өзінің мәні мен рухын сақтап келеді. Бұл өнерді сақтау — ұлттық мәдениетті сақтаудың бір жолы.",
              },
            ],
          },
        },
        {
          id: 5,
          img: pic5,
          name: "Қыздың қалыңдыққа айналу белгісі",
          text: "Сәукеле — қазақ халқының қалыңдыққа арналған ең әсем әрі салтанатты бас киімі. Бұл тек сәндік бұйым ғана емес, сонымен қатар, отбасының мәртебесін, қыздың жаңа өмірге қадам басуын бейнелейтін мәдени символ. Сәукеле жасау — ұзақ уақыт пен ерекше шеберлікті талап ететін өнер түрі.",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Сәукеленің тарихы қазақтың дәстүрлі үйлену салттарымен тығыз байланысты. Археологиялық деректер мен этнографиялық зерттеулер сәукеленің XIV-XVIII ғасырларда көшпелі ортада кеңінен таралғанын дәлелдейді. Көптеген сәукелелер күміс әшекейлермен, меруерт, маржан, асыл тастармен безендірілген, ал биіктігі кейде 70-80 сантиметрге жеткен.",
              },
              {
                title: "Жасалу процесі",
                text: "Сәукеле жасау - айлар бойы жалғасатын күрделі жұмыс. Ең алдымен, оның негізі киізден немесе қатырмадан дайындалады. Сыртқы бөлігі қымбат матамен қапталып, күміспен қапталған өрнекті пластиналармен, меруерт, асыл тастармен әшекейленеді. Маңызды элементтердің бірі - төбесіне тағылатын үкі, ол жамандықтан қорғайды деп сенілген.",
              },
              {
                title: "Мәдени және символдық мәні",
                text: "Сәукеле - тек әдемілік емес, терең мағыналы мәдени код. Ол қалыңдықтың жаңа әулетке келуін, болашақтағы береке мен құрметті бейнелейді. Биік сәукеле - қыздың ата-анасының мәртебесін көрсетсе, әшекейлер - әулеттің байлығы мен шеберлігін паш етеді.",
              },
              {
                title: "Уақыт өте келе өзгерістер",
                text: "Кеңес дәуірінде сәукеле сирек қолданылатын болды, көбіне этнографиялық коллекциялар мен музей экспонаттарына айналды. Дегенмен, тәуелсіздік жылдары дәстүрлі сәнге деген қызығушылық артып, сәукеле қайтадан үйлену тойларының бір бөлігіне айналды.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Бүгінде сәукеле жасау - этноқолөнердің дамып келе жатқан саласы. Оны дайындаумен айналысатын шеберлер халықаралық көрмелерге қатысып, Қазақстан мәдениетін әлемге танытуда. Сонымен қатар, сәукеле фотосессиялар мен мәдени іс-шараларда ұлттық киімнің басты элементі ретінде жиі қолданылады.",
              },
              {
                title: "Қорытынды",
                text: "Сәукеле жасау - ғасырлар бойы үзілмей келе жатқан, ұлттық дәстүрдің айқын көрінісі. Бұл өнер тек материалдық құндылық емес, сонымен бірге, халық жадында сақталған рухани мұра. Сәукеле арқылы қазақ халқының мәдениеті мен дәстүрлері ұрпақтан-ұрпаққа жалғаса береді.",
              },
            ],
          },
        },
        {
          id: 6,
          img: pic6,
          name: "Мәрмәрдай мөлдір өнер",
          text: "Зергерлік — қазақ халқының мәдениетінде сұлулық пен мағынаны тоғыстырған ең нәзік әрі аса шеберлікті қажет ететін қолөнер түрі. Бұл тек әшекей бұйым жасау ғана емес, әрбір өрнегі мен формасында ата-бабамыздан қалған рухани код, эстетикалық таным мен өмірлік философия сақталған өнер. Зергердің қолынан шыққан бұйымдар — тек сәндік элемент емес, иесінің мәртебесін, талғамын және тарихын бейнелейтін айна.",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Зергерлік өнері қазақ даласында ерте замандардан дамыған. Археологиялық қазбалардан табылған алтын, күміс, асыл тастармен көмкерілген бұйымдар — бұл өнердің мыңжылдық тарихының айғағы. Көшпелі өмірде зергерлік тек сән үшін ғана емес, белгілі бір мәртебені, дәулетті және тектілікті білдіретін белгі болған. Әсіресе, қалыңдық әшекейлері, батырлардың қару-жарағы мен ат әбзелдері аса шеберлікпен безендірілген.",
              },
              {
                title: "Техникасы мен материалдары",
                text: "Дәстүрлі зергерлік өнерде күміс басты материал саналған, себебі ол тазалық пен қорғаушы күштің символы ретінде бағаланған. Сонымен қатар алтын, мыс, асыл және жартылай асыл тастар — маржан, ақық, лағыл, ферузе кең қолданылған. Әшекей жасау тәсілдері әртүрлі болған: қалыпқа құю, қақтау, өрнектеу, оймыштау, қаралау, нақыштау, зерлеу. Бұл әдістер әр бұйымның ерекшелігін айқындап, өңірлік стильдерді қалыптастырды.",
              },
              {
                title: "Мәдени және символдық мәні",
                text: "Әр әшекейдің пішіні мен өрнегінде терең символика жатыр. «Түйетабан» өрнегі — күш пен төзімділіктің белгісі, «Қошқар мүйіз» — молшылық пен өркендеуді білдіреді. Қыз-келіншектерге арналған сырға, алқа, бойтұмарлар тек сұлулық үшін емес, жамандықтан сақтайды деген наныммен тағылған. Зергерлік өнер әйелдердің нәзіктігі мен ерлердің мәрттігін қатар айшықтаған, әрі ұрпақтан-ұрпаққа жалғасатын мұра саналған.",
              },
              {
                title: "Уақыт өте келе өзгерістер",
                text: "Кеңес дәуірінде зергерлік өнер тұрмыстық қолданудан сәндік-қолданбалы өнер деңгейіне көтерілді. Арнайы шеберханалар мен көркемсурет училищелерінде зергерлік кәсіп үйретіліп, ұлттық көрмелерде қазақ зергерлерінің туындылары таныстырылды. Бүгінгі таңда бұл өнер заманауи дизайнмен үйлесіп, сән үйлерінде, ұлттық брендтер мен интерьерде қолданысын тауып отыр.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Қазіргі Қазақстанда зергерлік өнер — ұлттық бренд пен этномәдени туризмнің ажырамас бөлігі. Жергілікті шеберлер халықаралық көрмелерге қатысып, дәстүрлі өрнектерді заманауи формалармен үйлестіріп, әлемдік сән сахнасына шығуда. Жастар да зергерлікке қызығушылық танытып, шеберлік сабақтары мен онлайн курстар арқылы бұл өнерді меңгеріп жүр.",
              },
              {
                title: "Қорытынды",
                text: "Зергерлік — метал мен тастың тілін таба отырып, ғасырлар бойы жалғасқан тарих пен эстетиканы сақтап келе жатқан өнер. Ол өз нәзіктігін, рухани тереңдігін және символдық мәнін жоғалтпай, жаңа заман талабына бейімделуде. Бұл өнерді сақтау — қазақ мәдениетінің асыл қазынасын келешекке аман жеткізу.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "food",
      category: {
        heading: "Taste and Tradition: National Dishes",
        paragraph:
          "Ұрпақтан ұрпаққа жеткен ұлттық ас мәзірі мен тағам дайындау өнері.",
      },
      articles: [
        {
          id: 7,
          img: pic7,
          name: "Ұлттың басты асы",
          text: "Бешбармақ — қазақ халқының ең танымал әрі ең басты ұлттық тағамы. Оның атауы «бессаусақ» дегенді білдіреді, себебі ежелгі заманда оны қолмен жеген. Бұл тағам — тек күнделікті ас емес, ұрпақтар байланысының, қонақжайлылықтың және дәстүрдің бейнесі. Бешбармақ дастарқаны — қазақ мәдениетінде құрмет пен берекенің символы.",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Бешбармақтың тарихы көшпенділердің мал шаруашылығына негізделген тұрмысымен тығыз байланысты. Негізгі шикізат — қой, жылқы және сиыр еті. Көшпелі өмірде етті ұзақ пісіру оның дәмін байытып қана қоймай, суық далада денені жылытатын құнды асқа айналдырды. Қазақтардан бөлек, қырғыз, ноғай, башқұрт халықтарында да ұқсас тағамдар кездеседі, бірақ әр ұлт өзіне тән ерекшеліктерімен пісіреді.",
              },
              {
                title: "Дайындау тәсілі",
                text: "Дәстүрлі бешбармақ үшін етті үлкен қазанда бірнеше сағат бойы қайнатады, нәтижесінде сорпасы мөлдір, еті өте жұмсақ болады. Ет дайын болған соң, оған кең жайылған кеспе қосылады. Кеспені арнайы иленген қамырдан жіңішке етіп жайып, төртбұрыштап немесе ұзынша кеседі. Тағамның маңызды бөлігі — сорпаға қосылған пияз бен дәмдеуіштер.",
              },
              {
                title: "Мәдени және әлеуметтік мәні",
                text: "Бешбармақ — қазақ дастарқанындағы бірліктің және қонақжайлылықтың символы. Ет әдетте үлкен табаққа салынып, дастарқан басында отырған үлкен кісілерге бірінші ұсынылады. Құрметті қонаққа бас тарту — ерекше дәстүр. Бұл тағам отбасы мен қауымдастықты біріктіріп, әңгіме-дүкен құруға мүмкіндік береді.",
              },
              {
                title: "Уақыт өте келе өзгерістер",
                text: "Кеңес дәуірінде бешбармақ күнделікті тұрмыста сирек дайындалғанымен, мерекелік тағам ретінде маңызын сақтады. Қазіргі кезде ол қалалардағы мейрамханалар мәзірінде де кеңінен кездеседі. Заманауи аспаздар бешбармаққа түрлі эксперименттер жасап, балықпен, көкөніспен немесе тауық етімен нұсқаларын әзірлеуде, бірақ классикалық нұсқа әлі де ең жоғары бағаланады.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Бүгінде бешбармақ — Қазақстанның гастрономиялық бренді. Ол ел ішіндегі ғана емес, халықаралық деңгейдегі көрмелерде де ұсынылып жүр. Шетелден келген қонақтар үшін бешбармақ — қазақ мәдениетінің дәмін сезінудің басты жолдарының бірі.",
              },
              {
                title: "Қорытынды",
                text: "Бешбармақ — тағамнан бөлек, мәдениеттің, тарихтың және ұлттық бірегейліктің айнасы. Ол ғасырлар бойы өзгерістерге бейімделсе де, өзінің мәнін, символдық күшін және адамдарды біріктіретін рөлін сақтап келеді.",
              },
            ],
          },
        },
        {
          id: 8,
          img: pic8,
          name: "Даланың тәтті мұрасы",
          text: "Жент — қазақ халқының ежелгі дәстүрлі тәтті тағамдарының бірі. Ол ерекше дәмі, ұзақ сақталуы және тағамдық құндылығымен көшпенді тұрмыста маңызды орын алған. Жент — тек дастарқан сәні ғана емес, сонымен бірге қонақ күту мәдениетінің ажырамас бөлігі.",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Женттің тарихы көшпенділердің шаруашылық және тұрмыстық дағдыларымен тығыз байланысты. Ежелден қазақтар тарыны кеңінен өсіріп, одан түрлі тағамдар жасаған. Жент - тарыны маймен және тәтті дәм беретін қоспалармен (қант, бал, кейде кептірілген жемістер) араластыру арқылы дайындалатын қоректік тағам. Ол ұзақ сапарға шыққанда, қыстың ұзақ түндерінде және мерекелерде жиі дайындалған.",
              },
              {
                title: "Дайындау тәсілі",
                text: "Дәстүрлі жент үшін ең алдымен тарыны қуырып, диірменде тартып, ұнтақтайды. Содан кейін оған сары май мен қант (немесе бал) қосылады. Кей өңірлерде жентке мейіз, кептірілген өрік немесе жаңғак араластырады. Барлық қоспа жақсылап араластырылып, шағын домалақ немесе төртбұрышты пішінде қысылады. Ол дайын болғаннан кейін бірден жеуге де, ұзақ уақыт сақтауға да болады.",
              },
              {
                title: "Мәдени және әлеуметтік мәні",
                text: "Жент - қазақтың қонақжайлық дәстүрінде ерекше орын алған тәтті. Құрметті қонақ келгенде дастарқанға етпен бірге міндетті түрде тәттілер де қойылады, олардың ішінде женттің орны бөлек. Ол балалар үшін мерекенің, ал ересектер үшін өткен күндердің естелігі болатын. Жент - табиғи әрі дәруменге бай, ал тары - қазақ мәдениетінде берекенің нышаны.",
              },
              {
                title: "Уақыт өте келе өзгерістер",
                text: "Кеңес дәуірінде жент ауылдық жерлерде сақталғанымен, қалаларда сирек дайындалды. Дегенмен, тәуелсіздік алғаннан кейін ұлттық ас мәзіріне деген қызығушылық артып, жент қайтадан танымал болды. Қазіргі таңда ол ұлттық мейрамханалардың мәзірінде және этно-жәрмеңкелерде жиі кездеседі. Кейбір шебер аспаздар жентті түрлі жаңа қоспалармен байытып, заманауи десерт ретінде ұсынады.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Бүгінде жент - ұлттық тағам ретінде ғана емес, Қазақстанды шетелде танытатын гастрономиялық брендтің бөлігі. Экотуризм мен этнофестивальдерде жент шетелдік қонақтарға ерекше дәм ретінде ұсынылады. Оның қарапайым дайындалу тәсілі мен табиғи құрамы заманауи салауатты өмір салтына сай келеді.",
              },
              {
                title: "Қорытынды",
                text: "Жент - ғасырлар бойы ұмытылмай келе жатқан тәтті тағам. Ол көшпенділердің табиғатпен үйлесімді өмірін, қонақжайлылығын және қарапайымдылығындағы сұлулығын бейнелейді. Жент - ұлттың тәтті мұрасы, ұрпаққа аманат етер асыл дәм.",
              },
            ],
          },
        },
        {
          id: 9,
          img: pic9,
          name: "Даланың ұзақ сақталатын дәмі",
          text: "Құрт — қазақ халқының дәстүрлі сүт өнімдерінің бірі, ғасырлар бойы көшпенділердің негізгі азығының қатарында болған. Оның ерекше дәмі, ұзақ сақталуы және денсаулыққа пайдасы құртты көшпенді тұрмысында таптырмас тағамға айналдырды. Құрт — тек ас емес, сонымен бірге табиғатпен үйлесімді өмір сүрудің айқын көрінісі.",
          content: {
            sections: [
              {
                title: "Тарихи шығу тегі",
                text: "Құрттың тарихы мал шаруашылығына негізделген қазақ тұрмысымен тығыз байланысты. Көшпенділер үшін сүт өнімдерін ұзақ сақтаудың тиімді жолдарын табу өмір сүрудің маңызды бөлігі болды. Құрт осы қажеттіліктен туған: жазда дайындалып, қыстың ұзақ күндерінде, алыс сапарларда және жорықтарда азық ретінде пайдаланылды.",
              },
              {
                title: "Дайындау тәсілі",
                text: "Дәстүрлі құрт қайнатылған айраннан немесе қатықтан жасалады. Алдымен айранды баяу отта қойып, қоюланғанша қайнатады. Содан кейін сүзгіден өткізіп, сары суын бөледі. Қалған қою массаны тұздап, алақанмен домалақ немесе шағын түйір пішінде жасайды. Дайын құрт күн көзіне немесе көлеңкелі жел өтінде бірнеше күн кептіріледі. Осылайша ол айлап, тіпті жылдап бұзылмай сақталады.",
              },
              {
                title: "Мәдени және әлеуметтік мәні",
                text: "Құрт — қонақжайлықтың да бір бөлігі. Дәстүрлі дастарқанда қымыз немесе шұбатпен бірге құрт та ұсынылады. Ол сапарға шыққанда да ең қолайлы азық болған, себебі жеңіл, қоректі және ұзақ сақталады. Сонымен қатар, құрт балаларға арналған дәмді әрі пайдалы тағам ретінде бағаланған.",
              },
              {
                title: "Түрлері мен аймақтық ерекшеліктері",
                text: "Құрттың бірнеше түрі бар: май қосылған «майлы құрт», ұсақталып кептірілген «ақмалта құрт», ұнтақталған «есілген құрт». Әр аймақ өз дәстүріне сай дәмдеуіш қосып немесе пішінін өзгертіп дайындаған. Кей өңірлерде құрт сорпаға да қосылады.",
              },
              {
                title: "Қазіргі маңызы",
                text: "Қазіргі таңда құрт — ұлттық брендке айналған өнім. Экотуризм мен ұлттық жәрмеңкелерде шетелдік қонақтар құрттың дәмін татып, оны Қазақстаннан ерекше сыйлық ретінде алып кетеді. Сонымен қатар, құрттың жоғары ақуызды және табиғи құрамы салауатты өмір салтын ұстанушылар арасында да танымал болуда.",
              },
              {
                title: "Қорытынды",
                text: "Құрт — тек тағам емес, көшпенділердің даналығының жемісі. Ол табиғатпен үйлесімділікті, ысырапсыз өмірді және ұлттық дәстүрді ұрпақтан ұрпаққа жеткізудің бір жолын көрсетеді.",
              },
            ],
          },
        },
      ],
    },
  ],
};

export const navigationFooter = {
  en: [
    {
      name: "Our team",
      link: "/team",
    },
    {
      name: "Our books",
      link: "/books",
    },
    {
      name: "Podcasts",
      link: "/podcasts",
    },
    {
      name: "Muppet Show",
      link: "/",
    },
  ],
  kz: [
    {
      name: "Тобымыз",
      link: "/team",
    },
    {
      name: "Кітаптары",
      link: "/books",
    },
    {
      name: "Подкасты",
      link: "/podcasts",
    },
    {
      name: "Muppet Show",
      link: "/",
    },
  ],
};

export const podcasts = {
  en: [
    {
      id: 1,
      name: "📖 Traditions",
      text: "We uncover the meaning behind ancient Kazakh customs and traditions and share the story of how they live on today.",
      image: logo1,
      audio: audio1,
      duration: "14:45",
    },
    {
      id: 2,
      name: "📜 History of Fashion, 19th to 21st Century",
      text: "We will analyze the development of the fashion world, its changes over the centuries, and how it has reached current trends.",
      image: logo2,
      audio: audio2,
      duration: "08:59",
    },
    {
      id: 3,
      name: "🎼 Music: From Tradition to Modernity",
      text: "We will explore the evolution and influences in Kazakh music, from traditional melodies to contemporary genres.",
      image: logo3,
      audio: audio3,
      duration: "32:39",
    },
    {
      id: 4,
      name: "🏔️ Homeland",
      text: "A story based on the legend of one's homeland. A mere crumb of earth is portrayed as a symbol of our people's historical memory and spiritual values.",
      image: logo4,
      audio: audio4,
      duration: "11:39",
    },
  ],
  kz: [
    {
      id: 1,
      name: "📖 Дәстүрлер",
      text: "Біз қазақтың көне әдет-ғұрыптары мен дәстүрлерінің астарында жатқан мәнді ашып, олардың бүгінде қалай өмір сүріп жатқанын баяндаймыз.",
      image: logo1,
      audio: audio1,
      duration: "14:45",
    },
    {
      id: 2,
      name: "📜 Сән тарихы, 19-21 ғасырлар",
      text: "Біз сән әлемінің дамуын, оның ғасырлар бойғы өзгерістерін, қазіргі үрдістерге қалай жеткенін талдаймыз.",
      image: logo2,
      audio: audio2,
      duration: "08:59",
    },
    {
      id: 3,
      name: "🎼 Музыка: Дәстүрден қазіргі заманға",
      text: "Біз қазақ музыкасындағы дәстүрлі әуендерден қазіргі заманғы жанрларға дейінгі эволюция мен әсерлерді зерттейміз.",
      image: logo3,
      audio: audio3,
      duration: "32:39",
    },
    {
      id: 4,
      name: "🏔️ Отан",
      text: "Туған жер туралы аңыз негізінде жазылған әңгіме. Жердің бір қиыршығы халқымыздың тарихи жады мен рухани құндылықтарының белгісі ретінде бейнеленген.",
      image: logo4,
      audio: audio4,
      duration: "11:39",
    },
  ],
};

export const contents: ModalContentType[] = [
  {
    id: 1,
    content: [
      {
        kz: [
          {
            type: "text",
            value:
              " 1) KZ: Қазақы өрнектермен безендірілген тегін бояу кітабымызды ",
          },
          {
            type: "downloadLink",
            text: "жүктеп алыңыз",
            url: "../assets/colouringBook.pdf",
          },
          {
            type: "text",
            value: "! Дәстүрді өз қолыңызбен түрлі түске бояп, жан бітіріңіз. ",
          },
        ],
        en: [
          { type: "text", value: "1) English: " },
          {
            type: "downloadLink",
            text: "Download",
            url: "../assets/colouringBook.pdf",
          },
          {
            type: "text",
            value:
              " our free coloring book inspired by Kazakh patterns! Bring tradition to life with your own colors.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    content: [
      {
        kz: [
          {
            type: "text",
            value:
              "KZ : Бұл жоба қазақ мәдениетінің сұлулығын қазіргі заманға сай түрде жеткізу мақсатымен дүниеге келді.  Біз үшін тарих пен дәстүр тек оқулықтарда ғана емес, күнделікті өмірде де көрініс табуы керек: суреттерде, ойындарда, фотосуреттерде – қуаныш пен шабыт сыйлайтын сәттерде. Осындай материалдар арқылы біз ұрпақтарды жақындастыруды қалаймыз: балалар шығармашылықпен мәдениетті таныса, ересектер мақтаныш пен сағыныш сезімін қайта тапса дейміз.",
          },
        ],
        en: [
          {
            type: "text",
            value:
              "Eng: This project was born from a desire to preserve and share the beauty of Kazakh culture in a modern way. We believe that history and tradition should live not only in textbooks, but also in everyday life — in drawings, games, photographs, and the little things that spark joy and inspiration. Through these materials, we hope to connect generations: children can discover culture through creativity, while adults can rediscover pride and nostalgia.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    content: [
      {
        kz: [
          { type: "text", value: "KZ:" },
          { type: "link", text: "Мұнда ", url: "" },
          {
            type: "text",
            value:
              "біз жасаған жұмыстардың артындағы сәттер: сурет салу, материал жинау, идеяны жүзеге асыру барысы. Неге бұлай істедік? Себебі дәстүр тірі болып, әр адамға жақын әрі қолжетімді болуы үшін.",
          },
        ],
        en: [
          { type: "text", value: "Eng: " },
          { type: "link", text: "Here ", url: "" },
          {
            type: "text",
            value:
              "you’ll find behind-the-scenes moments: how we sketched, gathered materials, and brought the idea to life. Why we did it? To make tradition alive, accessible, and close to everyone.",
          },
        ],
      },
    ],
  },
];
