import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  Search, 
  Users, 
  TrendingUp, 
  Radio, 
  Settings, 
  Bell, 
  User,
  Heart,
  MessageCircle,
  Share,
  Play,
  Eye,
  Zap,
  FileText,
  Shield
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const sidebarItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "posts", icon: FileText, label: "All Posts", action: () => navigate("/posts") },
    { id: "discover", icon: Search, label: "Discover" },
    { id: "communities", icon: Users, label: "Communities" },
    { id: "trending", icon: TrendingUp, label: "Trending" },
    { id: "live", icon: Radio, label: "Go Live" },
    { id: "admin", icon: Shield, label: "Admin Panel", action: () => navigate("/admin") },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  const feedItems = [
    {
      id: 1,
      type: "post",
      title: "AI Breakthrough in Content Creation",
      summary: "New AI models are revolutionizing how creators produce content...",
      author: "TechNewsAI",
      likes: 245,
      comments: 32,
      shares: 18,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400"
    },
    {
      id: 2,
      type: "live",
      title: "Gaming Session: Building AI Apps",
      streamer: "CodeMaster",
      viewers: 1200,
      category: "Technology",
      isLive: true,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400"
    },
    {
      id: 3,
      type: "post",
      title: "The Future of Streaming Platforms",
      summary: "How AI is changing the way we discover and consume content...",
      author: "StreamInsights",
      likes: 189,
      comments: 24,
      shares: 12,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400"
    }
  ];

  const liveStreams = [
    { name: "GameDev Pro", viewers: 890, category: "Gaming" },
    { name: "AI Explorer", viewers: 654, category: "Tech" },
    { name: "Music Vibes", viewers: 432, category: "Music" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Top Bar */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              FusionHub
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10"
              onClick={() => navigate("/profile")}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <aside className="w-64 p-6 bg-black/20 backdrop-blur-md border-r border-white/10 min-h-screen">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.action) {
                    item.action();
                  } else {
                    setActiveTab(item.id);
                  }
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Welcome to your Feed</h1>
            
            {/* Feed Items */}
            <div className="space-y-4">
              {feedItems.map((item) => (
                <Card key={item.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    {item.type === "live" ? (
                      <div className="flex space-x-4">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-32 h-20 object-cover rounded-lg"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span>LIVE</span>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded">
                            <Play className="h-3 w-3" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="text-purple-400">{item.streamer}</p>
                          <p className="text-gray-400">{item.category}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{item.viewers}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-24 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="text-gray-300 text-sm mt-1">{item.summary}</p>
                            <p className="text-purple-400 text-sm mt-2">By {item.author}</p>
                          </div>
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
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 p-6 bg-black/20 backdrop-blur-md border-l border-white/10">
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Who's Live Now</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {liveStreams.map((stream, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{stream.name}</p>
                        <p className="text-gray-400 text-sm">{stream.category}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Eye className="h-3 w-3" />
                        <span>{stream.viewers}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Suggested Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">Creator Pro</p>
                        <p className="text-gray-400 text-xs">Tech Content</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">AI Insights</p>
                        <p className="text-gray-400 text-xs">AI & ML</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                      Follow
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["#AI", "#Gaming", "#Tech", "#Music", "#Art", "#Coding"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm hover:bg-purple-500/30 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
