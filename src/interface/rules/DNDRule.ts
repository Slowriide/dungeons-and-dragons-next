export interface DNDRule {
  name: string;
  index: string;
  desc: string;
  subsections: Subsection[];
  url: string;
  updated_at: Date;
}

export interface Subsection {
  name: string;
  index: string;
  url: string;
}
