'use client';
import React, { useState } from 'react';
import { Calendar, Clock, StethoscopeIcon, ChevronRight } from 'lucide-react';

const BlogSectionDisplay = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Understanding Tinnitus: Causes and Modern Treatments",
      image: "/featured.svg",
      excerpt: "Explore the latest advancements in tinnitus treatment and management. Learn about innovative therapies and lifestyle changes that can help reduce the impact of tinnitus on your daily life.",
      date: "2025-01-02",
      readTime: "5 min",
      category: "Patient Education",
      author: "Dr. Sarah Miller",
      isLatest: true
    },
    {
      id: 2,
      title: "Children's Ear Infections: What Parents Should Know",
      image: "/blog-1.svg",
      excerpt: "A comprehensive guide for parents about ear infections in children, including symptoms, prevention, and when to seek medical attention.",
      date: "2025-01-01",
      readTime: "6 min",
      category: "Pediatric ENT",
      author: "Dr. James Chen"
    },
    {
      id: 3,
      title: "Latest Advances in Sinus Surgery",
      image: "/blog-2.svg",
      excerpt: "Discover how minimally invasive techniques and advanced technology are revolutionizing sinus surgery, leading to faster recovery times.",
      date: "2024-12-31",
      readTime: "7 min",
      category: "Surgical Updates",
      author: "Dr. Robert Wilson"
    },
    {
      id: 4,
      title: "Protecting Your Hearing: Prevention Guidelines",
      image: "/blog-3.svg",
      excerpt: "Essential tips for protecting your hearing in everyday situations, including workplace safety and recreational activities.",
      date: "2024-12-30",
      readTime: "5 min",
      category: "Hearing Health",
      author: "Dr. Emily Santos"
    }
  ];

  const truncateText = (text, maxLength = 100) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const latestBlog = blogs.find(blog => blog.isLatest);
  const regularBlogs = blogs.filter(blog => !blog.isLatest);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-24 mb-24">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Health Insights & Updates</h2>
        <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">Stay informed about the latest developments in ENT healthcare and expert medical advice.</p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div 
          className="relative group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg"
          onMouseEnter={() => setHoveredId(latestBlog.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-7/12 relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Featured Article
                </span>
              </div>
              <img 
                src={latestBlog.image} 
                alt={latestBlog.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-teal-600 text-sm font-medium">{latestBlog.category}</span>
                <span className="text-gray-400">•</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <StethoscopeIcon className="w-4 h-4 mr-1" />
                  {latestBlog.author}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-600 transition-colors">
                {latestBlog.title}
              </h3>
              <p className="text-gray-600 mb-6">{truncateText(latestBlog.excerpt, 150)}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {latestBlog.date}
                </div>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors text-sm">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularBlogs.map(blog => (
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
                  {blog.category}
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
                  {blog.readTime}
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-teal-600 transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{truncateText(blog.excerpt)}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{blog.date}</span>
                <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors text-sm flex items-center">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default BlogSectionDisplay;