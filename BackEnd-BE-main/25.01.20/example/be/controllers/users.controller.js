import { User } from '../models/users.model.js';
import { createToken } from '../utils/jwt.js';



let cookieOptions = {
  secure: false,
  httpOnly: true,
  sameSite: true,
  maxAge: 3_600_000 * 48,
};


export const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    
    const newUser = await User.create({ name, email, password, role });


    const token = await createToken({ id: newUser._id, role });

    res
      .cookie('access_token', token, cookieOptions)
      .json({ msg: 'registered successfully', newUser, token });
  } catch (error) {
    next(error);
  }
};

/* ------------------- login ------------------ */
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      const err = new Error('Incorrect credentials!');
      err.status = 403;
      throw err;
    }

    // check the password
    if (user.auth(password)) {
      // create the jwt token
      const token = await createToken(
        {
          userid: user._id,
          role: user.role,
        } // payload
      );

      res
        .cookie('access_token', token, cookieOptions)
        .send({ msg: 'login successful', user, token });
    } else {
      res.json({ msg: 'email/password is incorrect', status: 403 });
    }
  } catch (error) {
    next(error);
  }
};

/* ---------------- update user --------------- */
export const updateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findById(req.params.id);

    user.email = email || user.email;
    user.password = password || user.password;

    await user.save();
    res.json({ msg: 'success', updatedUser: user });
  } catch (error) {
    next(error);
  }
};
