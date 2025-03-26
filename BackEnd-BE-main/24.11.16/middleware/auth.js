export default (req, res, next) => {
  try {
    console.log("Who you are: ", req.params.id);

    if (req.body.title === "Delphi") {
      next();
    } else {
      return res.send("Auth Error");
    }
  } catch (error) {
    console.log(error);
  }
};
