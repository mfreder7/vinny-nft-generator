export interface Message {
  message: string;
}

export interface Atribute {
  name: string;
  weight: number;
  image: File;
}

export interface TraitTypes {
  type: string;
  traits: Atribute[];
}

export interface Collections {
  traitTypes: TraitTypes[];
}

