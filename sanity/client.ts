import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-04-03", // Locks in the API version for stability
  useCdn: false, // Set to false so the school site updates instantly when a teacher hits publish
});