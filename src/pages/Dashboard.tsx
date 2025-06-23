
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { usePosts } from "@/contexts/PostsContext";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Heart,
  MessageCircle,
  Share,
  Play,
  Radio,
  Plus,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const { posts } = usePosts();
  const [notifications] = useState(5);

  // Get recent posts for quick overview
  const recentPosts = posts.slice(0, 3);
  const liveStreams = posts.filter(post => post.type === "live");

  const stats = [
    { title: "Total Posts", value: posts.length, icon: MessageCircle, color: "text-blue-400" },
    { title: "Live Streams", value: liveStreams.length, icon: Radio, color: "text-red-400" },
    { title: "Followers", value: "1.2K", icon: Users, color: "text-green-400" },
    { title: "Views", value: "15.8K", icon: Eye, color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 h-screen sticky top-0">
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Welcome back! 👋
                </h1>
                <p className="text-gray-400 mt-1">Here's what's happening on FusionHub today</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                  {notifications > 0 && (
                    <Badge variant="destructive" className="ml-2 text-xs">
                      {notifications}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">{stat.title}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-purple-400" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 h-16 flex-col space-y-2">
                    <MessageCircle className="h-6 w-6" />
                    <span>Create Post</span>
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 h-16 flex-col space-y-2">
                    <Radio className="h-6 w-6" />
                    <span>Go Live</span>
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 h-16 flex-col space-y-2">
                    <Users className="h-6 w-6" />
                    <span>Join Community</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    <span>Recent Posts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="p-4 bg-white/5 rounded-lg">
                        <h4 className="font-semibold text-white line-clamp-1">{post.title}</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          {post.type === "post" ? post.author : post.streamer}
                        </p>
                        {post.type === "post" && (
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-3 w-3" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{post.comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Share className="h-3 w-3" />
                              <span>{post.shares}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Live Streams */}
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Radio className="h-5 w-5 text-red-400" />
                    <span>Live Now</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {liveStreams.length > 0 ? (
                      liveStreams.map((stream) => (
                        <div key={stream.id} className="p-4 bg-white/5 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Play className="h-6 w-6 text-white" />
                              </div>
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white line-clamp-1">{stream.title}</h4>
                              <p className="text-sm text-purple-400">{stream.streamer}</p>
                              <div className="flex items-center space-x-2 mt-1 text-xs text-gray-400">
                                <Eye className="h-3 w-3" />
                                <span>{stream.viewers.toLocaleString()} viewers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <Radio className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">No live streams right now</p>
                        <Button className="mt-4 bg-red-600 hover:bg-red-700">
                          <Radio className="h-4 w-4 mr-2" />
                          Start Streaming
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trending Section */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span>Trending Topics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AI", "Gaming", "React", "WebDev", "Design", "Tech", "Streaming"].map((topic) => (
                    <Badge 
                      key={topic} 
                      variant="outline" 
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/20 cursor-pointer"
                    >
                      #{topic}
                    </Badge>
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

export default Dashboard;
