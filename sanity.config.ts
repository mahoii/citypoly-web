import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

// 1. Import ALL THREE of your schemas
import announcement from './sanity/schemaTypes/announcement'
import milestone from './sanity/schemaTypes/milestone'
import portfolio from './sanity/schemaTypes/portfolio'

export default defineConfig({
  basePath: '/admin',
  title: 'City Poly CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [structureTool(), visionTool()],

  schema: {
    // 2. Register ALL THREE schemas here
    types: [announcement, milestone, portfolio],
  },
})