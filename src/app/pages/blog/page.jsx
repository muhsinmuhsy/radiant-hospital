'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useFetchBlogs } from '@/lib/data';

const ENTBlog = () => {

  const { blogs: blogData, isLoading, error} = useFetchBlogs();

  console.log(blogData)

  const posts = blogData || [
    {
      id: 1,
      title: "Latest Advances in Sinus Surgery Technology",
      description: "Exploring revolutionary techniques in minimally invasive sinus procedures and their impact on patient recovery times...",
      author: "Dr. Sarah Chen",
      date: "Jan 5, 2025",
      time_ago: "8 min",
      image: "/karl-storz.webp",
      categories: ["Surgery", "Technology"],
      is_featured: true
    },
    {
      id: 2,
      title: "Common ENT Conditions and Treatments",
      description: "Expert insights into symptoms, treatments, and prevention strategies for common ENT issues...",
      author: "Dr. Michael Brown",
      date: "Jan 4, 2025",
      time_ago: "5 min",
      image: "/spec-1.svg",
      categories: ["Health Tips"],
      featured: false
    },
    {
      id: 3,
      title: "Pediatric Ear Infections: What Parents Should Know",
      description: "Understanding the causes, symptoms, and treatment options for childhood ear infections...",
      author: "Dr. Lisa Wong",
      date: "Jan 3, 2025",
      time_ago: "6 min",
      image: "/spec-2.svg",
      categories: ["Pediatric ENT"],
      featured: false
    },
    {
      id: 4,
      title: "What Parents Should Know",
      description: "Understanding the causes, symptoms, and treatment options for childhood ear infections...",
      author: "Dr. Lisa Wong",
      date: "Jan 3, 2025",
      time_ago: "6 min",
      image: "/spec-3.svg",
      categories: ["Pediatric ENT"],
      featured: false
    }
  ];
  

  const [categories] = useState([
    { name: "Ear Health" },
    { name: "Throat Conditions" },
    { name: "Nasal Care" },
    { name: "Pediatric ENT" },
    { name: "Surgery Updates" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [email, setEmail] = useState("");

  const filteredPosts = posts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail("");
  };


  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-gray-50">
    

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-10">
              {filteredPosts?.map(post => (
                post?.is_featured ? (
                  <article key={post?.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img src={post?.image} alt={post?.title} className="w-full h-64 object-cover"/>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {post?.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {post?.author}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-900">{post?.title}</h2>
                      <p className="text-gray-600 mb-4">{post?.description?.slice(0, 10)}...</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {post?.categories?.map(category => (
                            <button 
                              key={category}
                              onClick={() => setSelectedCategory(category)}
                              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                        <button className="text-blue-600 hover:text-blue-800">Read more →</button>
                      </div>
                    </div>
                  </article>
                ) : (
                  <article key={post?.id} className="bg-white rounded-xl shadow-md overflow-hidden flex">
                    <img src={post?.image} alt={post?.title} className="w-48 object-cover"/>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {post?.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {post?.time_ago}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{post?.title}</h3>
                      <p className="text-gray-600 mb-4">{post?.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {post?.categories?.map(category => (
                            <button 
                              key={category}
                              onClick={() => setSelectedCategory(category)}
                              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                        <button className="text-blue-600 hover:text-blue-800">Read more →</button>
                      </div>
                    </div>
                  </article>
                )
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..." 
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold mb-4">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button 
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className="w-full flex items-center justify-between text-gray-600 hover:text-blue-600"
                  >
                    <span>{category?.name}</span>
                    {/* <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span> */}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white">
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <p className="mb-4">Get the latest ENT care insights delivered to your inbox.</p>
              <form onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ENTBlog;