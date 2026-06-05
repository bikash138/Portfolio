import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <section id="blog" className="py-16">
      <div>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-left md:text-4xl">
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
              <Card className="bg-card border-border hover:border-muted-foreground/25 hover:bg-muted/25 dark:hover:bg-muted/40 group overflow-hidden border-2 border-dotted transition-all duration-300">
                <CardContent className="p-4">
                  <h3 className="text-foreground group-hover:text-primary text-xl font-bold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {post.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary shrink-0 text-sm transition-colors">
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
