import React, { useState } from 'react';
import { Filter, ArrowUpRight, TrendingUp, MessageSquare, Pen, BarChart3, Code2, ImageIcon, Megaphone, Clock, FileText, Video, Mic, Star, ThumbsUp, ShoppingCart, Search, SortAsc, SortDesc } from 'lucide-react';

const allCategories = [
  { name: "All Categories", icon: Filter, emoji: '🌐' },
  { name: "AI Chatbots", icon: MessageSquare, emoji: '💬' },
  { name: "Content Creation", icon: Pen, emoji: '✍️' },
  { name: "Data Analysis", icon: BarChart3, emoji: '📊' },
  { name: "Developer Tools", icon: Code2, emoji: '💻' },
  { name: "Image Generation", icon: ImageIcon, emoji: '🖼️' },
  { name: "Marketing", icon: Megaphone, emoji: '📢' },
  { name: "Productivity", icon: Clock, emoji: '⏱️' },
  { name: "Text Analysis", icon: FileText, emoji: '📝' },
  { name: "Video Generation", icon: Video, emoji: '🎬' },
  { name: "Voice & Speech", icon: Mic, emoji: '🎤' }
];

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


export default function BrowseAgents() {
  const [categories] = useState(allCategories);
  const [tools, setTools] = useState(allTools);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string | null>("relevance"); // Default sorting

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === "All Categories" || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "rating-desc") {
      return b.rating - a.rating; // Sort by rating high to low
    } else if (sortBy === "rating-asc") {
      return a.rating - b.rating; // Sort by rating low to high
    } else if (sortBy === "price-asc") {
      return a.price - b.price; // Sort by price low to high
    } else if (sortBy === "price-desc") {
      return b.price - a.price; // Sort by price high to low
    } else if (sortBy === "popularity") {
      return b.upvotes - a.upvotes; // Sort by popularity high to low
    }
    return 0; // Default relevance sorting (no specific sort)
  });


  return (
    <main className="container mx-auto px-4 py-8 flex flex-col">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Browse All AI Agents</h2>
      </div>

      {/* Categories */}
      <div className="mb-6 pb-2 border-b">
        <div className="flex overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-400 scrollbar-track-gray-100 space-x-4 md:space-x-2 lg:space-x-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex flex-row items-center px-4 py-2 rounded-full transition-all text-sm mb-2 whitespace-nowrap ${isSelected
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

       {/* Sorting Filters */}
       <div className="mb-8 flex justify-start items-center">
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700">Sort by:</label>
            </div>
            <div className="relative">
              <select
                id="sort-by"
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={sortBy || 'relevance'}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="popularity">Popularity</option>
                <option value="rating-desc">Rating (High to Low)</option>
                <option value="rating-asc">Rating (Low to High)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>


      {/* Agents Grid */}
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
                   <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
                      Premium
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
                  Purchase ${filteredTools[index].price.toFixed(2)}
                </button>
                <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  {filteredTools[index].upvotes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
