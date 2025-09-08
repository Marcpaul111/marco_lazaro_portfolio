'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code,
  FileCode,
  Github,
  Mail,
  ExternalLink,
  BookOpen,
  Star,
} from 'lucide-react';
import JsonLd from '@/components/json-ld';
import TypingAnimation from '@/components/ui/typing-animation';
import HeroSection from '@/components/homepage/hero-section';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marco Paulo Lazaro',
    jobTitle: 'Full Stack Developer',
    url: '',
    sameAs: [
      'https://github.com/Marcpaul111',
      'https://www.linkedin.com/in/marco-paulo-lazaro-b216a920b/',
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <HeroSection />
    </>
  );
}
