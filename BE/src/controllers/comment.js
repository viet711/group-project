import Comment from "../models/comment";
import Product from "../models/product";

// Tạo bình luận mới
export const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    if (!comment) {
      return res.json({
        message: "Thêm bình luận không thành công! ",
      });
    }
    //tính trung bình
    const product = await Product.findById(req.body.productId);
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm!",
      });
    }
    product.totalComments += 1;
    product.rating =
      Math.round(
        ((product.rating * (product.totalComments - 1) + comment.rating) /
          product.totalComments) *
          2
      ) / 2;

    await product.save(); // Lưu cập nhật vào model Product

    res.status(201).json({
      message: "Thêm bình luận thành công ",
      comment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Lấy danh sách bình luận
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: "desc" });
    if (!comments) {
      return res.json({
        message: "Không có bình luận nào !",
      });
    }
    res.json({
      message: "Lấy danh sách bình luận thành công !",
      comments,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//  xóa bình luận
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({
      _id: req.params.commentId,
      userId: req.params.userId,
      productId: req.params.productId,
    });

    if (!comment) {
      return res.json({
        message: "Xóa bình luận không thành công !",
      });
    }
    // Cập nhật totalComments và rating trong đối tượng product
    const product = await Product.findById(req.params.productId);
    product.totalComments -= 1;

    if (product.totalComments === 0) {
      product.rating = 0;
    } else {
      product.rating =
        (product.rating * (product.totalComments + 1) - comment.rating) /
        product.totalComments;
      product.rating = Math.round(product.rating * 2) / 2; // Làm tròn rating
    }
    await product.save();

    res.json({
      message: "Xóa bình luận thành công !",
      comment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// sửa bình luận
export const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      {
        _id: req.params.commentId,
        userId: req.params.userId,
        productId: req.params.productId,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!comment) {
      return res.json({
        message: "Sửa bình luận không thành công !",
      });
    }

    res.json({
      message: "Sửa bình luận thành công !",
      comment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// lấy 1 bình luận
export const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.json({
        message: "Lấy bình luận không thành công !",
      });
    }
    return res.json({
      message: "Lấy 1 bình luận thành công !",
      comment,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
