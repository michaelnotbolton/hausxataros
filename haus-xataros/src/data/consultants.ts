import davidHeadshot from '../assets/consultants/david-m-daniel.jpg'

export interface ConsultantSection {
  title: string
  items: {
    title: string
    years: string
    role: string
    summary: string
  }[]
}

export interface Consultant {
  name: string
  slug: string
  alterEgo: string
  tagline: string
  shortBio: string
  authorKey: string
  headshot: string
  overview: string[]
  competencies: string[]
  philosophyTitle: string
  philosophy: string
  portfolioLinkLabel: string
  bookingLabel?: string
  sections: ConsultantSection[]
}

export const consultants: Consultant[] = [
  {
    name: 'David M. Daniel',
    slug: 'david-m-daniel',
    alterEgo: "Leona La'Roux",
    tagline: 'Narrative architect, world-builder, and queer creative strategist.',
    shortBio:
      'A multidisciplinary creative with decades of experience across fiction, game design, live performance, education, and strategic consulting.',
    authorKey: 'david-m-daniel',
    headshot: davidHeadshot,
    overview: [
      'David brings twenty-plus years of cross-medium storytelling practice to consulting engagements that need structure, emotional clarity, and a strong point of view.',
      'His work spans narrative design, live production, curriculum building, and collaborative creative systems, with a focus on turning big ideas into work people can actually make, teach, and ship.',
    ],
    competencies: [
      'World-Building & Lore Architecture',
      'Character Development & Dialogue',
      'Quest & Narrative Structure',
      'Branching Narrative Systems',
      'Creative Direction & Live Production',
      'Cross-Team Creative Leadership',
      'Narrative Documentation & Style Guides',
      'Player-First Design Thinking',
      'Systematic Creative Workflow Design',
      'Reading the Room',
    ],
    philosophyTitle: 'Why Hiring an Underemployed Drag Queen Might Be the Smartest Decision You Ever Made',
    philosophy:
      'David works at the intersection of rigor, theatrical instinct, and lived queer storytelling. The value is not novelty for novelty’s sake; it is the ability to read a project, find the emotional spine, and make the work land with clarity and force.',
    portfolioLinkLabel: "View David's selected work",
    bookingLabel: 'Book a discovery call with David',
    sections: [
      {
        title: 'Narrative & World-Building',
        items: [
          {
            title: 'Haus Xataros',
            years: '2025–Present',
            role: 'Founder & Mother',
            summary:
              'Built the collective’s mythology, style guidelines, content strategy, and consulting voice from the ground up around queer storytelling and cross-medium narrative design.',
          },
          {
            title: 'MRE: The Malkuth Reality Engine',
            years: '2024–Present',
            role: 'Creator & Lead Designer',
            summary:
              'Designing a large-scale world bible and TTRPG system with interconnected factions, timelines, and modular narrative arcs that can travel across mediums.',
          },
          {
            title: 'D&D Intensive Camps',
            years: '2014–Present',
            role: 'Tabletop Narrative Designer',
            summary:
              'Designed branching live-play campaigns for neurodivergent youth, balancing player agency, onboarding, pacing, and emotional stakes in real time.',
          },
        ],
      },
      {
        title: 'Creative Direction & Production',
        items: [
          {
            title: 'Atomic Follies Creative Collective',
            years: '2022–Present',
            role: 'Founder, Director, Producer & Headline Performer',
            summary:
              'Led a rapid-iteration live production company, building original shows, multi-disciplinary teams, and sustained community engagement while raising funds for queer youth services.',
          },
          {
            title: 'Los Alamos Youth Summer Film Intensive',
            years: '2021–Present',
            role: 'Lead Instructor & Curriculum Designer',
            summary:
              'Architected a multi-organization coalition, designed storytelling curriculum, and delivered student work recognized by FilmPrize Jr. NM.',
          },
          {
            title: 'Theatrical Direction',
            years: '2015–Present',
            role: 'Director',
            summary:
              'Directed musical, dramatic, and experimental productions with a focus on spatial pacing, environmental storytelling, and high-stakes collaboration.',
          },
        ],
      },
      {
        title: 'Education & Craft',
        items: [
          {
            title: 'University of Texas at Austin',
            years: '2009–2011',
            role: 'BA Rhetoric & Writing; BA English Literature & Creative Writing',
            summary:
              'Formal training in rhetoric, writing, and literary analysis that continues to shape David’s consulting approach to structure, language, and audience.',
          },
          {
            title: 'Speculative Fiction Craft Intensives',
            years: '2016–2020',
            role: 'Continuing Craft Development',
            summary:
              'Studied with leading fiction faculty through focused craft intensives in speculative fiction, revision, and publishing practice.',
          },
        ],
      },
    ],
  },
]

export function getConsultantBySlug(slug: string) {
  return consultants.find((consultant) => consultant.slug === slug)
}

export function getConsultantByAuthorKey(authorKey: string) {
  return consultants.find((consultant) => consultant.authorKey === authorKey)
}
