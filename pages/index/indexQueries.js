import { gql } from 'apollo-boost';

export const INDEX_QUERY = gql`
{
  categories {
    id
    createdAt
    name
  }
  
  onSale:products(where: {onSale:true}){
    id
    name
    detail
    price
    photo {
      url
    }
  }

  products(where: {onSale: false}){
    id
    name
    detail
    price
    photo{
      url
  	}
}
}

`;