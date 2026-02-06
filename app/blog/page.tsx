import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

// Revalidate every 60 seconds
export const revalidate = 60;

async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "authorName": author->name,
    "authorImage": author->image
  }`;
    return client.fetch(query);
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Latest <span className="text-[#F46300]">Updates</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay informed with the best tips on loans, finance management, and credit scores.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                    <div className="relative h-60 w-full overflow-hidden">
                                        {post.mainImage && (
                                            <Image
                                                src={urlForImage(post.mainImage).url()}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-3">
                                            {post.categories && post.categories.length > 0 && (
                                                <span className="text-xs font-bold text-[#F46300] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                                    {post.categories[0]}
                                                </span>
                                            )}
                                            <span className="text-xs text-gray-400 font-medium">
                                                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#F46300] transition-colors">
                                            {post.title}
                                        </h2>
                                        {/* Author Section */}
                                        {post.authorName && (
                                            <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-50">
                                                {post.authorImage && (
                                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                        <Image
                                                            src={urlForImage(post.authorImage).url()}
                                                            alt={post.authorName}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}
                                                <span className="text-sm font-medium text-gray-500">{post.authorName}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No posts found</h3>
                        <p className="text-gray-500">Check back later for new content.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
