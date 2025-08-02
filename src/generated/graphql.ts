import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Brand = {
  __typename?: 'Brand';
  categories?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Model>>;
  name?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
};

export type Model = {
  __typename?: 'Model';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  musicians?: Maybe<Array<Musician>>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  specs: Specs;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ModelSortField {
  Name = 'name',
  Price = 'price',
  Type = 'type',
}

export type Musician = {
  __typename?: 'Musician';
  bands?: Maybe<Array<Scalars['String']['output']>>;
  musicianImage?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  findAllBrands: Array<Brand>;
  findBrandModels?: Maybe<Array<Maybe<Model>>>;
  findUniqueBrand?: Maybe<Brand>;
  findUniqueModel?: Maybe<Model>;
  searchModels: Array<Model>;
};

export type QueryFindBrandModelsArgs = {
  id: Scalars['ID']['input'];
  sortBy: SortBy;
};

export type QueryFindUniqueBrandArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFindUniqueModelArgs = {
  brandId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
};

export type QuerySearchModelsArgs = {
  brandId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Specs = {
  __typename?: 'Specs';
  bodyWood?: Maybe<Scalars['String']['output']>;
  bridge?: Maybe<Scalars['String']['output']>;
  fingerboardWood?: Maybe<Scalars['String']['output']>;
  neckWood?: Maybe<Scalars['String']['output']>;
  pickups?: Maybe<Scalars['String']['output']>;
  scaleLength?: Maybe<Scalars['String']['output']>;
  tuners?: Maybe<Scalars['String']['output']>;
};

export type SortBy = {
  field: ModelSortField;
  order: SortOrder;
};

export type FindAllBrandsQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllBrandsQuery = {
  __typename?: 'Query';
  findAllBrands: Array<{
    __typename?: 'Brand';
    id: string;
    name?: string | null;
    image?: string | null;
    origin?: string | null;
    categories?: Array<string> | null;
    models?: Array<{
      __typename?: 'Model';
      id: string;
      name?: string | null;
      description?: string | null;
      type?: string | null;
      price?: number | null;
      specs: {
        __typename?: 'Specs';
        bodyWood?: string | null;
        bridge?: string | null;
        fingerboardWood?: string | null;
        neckWood?: string | null;
        pickups?: string | null;
        scaleLength?: string | null;
        tuners?: string | null;
      };
      musicians?: Array<{
        __typename?: 'Musician';
        name?: string | null;
        bands?: Array<string> | null;
        musicianImage?: string | null;
      }> | null;
    }> | null;
  }>;
};

export type FindBrandModelsQueryVariables = Exact<{
  brandId: Scalars['ID']['input'];
  sortBy: SortBy;
}>;

export type FindBrandModelsQuery = {
  __typename?: 'Query';
  findBrandModels?: Array<{
    __typename?: 'Model';
    id: string;
    name?: string | null;
    description?: string | null;
    price?: number | null;
    type?: string | null;
    image?: string | null;
    specs: {
      __typename?: 'Specs';
      bodyWood?: string | null;
      bridge?: string | null;
      fingerboardWood?: string | null;
      neckWood?: string | null;
      pickups?: string | null;
      scaleLength?: string | null;
      tuners?: string | null;
    };
    musicians?: Array<{
      __typename?: 'Musician';
      name?: string | null;
      bands?: Array<string> | null;
      musicianImage?: string | null;
    }> | null;
  } | null> | null;
};

export type FindUniqueBrandQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type FindUniqueBrandQuery = {
  __typename?: 'Query';
  findUniqueBrand?: {
    __typename?: 'Brand';
    id: string;
    name?: string | null;
    image?: string | null;
    origin?: string | null;
    categories?: Array<string> | null;
  } | null;
};

export type FindUniqueModelQueryVariables = Exact<{
  brandId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
}>;

export type FindUniqueModelQuery = {
  __typename?: 'Query';
  findUniqueModel?: {
    __typename?: 'Model';
    id: string;
    name?: string | null;
    price?: number | null;
    type?: string | null;
    description?: string | null;
    image?: string | null;
    musicians?: Array<{
      __typename?: 'Musician';
      name?: string | null;
      bands?: Array<string> | null;
      musicianImage?: string | null;
    }> | null;
    specs: {
      __typename?: 'Specs';
      bodyWood?: string | null;
      bridge?: string | null;
      fingerboardWood?: string | null;
      neckWood?: string | null;
      pickups?: string | null;
      scaleLength?: string | null;
      tuners?: string | null;
    };
  } | null;
};

export const FindAllBrandsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findAllBrands' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findAllBrands' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'origin' } },
                { kind: 'Field', name: { kind: 'Name', value: 'categories' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'models' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'specs' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'bodyWood' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'bridge' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fingerboardWood' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'neckWood' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'pickups' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'scaleLength' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tuners' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'musicians' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'bands' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'musicianImage' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindAllBrandsQuery, FindAllBrandsQueryVariables>;
export const FindBrandModelsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findBrandModels' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'brandId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sortBy' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'sortBy' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findBrandModels' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'brandId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sortBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sortBy' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'specs' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bodyWood' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bridge' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fingerboardWood' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'neckWood' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickups' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scaleLength' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tuners' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'musicians' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'bands' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'musicianImage' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindBrandModelsQuery,
  FindBrandModelsQueryVariables
>;
export const FindUniqueBrandDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindUniqueBrand' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findUniqueBrand' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'origin' } },
                { kind: 'Field', name: { kind: 'Name', value: 'categories' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindUniqueBrandQuery,
  FindUniqueBrandQueryVariables
>;
export const FindUniqueModelDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindUniqueModel' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'brandId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'modelId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findUniqueModel' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'brandId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'brandId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'modelId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'modelId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'musicians' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'bands' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'musicianImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'specs' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bodyWood' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bridge' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fingerboardWood' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'neckWood' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pickups' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scaleLength' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tuners' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindUniqueModelQuery,
  FindUniqueModelQueryVariables
>;
