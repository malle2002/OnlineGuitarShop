import { getApolloClient } from '@/lib/apollo-client';
import {
  Brand,
  FindAllBrandsDocument,
  FindAllBrandsQuery,
  FindBrandModelsDocument,
  FindUniqueBrandDocument,
  FindUniqueBrandQuery,
  ModelSortField,
  SortOrder,
  SortBy,
  Model,
  FindBrandModelsQuery,
} from '../generated/graphql';

const client = await getApolloClient();

export async function findAllBrands() {
  const { data } = await client.query<FindAllBrandsQuery>({
    query: FindAllBrandsDocument,
  });

  return data.findAllBrands;
}

export async function getBrandDetails(id: number) {
  const { data } = await client.query<FindUniqueBrandQuery>({
    query: FindUniqueBrandDocument,
    variables: {
      id,
    },
  });

  return data.findUniqueBrand as Brand;
}

export async function getBrandModels(
  id: number,
  sortField: string,
  sortOrder: string
) {
  const { data } = await client.query<FindBrandModelsQuery>({
    query: FindBrandModelsDocument,
    variables: {
      brandId: id,
      sortBy: {
        field: toModelSortField(sortField)!,
        order: toSortOrder(sortOrder)!,
      } satisfies SortBy,
    },
  });

  return data.findBrandModels as Model[];
}

function toModelSortField(field: string): ModelSortField | undefined {
  if (Object.values(ModelSortField).includes(field as ModelSortField)) {
    return field as ModelSortField;
  }
  return undefined;
}

function toSortOrder(order: string): SortOrder | undefined {
  if (Object.values(SortOrder).includes(order as SortOrder)) {
    return order as SortOrder;
  }
  return undefined;
}
