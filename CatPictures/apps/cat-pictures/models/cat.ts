export type CatBreedModel = {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
  description: string;
  alt_names: string;
  chaild_friendly: number;
  dog_friendly: number;
  energy_level: number;
  rare: number;
  vocalisation: number;
}

export type CatModel = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: CatBreedModel[];
};
