export interface SubclassFeature {
  index: string;
  class: Class;
  subclass: Class;
  name: string;
  level: number;
  prerequisites: any[];
  desc: string[];
  feature_specific: FeatureSpecific;
  url: string;
  updated_at: Date;
}

export interface Class {
  index: string;
  name: string;
  url: string;
}

export interface FeatureSpecific {
  subfeature_options: SubfeatureOptions;
  invocations: any[];
}

export interface SubfeatureOptions {
  choose: number;
  type: string;
  from: From;
}

export interface From {
  option_set_type: string;
  options: Option[];
}

export interface Option {
  option_type: string;
  item: Class;
}
