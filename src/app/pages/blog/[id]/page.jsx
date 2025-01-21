"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useViewBlog } from '@/lib/data';
import '../style.css'

export default function ViewBlog() {

  const { id } = useParams();
  const blogId = Number(id);

  const { data: blog, loading: viewBlogLoading, error: viewBlogError } = useViewBlog(blogId || 0);

  console.log(blog)

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      </div>       

      <div className="flex-grow pl-3 pr-3 md:overflow-y-auto md:p-12">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-2xl mb-3">Blog View</div>
            
        </div>

        {/* Error Handling */}
        {viewBlogError && (
          <div className="m-5 text-sm text-red-500">
            {typeof viewBlogError === 'string'
              ? viewBlogError
              : 'An error occurred while loading the blog. Please try again.'}
          </div>
        )}

        {/* Loading State */}
        {viewBlogLoading && (
          <div className="m-5 text-center text-gray-500">
            <p>Loading blog details...</p>
          </div>
        )}

        {/* Blog Content */}
        {!viewBlogLoading && !viewBlogError && blog && (
          <div className="m-5">
            <div className="flex flex-col  w-full h-auto border-2 border-gray-300 rounded-lg bg-gray-50 p-5">
                {/* Blog Image */}
                <div className="mb-4 w-full h-64 flex justify-center items-center">
                
                    {blog.image ? (
                        typeof blog.image === 'string' ? (
                        <>
                            <div>
                            <Image
                                src={blog.image}
                                width={200}
                                height={200}
                                alt={`Image for ${blog.title}`}
                                onError={() => console.error('Error loading image')}
                                priority
                            />
                         
                            </div>
                        </>
                        ) : (
                        <p>Image format is invalid</p>
                        )
                    ) : (
                        <p>Image not available</p>
                    )}

                </div>

                <h2 className="text-xl font-semibold text-center mb-3">{blog.title}</h2>

                <h4 className="text-xl font-semibold text-center mb-3">{blog.author}</h4>

                {blog.date ? new Date(blog.date).toLocaleDateString() : 'No date available'}
                
                <br /> <br />
                
                <div className='description'
                    dangerouslySetInnerHTML={{
                        __html: blog.description ?? '',
                    }}
                />
                <br /> <br />
                
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
