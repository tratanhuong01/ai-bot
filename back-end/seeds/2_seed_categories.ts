import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("categories").del();

  const categories = [
    {
      id: "3349af3a-0e95-434a-a377-60775824d3c8",
      name: "Car Rental Tips",
      slug: "car-rental-tips",
    },
    {
      id: "426ffe98-b47a-4cde-9424-6c3a7a8e70a1",
      name: "Traffic Laws & Car Insurance",
      slug: "traffic-laws-car-insurance",
    },
    {
      id: "74c6938d-624b-4335-bf93-55f1f05fafbd",
      name: "Car Technology & Trends",
      slug: "car-technology-trends",
    },
    {
      id: "b7d5b76d-dcc2-4baa-9898-2a25062e0413",
      name: "User Stories & Experiences",
      slug: "user-stories-experiences",
    },
    {
      id: "fc5f9819-c72a-4296-8781-739326a68318",
      name: "Road Trips & Travel",
      slug: "road-trips-travel",
    },
  ];

  // Inserts seed entries
  await knex("categories").insert(categories);
}
