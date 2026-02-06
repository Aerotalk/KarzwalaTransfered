import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, User } from "lucide-react";

// Revalidate every 60 seconds
export const revalidate = 60;

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body,
    "authorName": author->name,
    "authorImage": author->image,
    "categories": categories[]->title
  }`;
    return client.fetch(query, { slug });
}

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="relative w-full h-96 my-8 rounded-2xl overflow-hidden">
                    <Image
                        src={urlForImage(value).fit('max').auto('format').url()}
                        alt={value.alt || ' '}
                        fill
                        className="object-contain"
                    />
                </div>
            );
        },
    },
    block: {
        h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-10 mb-4 text-gray-900">{children}</h1>,
        h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900">{children}</h3>,
        normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-gray-700 text-lg">{children}</p>,
        blockquote: ({ children }: any) => <blockquote className="border-l-4 border-[#F46300] pl-4 italic my-6 text-gray-600 bg-orange-50/50 p-4 rounded-r-lg">{children}</blockquote>,
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal ml-6 mb-6 space-y-2 text-gray-700">{children}</ol>,
    }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
                <Link href="/blog" className="text-[#F46300] hover:underline font-bold">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-[#F46300] font-medium mb-8 transition-colors">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-10 text-center md:text-left">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium mb-6 justify-center md:justify-start">
                        <span className="flex items-center gap-2">
                            <Calendar size={16} />
                            {new Date(post.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        {post.categories && post.categories.length > 0 && (
                            <>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                <span className="text-[#F46300] px-2 py-0.5 bg-orange-50 rounded-md">{post.categories[0]}</span>
                            </>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                        {post.title}
                    </h1>

                    {post.authorName && (
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            {post.authorImage ? (
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100">
                                    <Image
                                        src={urlForImage(post.authorImage).url()}
                                        alt={post.authorName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                    <User size={24} />
                                </div>
                            )}
                            <div className="text-left">
                                <p className="text-sm text-gray-500 font-medium">Written by</p>
                                <p className="text-base font-bold text-gray-900">{post.authorName}</p>
                            </div>
                        </div>
                    )}
                </header>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-orange-100/50 mb-12">
                        <Image
                            src={urlForImage(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <article className="prose prose-lg prose-orange max-w-none prose-headings:font-bold prose-p:text-gray-600">
                    <PortableText value={post.body} components={ptComponents} />
                </article>
            </div>
        </div>
    );
}
