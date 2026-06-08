export interface Stat {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  about: string;
  stats: Stat[];
}