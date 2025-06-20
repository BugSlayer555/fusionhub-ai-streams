
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Settings, 
  Heart, 
  MessageCircle, 
  Share, 
  Users, 
  Video,
  FileText,
  Calendar
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    bio: "Content creator and tech enthusiast. Building the future one stream at a time.",
    followers: 1247,
    following: 398,
    posts: 156,
    joinDate: "March 2023"
  });

  const handleGoBack = () => {
    navigate(-1);
  };

  const userPosts = [
    {
      id: 1,
      type: "post",
      title: "My thoughts on AI development",
      content: "AI is revolutionizing the way we think about technology...",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      type: "live",
      title: "Live: Building React Apps",
      duration: "1:23:45",
      viewers: 156,
      timestamp: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleGoBack}
              variant="outline" 
              size="icon"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Profile
            </h1>
          </div>
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            <Settings className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardContent className="p-6">
            <div className="flex items-start space-x-6">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                <p className="text-purple-400">{user.username}</p>
                <p className="text-gray-300 mt-2">{user.bio}</p>
                <div className="flex items-center space-x-1 text-gray-400 text-sm mt-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {user.joinDate}</span>
                </div>
                <div className="flex space-x-6 mt-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{user.posts}</div>
                    <div className="text-sm text-gray-400">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{user.followers}</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{user.following}</div>
                    <div className="text-sm text-gray-400">Following</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="posts" className="space-y-4">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="posts" className="data-[state=active]:bg-purple-600">
              <FileText className="h-4 w-4 mr-2" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="streams" className="data-[state=active]:bg-purple-600">
              <Video className="h-4 w-4 mr-2" />
              Streams
            </TabsTrigger>
            <TabsTrigger value="following" className="data-[state=active]:bg-purple-600">
              <Users className="h-4 w-4 mr-2" />
              Following
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4">
            {userPosts.filter(post => post.type === "post").map((post) => (
              <Card key={post.id} className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                  <p className="text-gray-300 mt-2">{post.content}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <span className="text-gray-400 text-sm">{post.timestamp}</span>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="streams" className="space-y-4">
            {userPosts.filter(post => post.type === "live").map((post) => (
              <Card key={post.id} className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                      <p className="text-gray-400 text-sm">{post.timestamp}</p>
                    </div>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      {post.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 mt-4 text-gray-400">
                    <Video className="h-4 w-4" />
                    <span>{post.viewers} viewers</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="following" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-white/5 backdrop-blur-md border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={`https://images.unsplash.com/photo-${1472099645785 + i}?w=40&h=40&fit=crop&crop=face`}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-white">User {i}</h4>
                        <p className="text-sm text-gray-400">@user{i}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
