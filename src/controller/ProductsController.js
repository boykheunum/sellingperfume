const product = require('../model/ProductsModel');
const categories = require('../model/CategoriesModel');
const CONTANTS = require('../database/contains');

exports.GetProduct = (req, res) => {
  product.GetAllProducts((err, data) => {
    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.render('template/admin/dssanpham', { layout: 'mainadmin', data: data });
    }
  });
}

exports.GetProductById = (req, res) => {
  let id = req.params.id
  product.SearchProductById(id, (err, data) => {
    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
    }
  });
}

exports.CreateProduct = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "data is null"
    });
  }
  const products = new product({
    category_id: req.body.category_id,
    product_name: req.body.product_name,
    price: req.body.price,
    importprice: req.body.importprice,
    image: req.file.filename,
    description: req.body.description,
    quantity: req.body.quantity,
    date: req.body.date,
  });
  product.AddProduct(products, (error, data) => {
    if (error) {
      res.status(500).send({
        message: error.message || "Không thể thêm mới"
      });
    }
    else {
      res.send(data);
    }
  });
}

exports.UpdateProduct = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "data is null"
    });
  }
  const products = new product({
    category_id: req.body.category_id,
    product_name: req.body.product_name,
    price: req.body.price,
    importprice: req.body.importprice,
    image: req.file.filename,
    description: req.body.description,
    quantity: req.body.quantity,
    date: req.body.date,
  });
  product.UpdateProduct(products, req.params.id, (error, data) => {
    if (error) {
      res.status(500).send({
        message: error.message || "Không thể thêm mới"
      });
    }
    else {
      res.send(data);
    }
  });

}
exports.DeleteProduct = (req, res) => {
  product.DeleteProducts(req.params.id, (err) => {
    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.send({ message: 'Xóa thành công sản phẩm' });
    }
  });
}

exports.getId = (req, res) => {
  let id = req.params.id;
  categories.GetAllCategory((err, data) => {

    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.render('template/admin/suasp', { layout: 'mainadmin', data: id, listCategory: data });
    }
  });

}

exports.LayoutCreateProduct = (req, res) => {
  categories.GetAllCategory((err, data) => {

    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.render('template/admin/themsanpham', { layout: 'mainadmin', listCategory: data });
    }
  });

}

exports.HomePage = (req, res) => {
  product.GetAllProducts((err, data) => {
    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {

      res.render('template/user/sanpham', { layout: 'main', data: data });
    }
  });

}

exports.chitietsanpham = (req, res) => {
  let id = req.params.id
  product.SearchProductById(id, (err, data) => {
    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.render('template/user/ctsp', { layout: 'main', data: data });
    }
  });

}

exports.timkiemsanphamtheoten = (req, res) => {
  let name = req.body.product_name;
  product.SearchProductByNameRandom(name, (err, data) => {
    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.render('template/user/timkiem', { layout: 'main', data: data });
    }
  });

}
exports.LayoutCart = (req, res) => {
  res.render('template/user/giohang', { layout: 'main' });
}

exports.getclassifyproduct = (req, res) => {

  product.ClassifyProduct(id, (err, data) => {

    if (err) {
      res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
        message: err.message || "Đã xảy ra một số lỗi",
      });
    } else {
      res.render('template/user/ploaisp', { layout: 'main', data: data });
    }
  });

}