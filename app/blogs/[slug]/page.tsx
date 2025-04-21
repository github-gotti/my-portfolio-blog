// app/blogs/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'

type Params = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }: Params) {
  const post = allPosts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{format(new Date(post.date), 'yyyy-MM-dd')}</p>

      <article
        className="prose prose-invert prose-sm"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </main>
  )
}
