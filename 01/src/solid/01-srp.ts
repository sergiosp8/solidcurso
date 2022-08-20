(() => {
  interface Product {
      id: number;
      name: string;
  }

  class ProductService {
    getProduct (id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' })
    }

    saveProduct (product: Product) {
      console.log('Guardando en base de datos', product)
    }
  }
  class Mailer {
    private masterEmail : string = 'sergiosp8@gmail.com'
    sendMail (enailList: string[], template: 'to-clients' | 'to-admin') {
      console.log('Enviado correos a los clientes')
    }
  }
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService
    private mailer: Mailer

    constructor (productService: ProductService, mailer: Mailer) {
      this.productService = productService
      this.mailer = mailer
    }

    loadProduct (id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id)
    }

    saveProduct (product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct(product)
    }

    notifyClients (emailList: string[]) {
      // Realiza una petición para enviar un correo a la lista de correos
      this.mailer.sendMail(emailList, 'to-clients')
    }
  }

  class CartBloc {
    onAddToCart (productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId)
    }
  }

  const mailer = new Mailer()
  const productService = new ProductService()
  const productBloc = new ProductBloc(productService, mailer)
  const cartBloc = new CartBloc()

  productBloc.loadProduct(10)
  productBloc.saveProduct({ id: 10, name: 'OLED TV' })
  productBloc.notifyClients(['sergh@gmail.com'])
  cartBloc.onAddToCart(10)
})()
