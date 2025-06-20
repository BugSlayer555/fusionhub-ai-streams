
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Settings, 
  Heart, 
  MessageCircle, 
  Share, 
  Play,
  Users,
  Calendar,
  MapPin,
  Link,
  Eye,
  Clock,
  Star
} from "lucide-react";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Mock user data
  const user = {
    name: "Alex StreamMaster",
    username: "@alexstream",
    bio: "Content creator | Tech enthusiast | AI Explorer | Building the future of streaming 🚀",
    location: "San Francisco, CA",
    website: "alexstream.com",
    joinDate: "March 2023",
    followers: 12500,
    following: 847,
    totalViews: "2.3M",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    banner: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=200&fit=crop"
  };

  const userPosts = [
    {
      id: 1,
      title: "My journey into AI development",
      content: "Starting my journey in AI has been incredible. Here's what I've learned...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
      likes: 245,
      comments: 32,
      shares: 18,
      timestamp: "2 days ago"
    },
    {
      id: 2,
      title: "Building my first neural network",
      content: "Today I built my first neural network from scratch. The experience was amazing...",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop",
      likes: 189,
      comments: 24,
      shares: 12,
      timestamp: "1 week ago"
    }
  ];

  const liveStreams = [
    {
      id: 1,
      title: "Building AI Apps Live",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
      views: 1847,
      duration: "2:34:12",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "React + AI Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop",
      views: 923,
      duration: "1:45:30",
      date: "1 week ago"
    }
  ];

  const savedItems = [
    {
      id: 1,
      title: "Advanced Machine Learning Techniques",
      author: "AI Research Lab",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      savedDate: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Profile Header */}
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${user.banner})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative px-6 pb-6">
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 -mt-16">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white/20 bg-gray-800"
            />
            
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                <p className="text-purple-400 text-lg">{user.username}</p>
                <p className="text-gray-300 mt-2 max-w-2xl">{user.bio}</p>
              </div>
              
              <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Link className="h-4 w-4" />
                  <span className="text-purple-400 hover:underline cursor-pointer">{user.website}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{user.followers.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{user.following.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{user.totalViews}</div>
                  <div className="text-sm text-gray-400">Total Views</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`${
                  isFollowing 
                    ? 'bg-gray-600 hover:bg-gray-700' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                <Users className="h-4 w-4 mr-2" />
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" size="icon" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="px-6 pb-6">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10">
            <TabsTrigger value="posts" className="data-[state=active]:bg-purple-600">Posts</TabsTrigger>
            <TabsTrigger value="streams" className="data-[state=active]:bg-purple-600">Live Streams</TabsTrigger>
            <TabsTrigger value="saved" className="data-[state=active]:bg-purple-600">Saved</TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-purple-600">About</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <div className="grid gap-4">
              {userPosts.map(post => (
                <Card key={post.id} className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{post.timestamp}</p>
                      </div>
                      
                      <p className="text-gray-300">{post.content}</p>
                      
                      {post.image && (
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      )}
                      
                      <div className="flex items-center space-x-6 text-gray-400 pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Share className="h-4 w-4" />
                          <span>{post.shares}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="streams" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveStreams.map(stream => (
                <Card key={stream.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="relative">
                      <img 
                        src={stream.thumbnail} 
                        alt={stream.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white/80 hover:text-white cursor-pointer" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1 rounded flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{stream.duration}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-white font-medium">{stream.title}</h4>
                      <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{stream.views.toLocaleString()}</span>
                        </div>
                        <span>{stream.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedItems.map(item => (
                <Card key={item.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="mt-3">
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-purple-400 text-sm mt-1">{item.author}</p>
                      <p className="text-gray-400 text-xs mt-1">Saved {item.savedDate}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">{user.bio}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Link className="h-4 w-4" />
                      <span className="text-purple-400">{user.website}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Posts</span>
                    <span className="text-white font-semibold">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Live Streams</span>
                    <span className="text-white font-semibold">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Views</span>
                    <span className="text-white font-semibold">{user.totalViews}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Avg. Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">4.8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
