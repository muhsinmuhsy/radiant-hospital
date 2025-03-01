'use client';
import React, { useState } from 'react';
import { Calendar, Clock, StethoscopeIcon, ChevronRight } from 'lucide-react';
import { useFetchBlogs } from '@/lib/data';

const BlogSectionDisplay = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { blogs: blogData, isLoading, error } = useFetchBlogs();
  const blogs = blogData;

  const latestBlog = blogs?.find(blog => blog.is_latest);
  const regularBlogs = blogs?.filter(blog => !blog.is_latest);

  return (
    <div className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-teal-600 font-medium text-sm mb-2 block">Our Latest Articles</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Health Insights & Updates</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Stay informed about the latest developments in ENT healthcare and expert medical advice.
          </p>
        </div>

        {/* Featured Post */}
        {/* <div className="mb-16">
          <div 
            className="relative bg-white rounded-2xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredId(latestBlog?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col lg:flex-row items-stretch"> */}
              {/* Featured Image Container */}
              {/* <div className="lg:w-3/5 relative h-[250px] md:h-[300px] lg:h-[400px]">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Featured Article
                  </span>
                </div>
                <img 
                  src={latestBlog?.image} 
                  alt={latestBlog?.title}
                  className="w-full h-full object-cover"
                /> */}
                {/* Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>
              </div> */}

              {/* Content Container */}
              {/* <div className="lg:w-2/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-teal-600 text-sm font-semibold px-4 py-1 bg-teal-50 rounded-full">
                    {latestBlog?.categories}
                  </span>
                  <div className="flex items-center text-gray-600 text-sm">
                    <StethoscopeIcon className="w-4 h-4 mr-2" />
                    {latestBlog?.author}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-teal-600 transition-colors">
                  {latestBlog?.title}
                </h3>
                
                <div className="rich-view text-gray-600 mb-6 text-sm md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: (latestBlog?.description?.substring(0, 200) ?? '') + (latestBlog?.description?.length > 200 ? '...' : ''),
                  }}
                /> */}

                {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {latestBlog?.date}
                  </div>
                  <button className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularBlogs?.map(blog => (
          <div 
            key={blog.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onMouseEnter={() => setHoveredId(blog.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
                  {blog.categories}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                <div className="flex items-center">
                  <StethoscopeIcon className="w-4 h-4 mr-1" />
                  <span className="truncate">{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {blog.time_ago}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-teal-600 transition-colors">
                {blog.title}
              </h3>

                <div className="text-gray-600 text-sm mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: (blog?.description?.substring(0, 100) ?? '') + (blog?.description?.length > 100 ? '...' : ''),
                  }}
                />
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors text-sm flex items-center group">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSectionDisplay;