
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plus, 
  Image, 
  Video, 
  Send, 
  Eye, 
  Calendar,
  Tag
} from "lucide-react";

const AdminPanel = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "Technology",
    image: "",
    type: "post"
  });

  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title: "AI Revolution in 2024",
      status: "published",
      views: 1240,
      date: "2024-01-15",
      category: "Technology"
    },
    {
      id: 2,
      title: "Future of Streaming",
      status: "draft",
      views: 0,
      date: "2024-01-14",
      category: "Entertainment"
    }
  ]);

  const categories = [
    "Technology", "Entertainment", "Gaming", "Music", "News", "Sports", "Education"
  ];

  const handlePublish = () => {
    if (newPost.title && newPost.content) {
      const post = {
        id: Date.now(),
        title: newPost.title,
        status: "published",
        views: 0,
        date: new Date().toISOString().split('T')[0],
        category: newPost.category
      };
      setRecentPosts([post, ...recentPosts]);
      setNewPost({
        title: "",
        content: "",
        category: "Technology",
        image: "",
        type: "post"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <div className="flex space-x-2">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Quick Post
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Post Creation */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Create New Post</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Post Title
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    placeholder="Enter post title..."
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-gray-800">{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Content
                  </label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    placeholder="Write your post content..."
                    rows={6}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={newPost.image}
                    onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div className="flex space-x-4">
                  <Button 
                    onClick={handlePublish}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex-1"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Publish Now
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                    Save Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Posts & Stats */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Posts</span>
                  <span className="text-white font-semibold">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">This Month</span>
                  <span className="text-green-400 font-semibold">+23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Views</span>
                  <span className="text-white font-semibold">1.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg. Engagement</span>
                  <span className="text-blue-400 font-semibold">85%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentPosts.map(post => (
                    <div key={post.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium">{post.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            post.status === 'published' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {post.status}
                          </span>
                          <span className="text-gray-400 text-xs flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {post.views}
                          </span>
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

export default AdminPanel;
