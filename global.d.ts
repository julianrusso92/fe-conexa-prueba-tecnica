interface NavigationProps {
  name: string;
  href: string;
}

interface NavProps {
  navigation: NavigationProps[];
  openMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

export interface People {
  count: number;
  next: string;
  previous: null | string;
  results: PersonResult[];
}

export interface PersonResult {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}

export interface Planets {
  count: number;
  next: string;
  previous: null | string;
  results: PlanetResult[];
}

export interface PlanetResult {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Films {
  count: number;
  next: null | string;
  previous: null | string;
  results: FilmResult[];
}

export interface FilmResult {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface Starships {
  count: number;
  next: string;
  previous: null | string;
  results: StarshipResult[];
}

export interface StarshipResult {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
