
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Users, 
  Heart, 
  MessageCircle, 
  Share,
  Video,
  Mic,
  Settings,
  Radio,
  Eye,
  Clock
} from "lucide-react";

const Live = () => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);

  const liveStreams = [
    {
      id: 1,
      title: "Building React Apps Live",
      streamer: "CodeMaster",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      viewers: 1247,
      category: "Programming",
      duration: "2:34:12"
    },
    {
      id: 2,
      title: "Gaming Championship Finals",
      streamer: "ProGamer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
      viewers: 5678,
      category: "Gaming",
      duration: "1:45:30"
    },
    {
      id: 3,
      title: "Music Production Tutorial",
      streamer: "BeatMaker",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      viewers: 892,
      category: "Music",
      duration: "0:58:22"
    }
  ];

  const startStream = () => {
    setIsLive(true);
    setViewerCount(1);
  };

  const stopStream = () => {
    setIsLive(false);
    setViewerCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Live Streaming
          </h1>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-purple-500 text-purple-400">
              <Video className="h-4 w-4 mr-2" />
              Browse All
            </Button>
            {!isLive ? (
              <Button 
                onClick={startStream}
                className="bg-red-600 hover:bg-red-700"
              >
                <Radio className="h-4 w-4 mr-2" />
                Go Live
              </Button>
            ) : (
              <Button 
                onClick={stopStream}
                variant="destructive"
              >
                Stop Stream
              </Button>
            )}
          </div>
        </div>

        {/* Stream Controls (when live) */}
        {isLive && (
          <Card className="bg-red-500/10 border-red-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 font-semibold">LIVE</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Eye className="h-4 w-4" />
                    <span>{viewerCount} viewers</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Categories */}
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {["All", "Gaming", "Programming", "Music", "Art", "Talk Shows"].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="whitespace-nowrap border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Live Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream) => (
            <Card key={stream.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{stream.duration}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white/80" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-white line-clamp-2">{stream.title}</h3>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={stream.avatar} 
                      alt={stream.streamer}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm text-purple-400">{stream.streamer}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                          {stream.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{stream.viewers.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex space-x-4 text-gray-400">
                      <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">123</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">45</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                        <Share className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stream Setup Guide */}
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Start Your First Stream</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Setup Your Stream</h4>
                <p className="text-gray-400 text-sm">Configure your camera, microphone, and streaming settings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Radio className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Go Live</h4>
                <p className="text-gray-400 text-sm">Click the Go Live button and start broadcasting to your audience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Engage</h4>
                <p className="text-gray-400 text-sm">Interact with your viewers through live chat and reactions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Live;
