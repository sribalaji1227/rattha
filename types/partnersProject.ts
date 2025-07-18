export interface Project {
  id: string;
  image: string;
  location: string;
  title: string;
  status: "New Launch" | "Under Construction" | "Completed" | "Ready to Move" | "Possession Ready";
  price: string;
  possessionDate: string;
}

export interface ExploreCardProps {
  project: Project;
  index?: number;
}

export type ProjectStatus = "New Launch" | "Under Construction" | "Ready to Occupy";

export interface FilterState {
  residential: string[];
  cities: string[];
  types: string[];
  status: string[];
  budget: string[];
  newLaunches: boolean;
  area: [number, number];
  amenities: string[];
}


export interface ExploreFilterBarProps {
  projects: Project[];
  onFilterChange: (filters: FilterState) => void;
}


export interface DropdownProps {
  label: string;
  selected: string[];
  options: string[];
  isOpen: boolean;
  onOpen: () => void;
  onSelect: (value: string) => void;
}

export interface ExploreListProps {
  projects: Project[];
  postsPerLoad?: number;
}