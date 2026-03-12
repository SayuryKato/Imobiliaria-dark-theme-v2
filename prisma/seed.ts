import { prisma } from "../app/_lib/prisma";

async function seedDatabase() {
  try {
    /*
    ===============================
    AGENTS
    ===============================
    */

    await prisma.realtor.createMany({
      data: [
        {
          name: "João Silva",
          email: "joao@imobiliaria.com",
          phones: ["+5511999999999"],
          creci: "123456",
          photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
          yearsOfExperience: 10,
          totalSales: 120,
          rating: 4.8,
        },
        {
          name: "Maria Santos",
          email: "maria@imobiliaria.com",
          phones: ["+5511888888888", "+5511877777777"],
          creci: "654321",
          photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
          yearsOfExperience: 8,
          totalSales: 95,
          rating: 4.7,
        },
      ],
      skipDuplicates: true,
    });

    const realtorsCreated = await prisma.realtor.findMany();

    /*
    ===============================
    IMAGENS DAS PROPRIEDADES
    ===============================
    */

    const images = [
      [
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/WDwNgakTuGLXkHhf1YER",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/zZqs9bVQKiYyT5SaB0sv",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/3lHRQFE8QBeAjrbq3Jmk",
      ],
      [
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/mUs9dTfsRu5pLDJXW2mY",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/F1pNLgUGTIakwurNZnqC",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/okbVu32MTVG5cxQdfGDr",
      ],
      [
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/PrnK8FurQ6htiNbxmezT",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/EpLyxJhiS9y85MvszhPS",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/Jh3Zqqo3RKewTn9VTVPL",
      ],
      [
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/Y9Sxy1zKQM67JgHzPgjS",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/Rb43r97Q3WR8jvEJuZSw",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/rguEkctSNWsK5P39bOLm",
      ],
      [
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/RKbRYCwVTduuWCztMvTH",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/RBr6jYK9RvCYMz7BIvRr",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/2oNbUd3cTEUxnx0ZPG0W",
      ],
      [
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/TVk0JufdQzKzqI7CpVnN",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/Ym5DSMO9QWWoWoaMGqz2",
        "https://us-east-1-shared-usea1-02.graphassets.com/APv8gsehQBSr2MyVZXJh8z/output=format:webp/2oNbUd3cTEUxnx0ZPG0W",
      ],
    ];

    /*
    ===============================
    PROPERTIES
    ===============================
    */

    const names = [
      "Lançamento em Moema",
      "Residencial Jardim das Flores",
      "Condomínio Vista Maravilhosa",
      "Apartamento Central Park",
      "Casa dos Sonhos",
      "Residencial Bela Vista",
    ];

    const descriptions = [
      "Apartamento moderno com 3 quartos e varanda gourmet.",
      "Casa espaçosa com piscina e área de lazer completa.",
      "Condomínio fechado com segurança 24h.",
      "Cobertura duplex com vista panorâmica.",
      "Casa de alto padrão com arquitetura contemporânea.",
      "Apartamento luxuoso próximo à Av. Paulista.",
    ];

    for (let i = 0; i < names.length; i++) {
      const realtor = realtorsCreated[i % realtorsCreated.length];

      const property = await prisma.property.create({
        data: {
          title: names[i],
          description: descriptions[i],
          address: "Rua Exemplo " + (i + 1),
          city: "São Paulo",
          state: "SP",
          neighborhood: "Moema",
          zipCode: "04000-000",

          price: Math.floor(Math.random() * 2000000) + 500000,
          pricePerM: 12000,

          bedrooms: 3,
          bathrooms: 2,
          parkingSpaces: 2,
          areaTotal: 120,

          realtorId: realtor.id,

          images: {
            create: images[i].map((url) => ({
              imageUrl: url,
            })),
          },
        },
      });

      console.log("🏠 Propriedade criada:", property.title);
    }

    console.log("✅ Seed concluído com sucesso!");
  } catch (error) {
    console.error("❌ Erro no seed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
