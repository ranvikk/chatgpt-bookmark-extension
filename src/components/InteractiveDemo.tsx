import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Tag, FolderOpen, Trash2, Check } from "lucide-react";

type BookmarkType = {
  id: number;
  text: string;
  tag: string;
  folder: string;
};

export const InteractiveDemo = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [showBookmarkBtn, setShowBookmarkBtn] = useState(false);
  const [savedBookmark, setSavedBookmark] = useState(false);
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([
    { id: 1, text: "How to implement React hooks effectively", tag: "React", folder: "Development" },
    { id: 2, text: "Best practices for API security", tag: "Security", folder: "Backend" },
    { id: 3, text: "CSS Grid vs Flexbox comparison", tag: "CSS", folder: "Frontend" }
  ]);

  const fullText = "Explain quantum computing in simple terms...";

  useEffect(() => {
    if (showDemo) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypingText(fullText.slice(0, index));
          index++;
        } else {
          setShowBookmarkBtn(true);
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [showDemo]);

  const handleBookmarkSave = () => {
    const newBookmark: BookmarkType = {
      id: Date.now(),
      text: "Quantum computing uses quantum bits that can be in multiple states simultaneously...",
      tag: "Physics",
      folder: "Science"
    };
    setBookmarks([newBookmark, ...bookmarks]);
    setSavedBookmark(true);
    setTimeout(() => {
      setSavedBookmark(false);
      setShowDemo(false);
      setTypingText("");
      setShowBookmarkBtn(false);
    }, 2000);
  };

  const deleteBookmark = (id: number) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  return (
    <section id="demo-section" className="py-16 md:py-24 px-4 bg-gradient-to-b from-secondary/20 to-background scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
            See It In Action
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground px-4">
            Experience how easy it is to save and organize your AI conversations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Demo Chat */}
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan-light flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <h3 className="text-xl font-semibold">ChatGPT Response</h3>
              </div>

              {!showDemo ? (
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Click the button below to simulate a ChatGPT conversation and see how bookmarking works!
                  </p>
                  <Button 
                    onClick={() => setShowDemo(true)}
                    className="w-full bg-gradient-to-r from-primary to-cyan-light hover:opacity-90"
                  >
                    Start Demo
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground mb-2">You asked:</p>
                    <p className="font-medium">{typingText}</p>
                    {typingText && <span className="animate-pulse">|</span>}
                  </div>

                  {showBookmarkBtn && !savedBookmark && (
                    <Button
                      onClick={handleBookmarkSave}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 animate-fade-in"
                    >
                      <Bookmark className="mr-2 h-4 w-4" />
                      Bookmark This Response
                    </Button>
                  )}

                  {savedBookmark && (
                    <div className="flex items-center justify-center gap-2 text-green-600 font-medium animate-fade-in">
                      <Check className="h-5 w-5" />
                      Bookmark Saved!
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Saved Bookmarks */}
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <h3 className="text-xl font-semibold">Your Bookmarks</h3>
                <Badge variant="secondary">{bookmarks.length}</Badge>
              </div>

              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {bookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="p-4 rounded-lg border-2 hover:border-primary/50 transition-all bg-card group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium mb-2 truncate">{bookmark.text}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {bookmark.tag}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <FolderOpen className="w-3 h-3 mr-1" />
                            {bookmark.folder}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => deleteBookmark(bookmark.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
