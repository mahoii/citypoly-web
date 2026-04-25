import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'milestone',
  title: 'P-TECH Milestones',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Milestone Title (e.g., Intro to AutoCAD)',
      type: 'string',
    }),
    defineField({
      name: 'gradeLevel',
      title: 'Grade/Year Level',
      type: 'string',
      options: {
        list: [
          { title: 'Grade 9', value: '9' },
          { title: 'Grade 10', value: '10' },
          { title: 'Grade 11', value: '11' },
          { title: 'Grade 12', value: '12' },
          { title: 'Year 13 (College)', value: '13' },
          { title: 'Year 14 (Degree)', value: '14' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
  ],
})