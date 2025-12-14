export interface Proficiency {
  index: string;
  name: string;
  url?: string;
}

export interface PurpleOption {
  option_type: string;
  item?: Proficiency;
  choice?: {
    desc: string;
    type: string;
    choose: number;
    from: {
      option_set_type: string;
      options: PurpleOption[]; // nested
    };
  };
}

export interface MonkProficiencyChoice {
  desc: string;
  choose: number;
  type: string;
  from: {
    option_set_type: string;
    options: PurpleOption[];
  };
}
