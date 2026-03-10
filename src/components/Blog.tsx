import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <section id="blog" className="py-16">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-12">
          Blogs
        </h2>

        <div className="flex flex-col gap-4">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-2 border-dotted border-border hover:border-muted-foreground/25 transition-all duration-300 hover:bg-muted/25 dark:hover:bg-muted/40 overflow-hidden group">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between gap-4 mt-3">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-muted-foreground text-sm shrink-0 group-hover:text-primary transition-colors">
                      Read more →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
