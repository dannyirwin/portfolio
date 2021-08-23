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
