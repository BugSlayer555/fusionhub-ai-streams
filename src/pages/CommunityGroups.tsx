
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { 
  Users, 
  Search, 
  Plus,
  Hash,
  Volume2,
  Crown,
  Shield
} from "lucide-react";

const CommunityGroups = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const communities = [
    {
      id: "gaming-hub",
      name: "Gaming Hub",
      description: "The ultimate gaming community for all gamers",
      members: 15420,
      online: 892,
      avatar: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop",
      role: "admin",
      channels: 12,
      category: "Gaming"
    },
    {
      id: "tech-talk",
      name: "Tech Talk",
      description: "Discuss the latest in technology and innovation",
      members: 8934,
      online: 445,
      avatar: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop",
      role: "member",
      channels: 8,
      category: "Technology"
    },
    {
      id: "creative-corner", 
      name: "Creative Corner",
      description: "Share your art, music, and creative projects",
      members: 5621,
      online: 234,
      avatar: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=100&h=100&fit=crop",
      role: "moderator",
      channels: 6,
      category: "Creative"
    },
    {
      id: "music-lovers",
      name: "Music Lovers",
      description: "For those who live and breathe music",
      members: 12045,
      online: 567,
      avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
      role: "member",
      channels: 10,
      category: "Music"
    }
  ];

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin": return <Crown className="h-3 w-3 text-yellow-500" />;
      case "moderator": return <Shield className="h-3 w-3 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="flex">
        <div className="w-64 h-screen sticky top-0">
          <Navigation />
        </div>

        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  My Communities
                </h1>
                <p className="text-gray-400 mt-1">Manage and explore your communities</p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Join Community
              </Button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search communities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommunities.map((community) => (
                <Link key={community.id} to={`/community/${community.id}`}>
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={community.avatar} 
                          alt={community.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-white truncate">{community.name}</h3>
                            {getRoleIcon(community.role)}
                          </div>
                          <p className="text-sm text-gray-400 line-clamp-2 mb-3">{community.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-1 text-gray-400">
                                <Users className="h-3 w-3" />
                                <span>{community.members.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-green-400">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>{community.online}</span>
                                <span className="text-gray-400">online</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                                {community.category}
                              </Badge>
                              <div className="flex items-center space-x-1 text-xs text-gray-400">
                                <Hash className="h-3 w-3" />
                                <span>{community.channels} channels</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredCommunities.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">No communities found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGroups;
