import React, { useState } from 'react';
import { Filter, ArrowUpRight, TrendingUp, MessageSquare, Pen, BarChart3, Code2, ImageIcon, Megaphone, Clock, FileText, Video, Mic, Star, ThumbsUp, ShoppingCart } from 'lucide-react';

export default function Home() {
  const allCategories = [
    {
      name: "All Categories",
      icon: Filter,
      emoji: '🌐'
    },
    {
      name: "AI Chatbots",
      icon: MessageSquare,
      emoji: '💬'
    },
    {
      name: "Content Creation",
      icon: Pen,
      emoji: '✍️'
    },
    {
      name: "Data Analysis",
      icon: BarChart3,
      emoji: '📊'
    },
    {
      name: "Developer Tools",
      icon: Code2,
      emoji: '💻'
    },
    {
      name: "Image Generation",
      icon: ImageIcon,
      emoji: '🖼️'
    },
    {
      name: "Marketing",
      icon: Megaphone,
      emoji: '📢'
    },
    {
      name: "Productivity",
      icon: Clock,
      emoji: '⏱️'
    },
    {
      name: "Text Analysis",
      icon: FileText,
      emoji: '📝'
    },
    {
      name: "Video Generation",
      icon: Video,
      emoji: '🎬'
    },
    {
      name: "Voice & Speech",
      icon: Mic,
      emoji: '🎤'
    }
  ];

  const [categories, setCategories] = useState(allCategories);

  const allTools = [
    {
      title: "AI Writing Pro",
      description: "Advanced AI writing assistant for content creators and marketers",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=500",
      category: "Content Creation",
      pricing: "Freemium",
      votes: 156,
      isNew: true,
      trending: true,
      premium: true,
      listed: true,
      rating: 4.5,
      upvotes: 250,
      price: 19.99
    },
    {
      title: "VoiceGenius",
      description: "Transform text to natural-sounding speech in 100+ languages",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=500",
      category: "Voice & Speech",
      pricing: "Paid",
      votes: 98,
      isNew: false,
      trending: true,
      premium: true,
      listed: true,
      rating: 4.8,
      upvotes: 320,
      price: 29.99
    },
    {
      title: "DataMind Analytics",
      description: "AI-powered data analysis and visualization platform",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
      category: "Data Analysis",
      pricing: "Free",
      votes: 234,
      isNew: false,
      trending: false,
      premium: false,
      listed: true,
      rating: 4.2,
      upvotes: 180,
      price: 0
    },
    {
      title: "CodeAssist AI",
      description: "Intelligent code completion and review assistant",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=500",
      category: "Developer Tools",
      pricing: "Paid",
      votes: 167,
      isNew: false,
      trending: false,
      premium: true,
      listed: true,
      rating: 4.6,
      upvotes: 280,
      price: 39.99
    },
    {
      title: "ImageCraft AI",
      description: "Create stunning images with AI in seconds",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=500",
      category: "Image Generation",
      pricing: "Freemium",
      votes: 321,
      isNew: true,
      trending: false,
      premium: false,
      listed: true,
      rating: 4.9,
      upvotes: 400,
      price: 9.99
    },
    {
      title: "MarketingGPT",
      description: "AI-powered marketing campaign generator and optimizer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      category: "Marketing",
      pricing: "Paid",
      votes: 145,
      isNew: false,
      trending: false,
      premium: false,
      listed: true,
      rating: 4.0,
      upvotes: 120,
      price: 49.99
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [tools, setTools] = useState(allTools);

  const filteredTools = tools.filter(tool => {
    return selectedCategory === "All Categories" || tool.category === selectedCategory;
  });


  const trendingTools = filteredTools.filter(tool => tool.trending).slice(0, 3);
  const newArrivalTools = filteredTools.filter(tool => tool.isNew).slice(0, 3);
  const premiumTools = filteredTools.filter(tool => tool.premium).slice(0, 3);


  return (
    <main className="container mx-auto px-4 py-8 flex flex-col">
      {/* Tagline */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Make Human Job Less</h1>
      </div>

      {/* Categories */}
      <div className="mb-6 overflow-x-auto pb-2 border-b">
        <div className="flex space-x-4 md:space-x-2 lg:space-x-4 min-w-max">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex flex-row items-center px-4 py-2 rounded-full transition-all text-sm ${isSelected
                  ? 'bg-blue-600 text-white shadow-lg font-semibold'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border'
                  }`}
              >
                <span className="text-xl mr-2">{category.emoji}</span>
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered Tools in Table Format */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          All Agents are listed
        </h2>
        <div className="flex flex-col gap-6">
          {/* Trending Agents */}
          {trendingTools.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Trending Agents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingTools.map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                    <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold">{tool.title}</h3>
                        <ArrowUpRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tool.category}
                          </span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                            Premium
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            {tool.votes} Votes
                          </div>
                          <div className="flex items-center text-sm">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(tool.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                            ))}
                            <span className="ml-1 text-gray-600">({tool.rating.toFixed(1)})</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Purchase ${tool.price.toFixed(2)}
                        </button>
                        <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="h-5 w-5 mr-1" />
                          {tool.upvotes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New Arrival Agents */}
          {newArrivalTools.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">New Arrival Agents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newArrivalTools.map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                    <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold">{tool.title}</h3>
                        <ArrowUpRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tool.category}
                          </span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                            Premium
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <Clock className="h-4 w-4 mr-1" />
                            New Arrival
                          </div>
                          <div className="flex items-center text-sm">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(tool.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                            ))}
                            <span className="ml-1 text-gray-600">({tool.rating.toFixed(1)})</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Purchase ${tool.price.toFixed(2)}
                        </button>
                        <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="h-5 w-5 mr-1" />
                          {tool.upvotes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Premium Agents */}
          {premiumTools.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Premium Agents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumTools.map((tool, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                    <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold">{tool.title}</h3>
                        <ArrowUpRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tool.category}
                          </span>
                           <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                            Premium
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center text-gray-500 text-sm mb-1">
                            <ImageIcon className="h-4 w-4 mr-1 text-yellow-500" />
                            Premium Agent
                          </div>
                          <div className="flex items-center text-sm">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(tool.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                            ))}
                            <span className="ml-1 text-gray-600">({tool.rating.toFixed(1)})</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Purchase ${tool.price.toFixed(2)}
                        </button>
                        <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="h-5 w-5 mr-1" />
                          {tool.upvotes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Default Agent List (if no specific filter results) */}
          {!trendingTools.length && !newArrivalTools.length && !premiumTools.length && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                  <img src={tool.image} alt={tool.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">{tool.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tool.category}
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center text-sm">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(tool.rating) ? 'text-yellow-500' : 'text-gray-300'}`} />
                          ))}
                          <span className="ml-1 text-gray-600">({tool.rating.toFixed(1)})</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Purchase ${tool.price.toFixed(2)}
                      </button>
                      <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="h-5 w-5 mr-1" />
                        {tool.upvotes}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
