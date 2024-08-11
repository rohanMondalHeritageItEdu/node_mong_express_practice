/*const asyncHandler = () =>{} //normal function
const asyncHandler = (function) => {() =>{}} //passing function as a parameter to a function
const asyncHandler = (function) => () =>{} //passing function as a parameter to a function
//NOTE: above 2 are same
//now make it the passed function as async 
const asyncHandler = (function) => async () =>{} //passing function as a parameter to a function
*/

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req,res,next);
//   } catch (error) {res.status(err.code || 500).json({
//     success : false,
//     message : err.message
//   })}
// };

//the above can also be written as promise

const asyncHandler = (
  requestHandler /* just a variable which is a funcrion*/
) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
