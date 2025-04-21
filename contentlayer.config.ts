// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
