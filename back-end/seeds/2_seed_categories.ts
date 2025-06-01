import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("categories").del();

  const categories = [
    {
      id: "1a2b3c4d-1111-aaaa-bbbb-ccccdddd0001",
      name: "AI News & Trends",
      slug: "ai-news-trends",
    },
    {
      id: "1a2b3c4d-2222-bbbb-cccc-ddddeeee0002",
      name: "Machine Learning Applications",
      slug: "machine-learning-applications",
    },
    {
      id: "1a2b3c4d-3333-cccc-dddd-eeeeffff0003",
      name: "Tech Innovations",
      slug: "tech-innovations",
    },
    {
      id: "1a2b3c4d-4444-dddd-eeee-ffff00001111",
      name: "AI in Everyday Life",
      slug: "ai-in-everyday-life",
    },
    {
      id: "1a2b3c4d-5555-eeee-ffff-000011112222",
      name: "Future of Technology",
      slug: "future-of-technology",
    },
  ];

  // Inserts seed entries
  await knex("categories").insert(categories);
}
