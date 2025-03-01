"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useViewBlog } from '@/lib/data';
import '../style.css';

export default function ViewBlog() {
  const { id } = useParams();
  const blogId = Number(id);

  const { data: blog, loading: viewBlogLoading, error: viewBlogError } = useViewBlog(blogId || 0);

  console.log(blog);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Error Handling */}
        {viewBlogError && (
          <div className="p-6 text-sm text-red-600 bg-red-50 border-l-4 border-red-500">
            {typeof viewBlogError === 'string'
              ? viewBlogError
              : 'An error occurred while loading the blog. Please try again.'}
          </div>
        )}

        {/* Loading State */}
        {viewBlogLoading && (
          <div className="p-6 text-center text-gray-500">
            <p>Loading blog details...</p>
          </div>
        )}

        {/* Blog Content */}
        {!viewBlogLoading && !viewBlogError && blog && (
          <div className="space-y-8">
            {/* Blog Image */}
            <div className="relative w-full h-96">
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
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                    <p>Image format is invalid</p>
                  </div>
                )
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                  <p>Image not available</p>
                </div>
              )}
            </div>

            {/* Blog Details */}
            <div className="p-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h2>
              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                <span className="text-sm font-medium">{blog.author}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">
                  {blog.date ? new Date(blog.date).toLocaleDateString() : 'No date available'}
                </span>
              </div>

              {/* Blog Description */}
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: blog.description ?? '',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
}
