import { gql } from 'apollo-boost';
import { PRODUCT_FRAGMENT } from './fragments';

export const defaults = {
    cart: []
}

export const resolvers = {
    Mutation: {
        toggleProduct: ( _, variables, {cache, getCacheKey}) => {
            const id = getCacheKey({__typename: "Product", id: variable.id});
            const fragment = gql`
             ${PRODUCT_FRAGMENT}
            `;
            const product = cache.readFragement({fragment:fragment, id});
            
        } 
    }
};