'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useFetchBlogs } from '@/lib/data';
import Link from 'next/link';

const BlogSectionDisplay = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { blogs: blogData, isLoading, error } = useFetchBlogs();
  const blogs = blogData;

  const regularBlogs = blogs?.filter(blog => !blog.is_latest);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Even more simplified */}
        <div className="mb-10 text-center">
          <span className="inline-block px-3 py-1 rounded-lg bg-purple-100 text-purple-700 text-sm mb-2">Our Latest Articles</span>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Health Insights & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in ENT healthcare and expert medical advice.
          </p>
        </div>

        {/* Blog Cards Grid - Ultra Simplified Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {regularBlogs?.map((blog) => (
            <Link href={`/pages/blog/${blog?.id}`} key={blog.id} className="group">
              <div 
                className="bg-white rounded-lg overflow-hidden border border-gray-100 h-full flex flex-col hover:shadow-sm transition-all duration-300"
                onMouseEnter={() => setHoveredId(blog.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image - Simplified further */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  {/* Title - Simplified styling */}
                  <h3 className="font-medium text-base mb-2 group-hover:text-purple-600 transition-colors">
                    {blog.title}
                  </h3>
                  
                  {/* Description - Kept functionality, simplified margins */}
                  <div
                    className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow"
                    dangerouslySetInnerHTML={{
                      __html:
                        (blog?.description?.substring(0, 100) ?? '') +
                        (blog?.description?.length > 100 ? '...' : ''),
                    }}
                  />
                  
                  {/* Highlighted Read More Button */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-end">
                      <div className="bg-purple-100 text-[#795F9F] py-1 px-3 rounded-full text-xs font-medium flex items-center group-hover:bg-[#795F9F] group-hover:text-white transition-colors">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 transform transition-transform group-hover:translate-x-1" />
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