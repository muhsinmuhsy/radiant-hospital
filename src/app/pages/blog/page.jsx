'use client';

import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useFetchBlogs } from '@/lib/data';
import Link from 'next/link';

const ENTBlog = () => {
  const { blogs: blogData, isLoading, error } = useFetchBlogs();
  const sortedBlogs = blogData?.slice().sort((a, b) => b.is_featured - a.is_featured);
  const posts = sortedBlogs || [];

  // Separate featured and regular posts
  const featuredPosts = posts.filter(post => post.is_featured);
  const regularPosts = posts.filter(post => !post.is_featured);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                ENT Healthcare <span className="text-purple-700">Insights</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Expert advice and comprehensive insights into Ear, Nose, and Throat healthcare
              </p>
              <div className="h-1 w-32 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="mb-10">
                <span className="text-purple-600 font-medium">Featured Articles</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Latest Insights</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map(post => (
                  <Link href={`/pages/blog/${post?.id}`} key={post?.id}>
                    <article className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group">
                      <div className="relative h-72 overflow-hidden">
                        <img 
                          src={post?.image} 
                          alt={post?.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                            Featured
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{post?.title}</h3>
                          <div className="flex items-center text-white/90 text-sm space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{post?.date}</span>
                            </div>
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post?.author}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Posts Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-10">
              <span className="text-purple-600 font-medium">All Articles</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Browse Our Collection</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <Link href={`/pages/blog/${post?.id}`} key={post?.id}>
                  <article className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-md hover:border-purple-200 group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post?.image} 
                        alt={post?.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {post?.categories?.length > 0 && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                            {post?.categories[0]}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-purple-500" />
                          <span>{post?.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-purple-500" />
                          <span>{post?.time_ago || '5 min'} read</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                        {post?.title}
                      </h3>
                      
                      <div 
                        className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow"
                        dangerouslySetInnerHTML={{
                          __html: (post?.description?.substring(0, 100) ?? '') + (post?.description?.length > 100 ? '...' : ''),
                        }}
                      />
                      
                      <div className="flex items-center text-purple-600 font-medium mt-2">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ENTBlog;