
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  Users, 
  Hash,
  Heart,
  MessageCircle,
  Share,
  Play,
  Eye,
  Filter
} from "lucide-react";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const trendingTopics = [
    { tag: "AI", posts: 1250, trending: true },
    { tag: "Gaming", posts: 890, trending: true },
    { tag: "React", posts: 654, trending: false },
    { tag: "WebDev", posts: 432, trending: true },
    { tag: "Design", posts: 321, trending: false },
  ];

  const suggestedUsers = [
    {
      name: "TechInfluencer",
      handle: "@tech_guru",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      followers: "12.5K",
      verified: true,
      bio: "AI & Tech enthusiast sharing the latest trends"
    },
    {
      name: "GameStreamer",
      handle: "@pro_gamer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      followers: "8.9K",
      verified: false,
      bio: "Professional gamer and content creator"
    },
    {
      name: "DesignMaster",
      handle: "@ui_designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      followers: "15.2K",
      verified: true,
      bio: "UI/UX Designer creating beautiful experiences"
    }
  ];

  const discoverContent = [
    {
      id: 1,
      type: "post",
      title: "The Future of AI in Web Development",
      content: "Exploring how artificial intelligence is reshaping the way we build web applications...",
      author: "TechVision",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      likes: 342,
      comments: 67,
      shares: 23,
      tags: ["AI", "WebDev", "Future"],
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      type: "live",
      title: "Live: Building a React App from Scratch",
      streamer: "CodeWithMe",
      streamImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      viewers: 1847,
      tags: ["React", "Programming", "Live"],
      duration: "2:34:12"
    },
    {
      id: 3,
      type: "post",
      title: "10 Design Trends That Will Dominate 2024",
      content: "A comprehensive look at the design trends that are shaping the digital landscape...",
      author: "DesignDaily",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      likes: 198,
      comments: 34,
      shares: 12,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop",
      tags: ["Design", "Trends", "UI"],
      timestamp: "5 hours ago"
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "posts", label: "Posts" },
    { id: "live", label: "Live" },
    { id: "users", label: "Users" },
    { id: "topics", label: "Topics" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Discover
          </h1>
          <Button variant="outline" className="border-purple-500 text-purple-400">
            <Filter className="h-4 w-4 mr-2" />
            Advanced
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for posts, users, topics..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={
                activeFilter === filter.id 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-purple-400" />
              <span>Trending Now</span>
            </h2>
            
            {discoverContent.map((item) => (
              <Card key={item.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  {item.type === "live" ? (
                    <div className="space-y-4">
                      <div className="relative">
                        <img 
                          src={item.streamImage} 
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>LIVE</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-16 w-16 text-white/80 hover:text-white cursor-pointer" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-purple-400 mt-1">{item.streamer}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1 text-gray-400">
                            <Eye className="h-4 w-4" />
                            <span>{item.viewers.toLocaleString()}</span>
                          </div>
                          <div className="flex space-x-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="border-purple-500/30 text-purple-400">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={item.authorAvatar} 
                          alt={item.author}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-white">{item.author}</h3>
                            <span className="text-gray-400 text-sm">{item.timestamp}</span>
                          </div>
                          <h2 className="text-lg font-semibold text-white mt-2">{item.title}</h2>
                          <p className="text-gray-300 mt-2">{item.content}</p>
                        </div>
                      </div>
                      
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="border-purple-500/30 text-purple-400">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-6 text-gray-400">
                          <button className="flex items-center space-x-2 hover:text-red-400 transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>{item.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                            <Share className="h-4 w-4" />
                            <span>{item.shares}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Hash className="h-5 w-5 text-purple-400" />
                  <span>Trending Topics</span>
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">#{topic.tag}</span>
                        {topic.trending && (
                          <TrendingUp className="h-4 w-4 text-green-400" />
                        )}
                      </div>
                      <span className="text-sm text-gray-400">{topic.posts} posts</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Users */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-400" />
                  <span>Who to Follow</span>
                </h3>
                <div className="space-y-4">
                  {suggestedUsers.map((user, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1">
                          <h4 className="font-semibold text-white text-sm">{user.name}</h4>
                          {user.verified && (
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{user.handle}</p>
                        <p className="text-gray-400 text-xs mt-1 line-clamp-2">{user.bio}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-400">{user.followers} followers</span>
                          <Button size="sm" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                            Follow
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
