const path = require("path");

const uploadProductImage = async (req, res) => {

    if (!req.files) {
        throw new Error('No File Added')  // or you could use your bad request error and add errors folder n stuff
    }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith('image')) {
      throw new Error('Choose an image ONLY!')
  }

  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
      throw new Error('max size 1MB')
  }

  // res.send("uploadProductImage");

  const imagePath = path.join(
    __dirname,
    "../public/uploads/",
    productImage.name
  );
  await productImage.mv(imagePath);
  //   console.log(productImage);
  res.status(200).json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
