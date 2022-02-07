export interface Message {
  message: string;
}

export interface Attribute {
  name: string;
  weight: number;
  image: File;
}

export interface TraitType {
  type: string;
  attributes: Attribute[];
}

export interface TraitOutput {
  type: string;
  attributes: Attribute;
}

export interface Collections {
  traitTypes: TraitType[];
}

export interface CollectionOutput {
  images: ImageOutput[];
}

export interface ImageOutput {
  traits: TraitOutput[];
  image: File;
}
