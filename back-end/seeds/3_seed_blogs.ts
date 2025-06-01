import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("blogs").del();

  const blogs = [
    {
      id: "09ac4dc2-cf2b-4b5b-8c19-184860ab737e",
      id_category: "1a2b3c4d-5555-eeee-ffff-000011112222",
      title: "OpenAI Releases New GPT Model",
      thumbnail:
        "https://example.com/thumbnails/openai-releases-new-gpt-model.jpg",
      content:
        "This article explores the topic: OpenAI Releases New GPT Model. Stay informed about the latest in technology and AI.",
      slug: "openai-releases-new-gpt-model",
      tags: `["AI", "Machine Learning", "Innovation"]`,
    },
    {
      id: "1f5d7633-3ed4-4d93-9f8b-84644e6e0b1a",
      id_category: "1a2b3c4d-2222-bbbb-cccc-ddddeeee0002",
      title: "Smart Assistants Get Smarter",
      thumbnail:
        "https://example.com/thumbnails/smart-assistants-get-smarter.jpg",
      content:
        "This article explores the topic: Smart Assistants Get Smarter. Stay informed about the latest in technology and AI.",
      slug: "smart-assistants-get-smarter",
      tags: `["Voice Assistants", "AI Tools", "Automation"]`,
    },
    {
      id: "de6dbdbd-9e9c-4fc0-822e-7c2e9f95d7be",
      id_category: "1a2b3c4d-3333-cccc-dddd-eeeeffff0003",
      title: "AI Enhances Virtual Learning Tools",
      thumbnail:
        "https://example.com/thumbnails/ai-enhances-virtual-learning-tools.jpg",
      content:
        "This article explores the topic: AI Enhances Virtual Learning Tools. Stay informed about the latest in technology and AI.",
      slug: "ai-enhances-virtual-learning-tools",
      tags: `["Education", "AI", "Smart Devices"]`,
    },
    {
      id: "9d21872e-c3e1-44a0-8b87-3bcaecc16a9f",
      id_category: "1a2b3c4d-1111-aaaa-bbbb-ccccdddd0001",
      title: "ML Used to Detect Financial Fraud",
      thumbnail:
        "https://example.com/thumbnails/ml-used-to-detect-financial-fraud.jpg",
      content:
        "This article explores the topic: ML Used to Detect Financial Fraud. Stay informed about the latest in technology and AI.",
      slug: "ml-used-to-detect-financial-fraud",
      tags: `["Machine Learning", "Finance", "Cybersecurity"]`,
    },
    {
      id: "b94bba21-3c74-49e5-b88d-36ae4903e9b1",
      id_category: "1a2b3c4d-5555-eeee-ffff-000011112222",
      title: "AI Helps Predict Stock Market Trends",
      thumbnail:
        "https://example.com/thumbnails/ai-helps-predict-stock-market-trends.jpg",
      content:
        "This article explores the topic: AI Helps Predict Stock Market Trends. Stay informed about the latest in technology and AI.",
      slug: "ai-helps-predict-stock-market-trends",
      tags: `["AI", "Finance", "Big Data"]`,
    },
    {
      id: "af48c73e-0300-45c3-b72a-67ca96fa5a4f",
      id_category: "1a2b3c4d-2222-bbbb-cccc-ddddeeee0002",
      title: "New AI Tool Transforms Healthcare Diagnostics",
      thumbnail:
        "https://example.com/thumbnails/new-ai-tool-transforms-healthcare-diagnostics.jpg",
      content:
        "This article explores the topic: New AI Tool Transforms Healthcare Diagnostics. Stay informed about the latest in technology and AI.",
      slug: "new-ai-tool-transforms-healthcare-diagnostics",
      tags: `["Healthcare", "AI", "Innovation"]`,
    },
    {
      id: "b5c91b8d-6b9a-480b-b0dd-06295b43a429",
      id_category: "1a2b3c4d-3333-cccc-dddd-eeeeffff0003",
      title: "Robots Now Understand Human Emotions",
      thumbnail:
        "https://example.com/thumbnails/robots-now-understand-human-emotions.jpg",
      content:
        "This article explores the topic: Robots Now Understand Human Emotions. Stay informed about the latest in technology and AI.",
      slug: "robots-now-understand-human-emotions",
      tags: `["Robotics", "AI", "Neural Networks"]`,
    },
    {
      id: "0d5f38a4-7d8f-4889-9581-68b947ef9b7a",
      id_category: "1a2b3c4d-1111-aaaa-bbbb-ccccdddd0001",
      title: "Breakthrough in Quantum Computing by Tech Firm",
      thumbnail:
        "https://example.com/thumbnails/breakthrough-in-quantum-computing-by-tech-firm.jpg",
      content:
        "This article explores the topic: Breakthrough in Quantum Computing by Tech Firm. Stay informed about the latest in technology and AI.",
      slug: "breakthrough-in-quantum-computing-by-tech-firm",
      tags: `["Quantum Computing", "Innovation", "Tech Trends"]`,
    },
    {
      id: "8f7d931c-3328-4e4c-a3be-4ea82bb6a5ea",
      id_category: "1a2b3c4d-4444-dddd-eeee-ffff00001111",
      title: "AI-Powered Translation Breaks Language Barriers",
      thumbnail:
        "https://example.com/thumbnails/ai-powered-translation-breaks-language-barriers.jpg",
      content:
        "This article explores the topic: AI-Powered Translation Breaks Language Barriers. Stay informed about the latest in technology and AI.",
      slug: "ai-powered-translation-breaks-language-barriers",
      tags: `["AI", "NLP", "Innovation"]`,
    },
    {
      id: "a7a27f48-30d5-4af7-93a2-42e85b3bb466",
      id_category: "1a2b3c4d-5555-eeee-ffff-000011112222",
      title: "Self-Driving Cars Reach New Milestone",
      thumbnail:
        "https://example.com/thumbnails/self-driving-cars-reach-new-milestone.jpg",
      content:
        "This article explores the topic: Self-Driving Cars Reach New Milestone. Stay informed about the latest in technology and AI.",
      slug: "self-driving-cars-reach-new-milestone",
      tags: `["Autonomous Vehicles", "AI", "Robotics"]`,
    },
    {
      id: "89b7aa31-7827-41c6-b72f-0f8f12ef4f93",
      id_category: "1a2b3c4d-2222-bbbb-cccc-ddddeeee0002",
      title: "AI Revolutionizes Cybersecurity",
      thumbnail:
        "https://example.com/thumbnails/ai-revolutionizes-cybersecurity.jpg",
      content:
        "This article explores the topic: AI Revolutionizes Cybersecurity. Stay informed about the latest in technology and AI.",
      slug: "ai-revolutionizes-cybersecurity",
      tags: `["Cybersecurity", "AI", "Machine Learning"]`,
    },
    {
      id: "c1e6b1d9-0547-4db1-b6c7-5534d3b178e5",
      id_category: "1a2b3c4d-3333-cccc-dddd-eeeeffff0003",
      title: "Voice Recognition Tech Improves Rapidly",
      thumbnail:
        "https://example.com/thumbnails/voice-recognition-tech-improves-rapidly.jpg",
      content:
        "This article explores the topic: Voice Recognition Tech Improves Rapidly. Stay informed about the latest in technology and AI.",
      slug: "voice-recognition-tech-improves-rapidly",
      tags: `["Voice Assistants", "AI", "NLP"]`,
    },
    {
      id: "e3b2d4f6-5b47-4603-87b6-88d27d6b7e94",
      id_category: "1a2b3c4d-1111-aaaa-bbbb-ccccdddd0001",
      title: "Machine Learning Improves Weather Forecasts",
      thumbnail:
        "https://example.com/thumbnails/machine-learning-improves-weather-forecasts.jpg",
      content:
        "This article explores the topic: Machine Learning Improves Weather Forecasts. Stay informed about the latest in technology and AI.",
      slug: "machine-learning-improves-weather-forecasts",
      tags: `["Machine Learning", "Big Data", "AI"]`,
    },
    {
      id: "23df33b4-41a2-4d51-95a7-1348978c2bb7",
      id_category: "1a2b3c4d-4444-dddd-eeee-ffff00001111",
      title: "AI Ethics in Autonomous Vehicles",
      thumbnail:
        "https://example.com/thumbnails/ai-ethics-in-autonomous-vehicles.jpg",
      content:
        "This article explores the topic: AI Ethics in Autonomous Vehicles. Stay informed about the latest in technology and AI.",
      slug: "ai-ethics-in-autonomous-vehicles",
      tags: `["Ethical AI", "Autonomous Vehicles", "AI"]`,
    },
    {
      id: "542f9d02-4e0f-4112-b0f4-3d5d9c3f765d",
      id_category: "1a2b3c4d-5555-eeee-ffff-000011112222",
      title: "New Algorithms Boost AI Efficiency",
      thumbnail:
        "https://example.com/thumbnails/new-algorithms-boost-ai-efficiency.jpg",
      content:
        "This article explores the topic: New Algorithms Boost AI Efficiency. Stay informed about the latest in technology and AI.",
      slug: "new-algorithms-boost-ai-efficiency",
      tags: `["AI", "Algorithms", "Optimization"]`,
    },
    {
      id: "61e28f79-6f84-4a38-aeb9-70e04b1acdf7",
      id_category: "1a2b3c4d-2222-bbbb-cccc-ddddeeee0002",
      title: "AI Transforms Retail Shopping Experience",
      thumbnail:
        "https://example.com/thumbnails/ai-transforms-retail-shopping-experience.jpg",
      content:
        "This article explores the topic: AI Transforms Retail Shopping Experience. Stay informed about the latest in technology and AI.",
      slug: "ai-transforms-retail-shopping-experience",
      tags: `["Retail", "AI", "Customer Experience"]`,
    },
    {
      id: "f6c6d823-f3ef-47d4-b9a0-45ca2a9f4763",
      id_category: "1a2b3c4d-3333-cccc-dddd-eeeeffff0003",
      title: "Breakthrough in AI-Powered Robotics",
      thumbnail:
        "https://example.com/thumbnails/breakthrough-in-ai-powered-robotics.jpg",
      content:
        "This article explores the topic: Breakthrough in AI-Powered Robotics. Stay informed about the latest in technology and AI.",
      slug: "breakthrough-in-ai-powered-robotics",
      tags: `["Robotics", "AI", "Innovation"]`,
    },
    {
      id: "d01c1f43-9c1f-4b11-a02d-3ef2133d1c91",
      id_category: "1a2b3c4d-1111-aaaa-bbbb-ccccdddd0001",
      title: "AI Helps Fight Climate Change",
      thumbnail:
        "https://example.com/thumbnails/ai-helps-fight-climate-change.jpg",
      content:
        "This article explores the topic: AI Helps Fight Climate Change. Stay informed about the latest in technology and AI.",
      slug: "ai-helps-fight-climate-change",
      tags: `["Environment", "AI", "Climate Change"]`,
    },
    {
      id: "9d5b2f9c-4e33-4c58-b0d7-207a9b456d7a",
      id_category: "1a2b3c4d-4444-dddd-eeee-ffff00001111",
      title: "AI in Sports Analytics Gains Traction",
      thumbnail:
        "https://example.com/thumbnails/ai-in-sports-analytics-gains-traction.jpg",
      content:
        "This article explores the topic: AI in Sports Analytics Gains Traction. Stay informed about the latest in technology and AI.",
      slug: "ai-in-sports-analytics-gains-traction",
      tags: `["Sports", "AI", "Analytics"]`,
    },
    {
      id: "8b2a8e3f-3c75-4aeb-a8d4-cb27a5ec4f22",
      id_category: "1a2b3c4d-5555-eeee-ffff-000011112222",
      title: "AI Improves Supply Chain Management",
      thumbnail:
        "https://example.com/thumbnails/ai-improves-supply-chain-management.jpg",
      content:
        "This article explores the topic: AI Improves Supply Chain Management. Stay informed about the latest in technology and AI.",
      slug: "ai-improves-supply-chain-management",
      tags: `["AI", "Logistics", "Supply Chain"]`,
    },
    {
      id: "2c1e5e63-58b1-4d7c-b5e0-b8a96c1d1e22",
      id_category: "1a2b3c4d-2222-bbbb-cccc-ddddeeee0002",
      title: "AI in Art: Creativity Meets Technology",
      thumbnail:
        "https://example.com/thumbnails/ai-in-art-creativity-meets-technology.jpg",
      content:
        "This article explores the topic: AI in Art: Creativity Meets Technology. Stay informed about the latest in technology and AI.",
      slug: "ai-in-art-creativity-meets-technology",
      tags: `["AI", "Art", "Creativity"]`,
    },
    {
      id: "b6d0f17f-3c67-4c45-9b5f-3a17c62f2876",
      id_category: "1a2b3c4d-3333-cccc-dddd-eeeeffff0003",
      title: "AI and Blockchain Integration",
      thumbnail:
        "https://example.com/thumbnails/ai-and-blockchain-integration.jpg",
      content:
        "This article explores the topic: AI and Blockchain Integration. Stay informed about the latest in technology and AI.",
      slug: "ai-and-blockchain-integration",
      tags: `["AI", "Blockchain", "Tech"]`,
    },
    {
      id: "12d82e42-fc28-46ac-8c71-299d5e2c9d11",
      id_category: "1a2b3c4d-1111-aaaa-bbbb-ccccdddd0001",
      title: "AI in Personalized Medicine",
      thumbnail:
        "https://example.com/thumbnails/ai-in-personalized-medicine.jpg",
      content:
        "This article explores the topic: AI in Personalized Medicine. Stay informed about the latest in technology and AI.",
      slug: "ai-in-personalized-medicine",
      tags: `["Healthcare", "AI", "Medicine"]`,
    },
    {
      id: "7f54b4e0-b3b0-4f0f-974a-36b9d4e7aaf0",
      id_category: "1a2b3c4d-4444-dddd-eeee-ffff00001111",
      title: "AI Advances in Natural Language Processing",
      thumbnail:
        "https://example.com/thumbnails/ai-advances-in-natural-language-processing.jpg",
      content:
        "This article explores the topic: AI Advances in Natural Language Processing. Stay informed about the latest in technology and AI.",
      slug: "ai-advances-in-natural-language-processing",
      tags: `["NLP", "AI", "Machine Learning"]`,
    },
    {
      id: "2a4ef983-243d-4c17-9e9b-5f07b5c22b8f",
      id_category: "1a2b3c4d-5555-eeee-ffff-000011112222",
      title: "AI-Powered Cybersecurity Tools Launched",
      thumbnail:
        "https://example.com/thumbnails/ai-powered-cybersecurity-tools-launched.jpg",
      content:
        "This article explores the topic: AI-Powered Cybersecurity Tools Launched. Stay informed about the latest in technology and AI.",
      slug: "ai-powered-cybersecurity-tools-launched",
      tags: `["Cybersecurity", "AI", "Tech"]`,
    },
  ];

  // Inserts seed entries
  await knex("blogs").insert(blogs);
}
