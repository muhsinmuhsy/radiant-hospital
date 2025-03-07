"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { UserCircle, Calendar, Clock, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
import { useViewBlog } from '@/lib/data';
import '../style.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ViewBlog() {
  const { id } = useParams();
  const blogId = Number(id);

  const { data: blog, loading: viewBlogLoading, error: viewBlogError } = useViewBlog(blogId || 0);

  // Function to calculate read time
  const calculateReadTime = (content) => {
    if (!content) return '1 min';
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / 200);
    return `${readTime} min read`;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link href="/pages/blog" className="inline-flex items-center text-gray-600 hover:text-purple-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Back to articles</span>
          </Link>

          {/* Error Handling */}
          {viewBlogError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
              <p className="text-red-700">
                {typeof viewBlogError === 'string'
                  ? viewBlogError
                  : 'An error occurred while loading the blog. Please try again.'}
              </p>
            </div>
          )}

          {/* Loading State */}
          {viewBlogLoading && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="animate-pulse">
                <div className="h-64 bg-gray-200 mb-8 rounded-lg"></div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Content */}
          {!viewBlogLoading && !viewBlogError && blog && (
            <article>
              {/* Article Header */}
              <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
                {/* Category & Sharing */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-purple-700">
                      {blog.categories || 'Healthcare'}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Share">
                      <Share2 className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Bookmark">
                      <Bookmark className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Blog Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>

                {/* Blog Metadata */}
                <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600 border-b border-gray-100 pb-6">
                  <div className="flex items-center">
                    <UserCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium">{blog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">
                      {blog.date ? new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'No date available'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm">
                      {calculateReadTime(blog.description)}
                    </span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
                  {blog.image ? (
                    typeof blog.image === 'string' ? (
                      <Image
                        src={blog.image}
                        alt={`Image for ${blog.title}`}
                        fill
                        className="object-cover"
                        onError={() => console.error('Error loading image')}
                        priority
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
                        <p>Image format is invalid</p>
                      </div>
                    )
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
                      <p>Image not available</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Article Content */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                {/* Blog Description */}
                <div
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:text-purple-900 prose-a:text-purple-600 prose-a:font-medium prose-img:rounded-lg prose-blockquote:border-purple-300 prose-blockquote:bg-purple-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
                  dangerouslySetInnerHTML={{
                    __html: blog.description ?? '',
                  }}
                />
              </div>
            </article>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}