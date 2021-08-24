export interface project {
  title: string;
  previewImage: any;
  previewText: string;
  techs: string;
  images: any[];
  description: string;
  links: projectLink[];
}

export interface projectLink {
  url: string;
  label: string;
  icon?: any;
}

export interface post {
  title: string;
  description?: string;
  url?: string;
  image?: any;
  icon?: any;
  source?: string;
}
