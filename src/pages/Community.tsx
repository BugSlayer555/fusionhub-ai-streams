import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Hash, 
  Users, 
  MessageCircle, 
  Plus,
  Search,
  Bell,
  Pin,
  Volume2,
  VolumeX,
  Settings,
  ArrowLeft,
  Crown,
  Shield
} from "lucide-react";

const Community = () => {
  const { communityId } = useParams();
  const [selectedChannel, setSelectedChannel] = useState("general");

  // Mock community data based on ID
  const communityData = {
    "gaming-hub": {
      name: "Gaming Hub",
      description: "The ultimate gaming community for all gamers",
      members: 15420,
      avatar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop"
    }
  };

  const community = communityData[communityId as keyof typeof communityData] || communityData["gaming-hub"];

  const channels = [
    { id: "general", name: "general", type: "text", members: 1250, unread: 0 },
    { id: "gaming", name: "gaming", type: "text", members: 890, unread: 3 },
    { id: "tech-talk", name: "tech-talk", type: "text", members: 654, unread: 1 },
    { id: "music", name: "music", type: "text", members: 432, unread: 0 },
    { id: "voice-general", name: "General Voice", type: "voice", members: 23, unread: 0 },
    { id: "voice-gaming", name: "Gaming Voice", type: "voice", members: 12, unread: 0 },
  ];

  const messages = [
    {
      id: 1,
      user: "TechGuru",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      message: "Just finished watching the new AI documentary. Thoughts?",
      timestamp: "2 min ago",
      replies: 5
    },
    {
      id: 2,
      user: "GameMaster",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      message: "Anyone up for a gaming session tonight? 🎮",
      timestamp: "5 min ago",
      replies: 12
    },
    {
      id: 3,
      user: "MusicLover",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      message: "Check out this amazing remix I found!",
      timestamp: "10 min ago",
      replies: 8
    }
  ];

  const onlineUsers = [
    { name: "TechGuru", status: "online", activity: "Browsing posts" },
    { name: "GameMaster", status: "in-game", activity: "Playing Cyberpunk 2077" },
    { name: "MusicLover", status: "streaming", activity: "Live: Music Session" },
    { name: "CodeNinja", status: "online", activity: "Coding" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="flex">
        <div className="w-64 h-screen sticky top-0">
          <Navigation />
        </div>

        <div className="flex h-screen flex-1">
          {/* Channels Sidebar */}
          <div className="w-64 bg-white/5 backdrop-blur-md border-r border-white/10 p-4 overflow-y-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/community">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center space-x-2 flex-1">
                <img src={community.avatar} alt={community.name} className="w-8 h-8 rounded-full" />
                <h2 className="text-lg font-semibold text-white truncate">{community.name}</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">Text Channels</h3>
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white h-6 w-6">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="space-y-1">
                  {channels.filter(c => c.type === "text").map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel.id)}
                      className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                        selectedChannel === channel.id 
                          ? "bg-purple-600/20 text-purple-400" 
                          : "text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Hash className="h-4 w-4" />
                      <span className="flex-1 text-left text-sm">{channel.name}</span>
                      {channel.unread > 0 && (
                        <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                          {channel.unread}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase">Voice Channels</h3>
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white h-6 w-6">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="space-y-1">
                  {channels.filter(c => c.type === "voice").map((channel) => (
                    <button
                      key={channel.id}
                      className="w-full flex items-center space-x-2 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <Volume2 className="h-4 w-4" />
                      <span className="flex-1 text-left text-sm">{channel.name}</span>
                      {channel.members > 0 && (
                        <span className="text-xs text-gray-500">{channel.members}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">ONLINE — {onlineUsers.length}</h3>
              <div className="space-y-2">
                {onlineUsers.map((user, index) => (
                  <div key={index} className="flex items-center space-x-2 p-1">
                    <div className="relative">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-900 ${
                        user.status === "online" ? "bg-green-500" : 
                        user.status === "in-game" ? "bg-yellow-500" : "bg-red-500"
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{user.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Channel Header */}
            <div className="bg-white/5 backdrop-blur-md border-b border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Hash className="h-5 w-5 text-gray-400" />
                  <h1 className="text-xl font-semibold text-white">{selectedChannel}</h1>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    {channels.find(c => c.id === selectedChannel)?.members} members
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                    <Pin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                    <Users className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex space-x-3 hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <img 
                    src={message.avatar} 
                    alt={message.user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-white">{message.user}</span>
                      <span className="text-xs text-gray-400">{message.timestamp}</span>
                    </div>
                    <p className="text-gray-300">{message.message}</p>
                    {message.replies > 0 && (
                      <button className="flex items-center space-x-1 mt-2 text-xs text-gray-400 hover:text-white transition-colors">
                        <MessageCircle className="h-3 w-3" />
                        <span>{message.replies} replies</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white/5 backdrop-blur-md border-t border-white/10 p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder={`Message #${selectedChannel}`}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
