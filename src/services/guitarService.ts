import { getApolloClient } from '@/lib/apollo-client';
import {
  FindUniqueModelDocument,
  FindUniqueModelQuery,
  Model,
} from '../generated/graphql';

const client = await getApolloClient();

export async function getModelDetails(brandId: number, modelId: string) {
  const { data } = await client.query<FindUniqueModelQuery>({
    query: FindUniqueModelDocument,
    variables: {
      brandId: brandId,
      modelId: modelId,
    },
  });

  return data.findUniqueModel as Model;
}
