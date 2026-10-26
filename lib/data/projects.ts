import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    name: 'Property Management System',
    description:
      'A full-stack property management platform for residential landlords and tenants in the Philippines. Handles the full leasing lifecycle — tenant onboarding, unit occupancy, lease contracts, monthly billing with utility charges, and payment collection through cards and Philippine e-wallets. Landlords and tenants communicate in-app through real-time chat, sign leases digitally, and receive live notifications. Built as a REST API on .NET 10 with PostgreSQL, deployed on Render.',
    heroImage: '/projects/pms.png',
    images: [
      '/projects/pms.png',
      // add real screenshots here
    ],
    skills: [
      { name: 'C#' },
      { name: '.NET 10' },
      { name: 'ASP.NET Core' },
      { name: 'Entity Framework Core' },
      { name: 'PostgreSQL' },
      { name: 'SignalR' },
      { name: 'Docker' },
      { name: 'ReactJs' },
    ],
    hosted_link: 'https://pms-asia-pacific.vercel.app/',
    client: 'PropVault',
    client_logo: '/projects/pms.png',
    client_link: '',
    role: 'Full Stack Developer',
    status: 'Ongoing',
    startDate: '2026-08-01',
    endDate: new Date().toISOString(),
    features: [
      {
        title: 'Tenant & Unit Management',
        description:
          'Track properties, units, and tenants with occupancy visibility, vacant-unit filtering, and an invite-based onboarding flow that lets new tenants set their own password via emailed token.',
      },
      {
        title: 'Automated Billing',
        description:
          'Generate monthly bills itemising rent, water, electricity, maintenance fees, and carried-over balances, with overdue tracking, cancellation, and downloadable PDF statements of account.',
      },
      {
        title: 'Integrated Payment Collection',
        description:
          'Accept payments through Paymongo supporting cards and Philippine e-wallets — GCash, GrabPay, PayMaya, and QR Ph — with webhook-confirmed reconciliation, gateway reference tracking, and generated PDF receipts.',
      },
      {
        title: 'Digital Lease Signing',
        description:
          'Generate lease contracts as PDFs, route them for e-signature through Documenso with per-signer status tracking and signing links, and reconcile completion via signed webhooks.',
      },
      {
        title: 'Real-Time Messaging & Notifications',
        description:
          'SignalR-backed chat between tenants and agents with file attachments, read receipts, and conversation status, alongside live notification delivery and unread badges.',
      },
      {
        title: 'Branding & Payment Configuration',
        description:
          'Admin-configurable company profile, logo upload, and per-payment-method enable/disable toggles so operators can control which payment options tenants actually see.',
      },
      {
        title: 'User: lazaromarco1526@gmail.com / Password: M@rcpaul1526',
        description: '',
      },
    ],
  },
];
