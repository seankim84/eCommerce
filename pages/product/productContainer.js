import ProductPresenter from './productPresenter';

class ProductPresenter extends React.Component {
    static async getInitialProps(props){
        const { 
            query: { id } 
        } = props;
        return { 
            id 
        }         
    }
    render(){
        return(
            <ProductPresenter />
        )
    }
}

export default withRouter(ProductContainer);
