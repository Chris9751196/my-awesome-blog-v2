import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '../data/mockData';

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <article
      className="bg-white rounded-lg overflow-hidden border border-gray-100 hover-lift group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary">
          {article.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-primary mb-3 group-hover:text-cta transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-gray-400 text-xs">
            <span className="flex items-center">
              <Clock size={12} className="mr-1" />
              {article.readTime} min
            </span>
            <span>{article.date}</span>
          </div>

          <button className="flex items-center text-cta hover:text-blue-700 transition-colors text-sm font-medium group/btn">
            阅读更多
            <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;