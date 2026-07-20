import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { authorInfo } from '../data/mockData';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="relative inline-block mb-8">
            <img
              src={authorInfo.avatar}
              alt={authorInfo.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm {authorInfo.name}
          </h1>

          <p className="text-lg md:text-xl text-secondary mb-6 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {authorInfo.title}
          </p>

          <p className="text-secondary max-w-lg mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {authorInfo.bio}
          </p>

          <div className="flex justify-center space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={authorInfo.socialLinks.github}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-cta hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={authorInfo.socialLinks.twitter}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-cta hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={authorInfo.socialLinks.linkedin}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-cta hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={authorInfo.socialLinks.email}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-secondary hover:bg-cta hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="mt-16">
            <a
              href="#articles"
              className="inline-flex items-center text-secondary hover:text-cta transition-colors group"
            >
              <span className="text-sm mr-2">浏览文章</span>
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;