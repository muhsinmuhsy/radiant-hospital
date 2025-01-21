import React from 'react';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, StethoscopeIcon, ArrowLeft, BookmarkPlus } from 'lucide-react';

const BlogDetail = () => {
  const article = {
    title: "Understanding Tinnitus: Causes, Symptoms, and Modern Treatment Options",
    author: {
      name: "Dr. Sarah Miller",
      title: "Senior ENT Specialist",
      image: "/api/placeholder/64/64",
      credentials: "MD, FACS"
    },
    publishDate: "January 2, 2025",
    readTime: "8 min read",
    category: "Patient Education",
    mainImage: "/api/placeholder/1200/600",
    content: {
      introduction: "Tinnitus affects millions of people worldwide, causing persistent ringing, buzzing, or humming sounds in the ears. Understanding this condition is crucial for both patients and healthcare providers.",
      sections: [
        {
          title: "What is Tinnitus?",
          content: "Tinnitus is the perception of noise or ringing in the ears when no external sound is present. It's not a condition itself but a symptom of an underlying condition, such as age-related hearing loss, ear injury, or a circulatory system disorder."
        },
        {
          title: "Common Causes",
          content: "Several factors can trigger or worsen tinnitus, including exposure to loud noises, ear infections, cardiovascular problems, and certain medications. Understanding these causes is essential for proper diagnosis and treatment."
        },
        {
          title: "Modern Treatment Approaches",
          content: "Today's treatment options range from cognitive behavioral therapy to sound therapy and newer technological solutions. Each approach is tailored to the individual patient's needs and circumstances."
        }
      ]
    },
    relatedArticles: [
      {
        title: "Protecting Your Hearing in Noisy Environments",
        image: "/api/placeholder/400/250",
        category: "Hearing Health"
      },
      {
        title: "Latest Advances in Hearing Aid Technology",
        image: "/api/placeholder/400/250",
        category: "Technology Updates"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <button className="flex items-center text-teal-600 hover:text-teal-700 mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Articles
      </button>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {article.readTime}
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
        
        <div className="flex items-center justify-between pb-8 border-b">
          <div className="flex items-center space-x-4">
            <img
              src={article.author.image}
              alt={article.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex items-center">
                <StethoscopeIcon className="w-4 h-4 mr-2 text-teal-600" />
                <h3 className="font-medium">{article.author.name}, {article.author.credentials}</h3>
              </div>
              <p className="text-sm text-gray-600">{article.author.title}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <BookmarkPlus className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="max-w-4xl mx-auto mb-12">
        <img
          src={article.mainImage}
          alt={article.title}
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.content.introduction}
          </p>

          {article.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Share Section */}
        <div className="border-t border-b py-8 my-12">
          <div className="flex items-center justify-between">
            <span className="font-medium">Share this article</span>
            <div className="flex space-x-4">
              <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-blue-600" />
              </button>
              <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-blue-400" />
              </button>
              <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
                <Linkedin className="w-5 h-5 text-blue-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="my-12">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {article.relatedArticles.map((related, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
                      {related.category}
                    </span>
                  </div>
                </div>
                <h4 className="font-medium group-hover:text-teal-600 transition-colors">
                  {related.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;