export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { 
      name: 'slug', 
      title: 'URL Slug', 
      type: 'slug', 
      options: { source: 'title', maxLength: 96 } 
    },
    { name: 'date', title: 'Date', type: 'string' },
    { name: 'tag', title: 'Tag', type: 'string' },
    { 
      name: 'mainImage', 
      title: 'Main Image', 
      type: 'image', 
      options: { hotspot: true } 
    },
    {
      name: 'body',
      title: 'Article Content',
      type: 'array',
      of: [{ type: 'block' }] // This tells Sanity to use the Rich Text editor
    }
  ]
}