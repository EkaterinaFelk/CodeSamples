export type CatBreedModel = {
  origin: string;
  country_codes: string;
  life_span: string;
  wikipedia_url: string;
}

export type CatModel = {
  id: string;
  url: string;
  has_breeds: boolean;
  breeds: CatBreedModel[];
};
