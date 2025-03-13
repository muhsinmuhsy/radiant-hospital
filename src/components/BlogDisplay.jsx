'use client';
import React, { useState } from 'react';
import { CalendarDays, Clock, Stethoscope, ArrowRight } from 'lucide-react';
import { useFetchBlogs } from '@/lib/data';
import Link from 'next/link';

const BlogSectionDisplay = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { blogs: blogData, isLoading, error } = useFetchBlogs();
  const blogs = blogData;

  const regularBlogs = blogs?.filter(blog => !blog.is_latest);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-3">Our Latest Articles</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Health Insights & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Stay informed about the latest developments in ENT healthcare and expert medical advice.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs?.map((blog) => (
            <Link href={`/pages/blog/${blog?.id}`} key={blog.id} className="group h-full">
              <div 
                className="bg-white rounded-xl overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredId(blog.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative">
                  {/* Category Badge */}
                  {/* <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 text-purple-700 px-3 py-1 rounded-md text-sm font-medium shadow-sm">
                      {blog.categories}
                    </span>
                  </div> */}
                  
                  {/* Image with overlay gradient */}
                  <div className="relative overflow-hidden h-52">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"></div>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-700 transition-colors">
                    {blog.title}
                  </h3>
                  
                  {/* Description */}
                  <div
                    className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow"
                    dangerouslySetInnerHTML={{
                      __html:
                        (blog?.description?.substring(0, 100) ?? '') +
                        (blog?.description?.length > 100 ? '...' : ''),
                    }}
                  />
                  
                  {/* Metadata */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Stethoscope className="w-3 h-3 mr-1 text-purple-600" />
                          <span className="truncate">{blog.author}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center">
                          <CalendarDays className="w-3 h-3 mr-1 text-purple-600" />
                          <span>{blog.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-purple-600 font-medium text-sm">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                        <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSectionDisplay;