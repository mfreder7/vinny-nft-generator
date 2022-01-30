export interface Message {
  message: string;
}

export interface Trait{
  name: string;
  weight: number;
  image: File;
}

export interface TraitTypes {
  type: string;
  traits: Trait[];
}

export interface CollectionInput {
  traits: TraitTypes[];
}

