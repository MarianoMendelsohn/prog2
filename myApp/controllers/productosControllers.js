const data = require('../data/data');

const productosControllers = {

    index:function(req, res ) {
        return res.render('index',{
          lista: data.productos
        });
      },
    detalleProducto: function (req, res){
      return res.render('product',{
        lista: data.productos[0]
      })
    }
   
}


module.exports = productosControllers