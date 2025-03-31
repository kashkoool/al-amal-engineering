'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from './components/Navigation';
import { useTranslation } from './i18n';
import { projects } from './data/projects';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

interface Service {
  key: string;
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  const { t, language } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllAbout, setShowAllAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

  const services: Service[] = [
    { 
      key: 'glass', 
      title: t('services.glass.title'), 
      description: t('services.glass.description'),
      image: '/images/Glass Solutions.jpg'
    },
    { 
      key: 'aluminum', 
      title: t('services.aluminum.title'), 
      description: t('services.aluminum.description'),
      image: '/images/Aluminum Works.jpg'
    },
    { 
      key: 'interior', 
      title: t('services.interior.title'), 
      description: t('services.interior.description'),
      image: '/images/Interior Solutions.jpg'
    },
    { 
      key: 'metal', 
      title: t('services.metal.title'), 
      description: t('services.metal.description'),
      image: '/images/Metal & Iron Works.jpg'
    },
    { 
      key: 'turnkey', 
      title: t('services.turnkey.title'), 
      description: t('services.turnkey.description'),
      image: '/images/Turnkey Construction.jpg'
    },
    { 
      key: 'specialty', 
      title: t('services.specialty.title'), 
      description: t('services.specialty.description'),
      image: '/images/Specialty Services.jpg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom > 0;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollReveal);
    };
  }, []);

  const handleShowMoreProjects = () => {
    setShowAllProjects(true);
    // Force a reflow to trigger animations
    setTimeout(() => {
      const elements = document.querySelectorAll('.project-card');
      elements.forEach((element) => {
        element.classList.add('visible');
      });
    }, 100);
  };

  const handleShowLessProjects = () => {
    setShowAllProjects(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation className={isScrolled ? 'scrolled' : ''} />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <Image
            src="/images/Building Facades.jpg"
            alt="Building Facades"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={100}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content animate-fade-in">
          <span className="section-icon">🏠</span>
          <h1>{t('hero.title')}</h1>    
          <p>{t('hero.subtitle')}</p>   
          <Link href="#contact" className="cta-button animate-float">
            <span className="button-icon">📞</span>
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-icon">🛠️</span>
            <h2 className="section-title scroll-reveal">{t('services.title')}</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.key} className="service-card scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-icon">📋</span>
            <h2 className="section-title scroll-reveal">{t('projects.title')}</h2>
          </div>
          <div className="projects-grid">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card scroll-reveal ${showAllProjects ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={project.image}
                  alt={t(`projects.details.items.${project.id}.title`)}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
                <h3>{t(`projects.details.items.${project.id}.title`)}</h3>
                {project.client && (
                  <p className="project-client">
                    <strong>{t('projects.details.client')}:</strong> {t(`projects.details.items.${project.id}.client`)}
                  </p>
                )}
                {project.contractor && (
                  <p className="project-contractor">
                    <strong>{t('projects.details.contractor')}:</strong> {t(`projects.details.items.${project.id}.contractor`)}
                  </p>
                )}
                <p className="project-scope">
                  <strong>{t('projects.details.scope')}:</strong> {t(`projects.details.items.${project.id}.scope`)}
                </p>
                {project.value && (
                  <p className="project-value">
                    <strong>{t('projects.details.value')}:</strong> {t(`projects.details.items.${project.id}.value`)}
                  </p>
                )}
                {project.duration && (
                  <p className="project-duration">
                    <strong>{t('projects.details.duration')}:</strong> {t(`projects.details.items.${project.id}.duration`)}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="show-more-container scroll-reveal">
            {!showAllProjects && projects.length > 6 && (
              <button 
                className="show-more-button"
                onClick={handleShowMoreProjects}
              >
                {t('projects.showMore')} ↓
              </button>
            )}
            {showAllProjects && (
              <button 
                className="show-more-button"
                onClick={handleShowLessProjects}
              >
                {t('projects.showLess')} ↑
              </button>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content scroll-reveal">
              <div className="section-header">
                <span className="section-icon">ℹ️</span>
                <h2>{t('about.title')}</h2>
              </div>
              <h3 className="about-subtitle">{t('about.subtitle')}</h3>
              <p>{t('about.description')}</p>
              
              <div className="specialties">
                <p>{t('about.specialties.glass')}</p>
                <p>{t('about.specialties.aluminum')}</p>
                <p>{t('about.specialties.turnkey')}</p>
              </div>

              {showAllAbout && (
                <div className="why-choose-us">
                  <h3>{t('about.whyChooseUs.title')}</h3>
                  <p>{t('about.whyChooseUs.expertise')}</p>
                  <p>{t('about.whyChooseUs.capabilities')}</p>
                  <p>{t('about.whyChooseUs.standards')}</p>
                  <p>{t('about.whyChooseUs.mission')}</p>
                </div>
              )}

              <p className="about-tagline">{t('about.tagline')}</p>
              
              <div className="about-actions">
                <a 
                  href="/company%20profile%202024.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  <span className="icon">👁️</span>
                  <span>{t('about.downloadProfile')}</span>
                </a>
                <button 
                  className="show-more-button"
                  onClick={() => setShowAllAbout(!showAllAbout)}
                >
                  {showAllAbout ? t('about.showLess') : t('about.showMore')} {showAllAbout ? '↑' : '↓'}
                </button>
              </div>
            </div>
            <div className="about-images scroll-reveal">
              <Image
                src="/images/Project planning.jpg"
                alt="Project planning"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 