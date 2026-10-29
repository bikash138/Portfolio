import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <section id="blog" className="py-16">
      <div>
        <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl md:text-left md:text-4xl">
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
              <Card className="bg-card border-border hover:border-muted-foreground/25 hover:bg-muted/25 dark:hover:bg-muted/40 group min-w-0 overflow-hidden border-2 border-dotted py-3 transition-all duration-300 sm:py-6">
                <CardContent className="px-3 sm:p-4">
                  <h3 className="text-foreground group-hover:text-primary text-sm leading-snug font-bold transition-colors min-[360px]:text-base sm:text-xl">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-xs leading-relaxed text-pretty sm:text-sm">
                    {post.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-2 sm:gap-4">
                    <div className="text-muted-foreground flex min-w-0 items-center gap-1.5 text-[10px] min-[360px]:text-[11px] sm:gap-2 sm:text-sm">
                      <Calendar className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary shrink-0 text-[10px] transition-colors min-[360px]:text-[11px] sm:text-sm">
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
