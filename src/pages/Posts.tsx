
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePosts } from "@/contexts/PostsContext";
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Eye,
  Play,
  Clock,
  ArrowLeft
} from "lucide-react";

const Posts = () => {
  const navigate = useNavigate();
  const { posts } = usePosts();

  const handleLike = (postId: number) => {
    // Note: This would need to be implemented in the context for global state management
    console.log(`Liked post ${postId}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

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
              All Posts
            </h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
              Latest
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
              Popular
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
              Following
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                {post.type === "live" ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <img 
                        src={post.streamImage} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>LIVE</span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.duration}</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-16 w-16 text-white/80 hover:text-white cursor-pointer" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                      <p className="text-purple-400 mt-1">{post.streamer}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                        <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.viewers.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={post.authorAvatar} 
                        alt={post.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-white">{post.author}</h3>
                          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                            {post.category}
                          </span>
                          <span className="text-gray-400 text-sm">{post.timestamp}</span>
                        </div>
                        <h2 className="text-lg font-semibold text-white mt-2">{post.title}</h2>
                        <p className="text-gray-300 mt-2">{post.content}</p>
                      </div>
                    </div>
                    
                    {post.image && (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    )}
                    
                    <div className="flex items-center space-x-6 text-gray-400 pt-4 border-t border-white/10">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className="flex items-center space-x-2 hover:text-red-400 transition-colors"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                        <Share className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
