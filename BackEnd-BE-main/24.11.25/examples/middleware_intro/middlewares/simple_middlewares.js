export const allrequests_middleware = (req, res, next) => {
  console.log(
    `this middleware is triggered on any request method on any Route.
      REQUEST TYPE: ${req.method}`
  );
};

export const specificRoute_middleware = (req, res, next) => {
  console.log(
    `this middleware is triggered on any request method on a specific Route.
        REQUEST TYPE: ${req.method}`
  );
};
export const getOnly_middleware = (req, res, next) => {
  console.log(
    `this middleware is triggered on a GET request method on a specific Route.
        REQUEST TYPE: ${req.method}`
  );
};

export const getSingleUser_middleware = (req, res, next) => {
  console.log(`I am getting a single user based on ID.
       ID :  ${req.params.id}`);
};
export const addSingleUser_middleware = (req, res, next) => {
  console.log(`I am saving a single user in the database.`);
};

export const first_middleware = (req, res, next) => {
  console.log('the first middleware was called');
  next();
};
export const second_middleware = (req, res, next) => {
  console.log('the second middleware was called');
  next();
};
export const last_middleware = (req, res, next) => {
  console.log('the last middleware was called');
  next();
};
