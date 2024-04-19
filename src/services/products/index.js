import http from "../../http-common"

class ProductsService {
    getAllProducts() {
        return http.get('/products')
            .then((products) => products.data);
    }
    getByCategoryProducts(category){
        return http.get(`/products/category/${category}`)
            .then((products)=> products.data)
    }
    getAllCategories(){
        return http.get('/products/categories')
            .then((categories)=> categories.data)
    }
}

export default new ProductsService();
