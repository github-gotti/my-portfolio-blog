// app/blogs/page.tsx
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function BlogListPage() {
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date))

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">📝 ブログ一覧</h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post._id} className="border-b pb-4">
            <h2 className="text-xl font-semibold">
              <Link href={`/blogs/${post.slug}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            {post.description && <p className="text-gray-300">{post.description}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}
