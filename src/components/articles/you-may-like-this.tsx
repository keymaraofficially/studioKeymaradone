'use client';

import { categories, latestInsights } from '@/lib/data';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define a type for the article data
type Article = typeof latestInsights[0];

export const YouMayLikeThis = ({ currentSlug }: { currentSlug: string }) => {
    const [shuffled, setShuffled] = useState<Article[]>([]);

    useEffect(() => {
        // Shuffle logic now runs only on the client
        const filteredInsights = latestInsights.filter(insight => insight.slug !== currentSlug);
        const shuffledInsights = [...filteredInsights].sort(() => 0.5 - Math.random());
        setShuffled(shuffledInsights.slice(0, 2));
    }, [currentSlug]);

    if (!shuffled.length) {
        // Render a placeholder or null on the server and initial client render
        return null; 
    }
  
    return (
        <div className="space-y-3">
            {shuffled.map(article => {
                const category = categories.find(c => c.name === article.category);
                const categorySlug = category ? category.slug : 'tools-comparison';
                return (
                    <Link key={article.slug} href={`/category/${categorySlug}/${article.slug}`} className="sidebar-article-card group">
                        <span className="article-tag">{article.category}</span>
                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{article.title}</h4>
                    </Link>
                )
            })}
        </div>
    );
};
