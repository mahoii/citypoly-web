import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Student Portfolios',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Architecture & AutoCAD', value: 'ARCHITECTURE' },
          { title: 'Robotics & Hardware', value: 'ROBOTICS' },
          { title: 'Software & Web Dev', value: 'SOFTWARE' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // This is a superpower. It lets you crop the image right inside Sanity!
      },
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
    }),
  ],
})