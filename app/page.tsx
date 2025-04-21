import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function HomePage() {
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">👋 Welcome!</h1>
        <p className="text-lg text-gray-300">
          フルスタックエンジニアを目指すポートフォリオブログです。
        </p>
        <Link href="/about" className="text-blue-500 hover:underline text-sm mt-2 inline-block">
          → 自己紹介を見る
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">📝 最新記事</h2>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post._id} className="border-b pb-4">
              <h3 className="text-xl font-semibold">
                <Link href={`/blogs/${post.slug}`} className="text-blue-500 hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              {post.description && <p className="text-gray-300">{post.description}</p>}
            </li>
          ))}
        </ul>

        <Link href="/blogs" className="text-blue-400 text-sm hover:underline mt-6 inline-block">
          → 記事一覧を見る
        </Link>
      </section>
    </main>
  )
}
