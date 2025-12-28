const asyncHandler = (requestHandler) => {
  (res, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(er));
  };
};

export { asyncHandler };

// const asyncHandler = (fun) => async (req, res, next) => {
//   try {
//     await fun(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
