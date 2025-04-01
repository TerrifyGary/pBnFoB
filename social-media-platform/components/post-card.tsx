"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/lib/auth-context"

type Post = {
  id: string
  content: string
  author: {
    id: string
    name: string
    avatar?: string
  }
  createdAt: string
  likes: number
  comments: number
  shares: number
}

type Comment = {
  id: string
  content: string
  author: {
    id: string
    name: string
    avatar?: string
  }
  createdAt: string
}

export function PostCard({ post }: { post: Post }) {
  const { user } = useAuth()
  const { toast } = useToast()
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)
  const [commentContent, setCommentContent] = useState("")
  const [comments, setComments] = useState<Comment[]>([])
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
    setLiked(!liked)
  }

  const handleShare = () => {
    toast({
      title: "Shared",
      description: "Post has been shared",
    })
  }

  const handleAddComment = () => {
    if (!commentContent.trim()) {
      toast({
        title: "Error",
        description: "Comment cannot be empty",
        variant: "destructive",
      })
      return
    }

    setIsSubmittingComment(true)

    // Simulate API call
    setTimeout(() => {
      const newComment = {
        id: Date.now().toString(),
        content: commentContent,
        author: {
          id: user!.id,
          name: user!.name,
          avatar: user!.avatar,
        },
        createdAt: "Just now",
      }

      setComments([...comments, newComment])
      setCommentContent("")
      setIsSubmittingComment(false)

      toast({
        title: "Success",
        description: "Your comment has been added",
      })
    }, 500)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.createdAt}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{post.content}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center space-x-1 ${liked ? "text-red-500" : ""}`}
              onClick={handleLike}
            >
              <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
              <span>{likesCount}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle className="h-4 w-4" />
              <span>{comments.length + post.comments}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            <span>{post.shares}</span>
          </Button>
        </div>

        {showComments && (
          <div className="w-full space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                  <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 rounded-lg bg-muted p-3">
                  <div className="font-medium">{comment.author.name}</div>
                  <p>{comment.content}</p>
                  <p className="text-xs text-muted-foreground mt-1">{comment.createdAt}</p>
                </div>
              </div>
            ))}

            <div className="flex space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Write a comment..."
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button size="sm" onClick={handleAddComment} disabled={isSubmittingComment}>
                  {isSubmittingComment ? "Posting..." : "Post Comment"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

