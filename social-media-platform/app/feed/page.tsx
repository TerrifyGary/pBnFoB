"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { PostCard } from "@/components/post-card"

// Mock data for posts
const initialPosts = [
  {
    id: "1",
    content: "Just launched my new website! Check it out and let me know what you think.",
    author: {
      id: "2",
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "2 hours ago",
    likes: 24,
    comments: 5,
    shares: 2,
  },
  {
    id: "2",
    content: "Beautiful day for a hike in the mountains! 🏔️ #nature #outdoors",
    author: {
      id: "3",
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    createdAt: "5 hours ago",
    likes: 42,
    comments: 8,
    shares: 3,
  },
]

export default function FeedPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [postContent, setPostContent] = useState("")
  const [posts, setPosts] = useState(initialPosts)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCreatePost = () => {
    if (!postContent.trim()) {
      toast({
        title: "Error",
        description: "Post content cannot be empty",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newPost = {
        id: Date.now().toString(),
        content: postContent,
        author: {
          id: user!.id,
          name: user!.name,
          avatar: user!.avatar,
        },
        createdAt: "Just now",
        likes: 0,
        comments: 0,
        shares: 0,
      }

      setPosts([newPost, ...posts])
      setPostContent("")
      setIsSubmitting(false)

      toast({
        title: "Success",
        description: "Your post has been published",
      })
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user?.name}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="min-h-[100px]"
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleCreatePost} disabled={isSubmitting}>
            {isSubmitting ? "Posting..." : "Post"}
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

