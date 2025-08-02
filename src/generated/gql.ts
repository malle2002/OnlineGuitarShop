/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query findAllBrands {\n  findAllBrands {\n    id\n    name\n    image\n    origin\n    categories\n    models {\n      id\n      name\n      description\n      type\n      price\n      specs {\n        bodyWood\n        bridge\n        fingerboardWood\n        neckWood\n        pickups\n        scaleLength\n        tuners\n      }\n      musicians {\n        name\n        bands\n        musicianImage\n      }\n    }\n  }\n}": typeof types.FindAllBrandsDocument,
    "query findBrandModels($brandId: ID!, $sortBy: sortBy!) {\n  findBrandModels(id: $brandId, sortBy: $sortBy) {\n    id\n    name\n    description\n    price\n    type\n    image\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n  }\n}": typeof types.FindBrandModelsDocument,
    "query FindUniqueBrand($id: ID!) {\n  findUniqueBrand(id: $id) {\n    id\n    name\n    image\n    origin\n    categories\n  }\n}": typeof types.FindUniqueBrandDocument,
    "query FindUniqueModel($brandId: ID!, $modelId: ID!) {\n  findUniqueModel(brandId: $brandId, modelId: $modelId) {\n    id\n    name\n    price\n    type\n    description\n    image\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n  }\n}": typeof types.FindUniqueModelDocument,
};
const documents: Documents = {
    "query findAllBrands {\n  findAllBrands {\n    id\n    name\n    image\n    origin\n    categories\n    models {\n      id\n      name\n      description\n      type\n      price\n      specs {\n        bodyWood\n        bridge\n        fingerboardWood\n        neckWood\n        pickups\n        scaleLength\n        tuners\n      }\n      musicians {\n        name\n        bands\n        musicianImage\n      }\n    }\n  }\n}": types.FindAllBrandsDocument,
    "query findBrandModels($brandId: ID!, $sortBy: sortBy!) {\n  findBrandModels(id: $brandId, sortBy: $sortBy) {\n    id\n    name\n    description\n    price\n    type\n    image\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n  }\n}": types.FindBrandModelsDocument,
    "query FindUniqueBrand($id: ID!) {\n  findUniqueBrand(id: $id) {\n    id\n    name\n    image\n    origin\n    categories\n  }\n}": types.FindUniqueBrandDocument,
    "query FindUniqueModel($brandId: ID!, $modelId: ID!) {\n  findUniqueModel(brandId: $brandId, modelId: $modelId) {\n    id\n    name\n    price\n    type\n    description\n    image\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n  }\n}": types.FindUniqueModelDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query findAllBrands {\n  findAllBrands {\n    id\n    name\n    image\n    origin\n    categories\n    models {\n      id\n      name\n      description\n      type\n      price\n      specs {\n        bodyWood\n        bridge\n        fingerboardWood\n        neckWood\n        pickups\n        scaleLength\n        tuners\n      }\n      musicians {\n        name\n        bands\n        musicianImage\n      }\n    }\n  }\n}"): (typeof documents)["query findAllBrands {\n  findAllBrands {\n    id\n    name\n    image\n    origin\n    categories\n    models {\n      id\n      name\n      description\n      type\n      price\n      specs {\n        bodyWood\n        bridge\n        fingerboardWood\n        neckWood\n        pickups\n        scaleLength\n        tuners\n      }\n      musicians {\n        name\n        bands\n        musicianImage\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query findBrandModels($brandId: ID!, $sortBy: sortBy!) {\n  findBrandModels(id: $brandId, sortBy: $sortBy) {\n    id\n    name\n    description\n    price\n    type\n    image\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n  }\n}"): (typeof documents)["query findBrandModels($brandId: ID!, $sortBy: sortBy!) {\n  findBrandModels(id: $brandId, sortBy: $sortBy) {\n    id\n    name\n    description\n    price\n    type\n    image\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindUniqueBrand($id: ID!) {\n  findUniqueBrand(id: $id) {\n    id\n    name\n    image\n    origin\n    categories\n  }\n}"): (typeof documents)["query FindUniqueBrand($id: ID!) {\n  findUniqueBrand(id: $id) {\n    id\n    name\n    image\n    origin\n    categories\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindUniqueModel($brandId: ID!, $modelId: ID!) {\n  findUniqueModel(brandId: $brandId, modelId: $modelId) {\n    id\n    name\n    price\n    type\n    description\n    image\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n  }\n}"): (typeof documents)["query FindUniqueModel($brandId: ID!, $modelId: ID!) {\n  findUniqueModel(brandId: $brandId, modelId: $modelId) {\n    id\n    name\n    price\n    type\n    description\n    image\n    musicians {\n      name\n      bands\n      musicianImage\n    }\n    specs {\n      bodyWood\n      bridge\n      fingerboardWood\n      neckWood\n      pickups\n      scaleLength\n      tuners\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;