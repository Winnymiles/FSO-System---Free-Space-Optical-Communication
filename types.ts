export interface NavItem {
  label: string;
  href: string;
}

export interface StatProps {
  value: string;
  label: string;
  subLabel?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: string;
  since: string;
  website: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  details: {
    dob: string;
    missions: number;
    timeInSpace: string;
    firstMission: string;
  };
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Adventure {
  id: string;
  title: string;
  year: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}