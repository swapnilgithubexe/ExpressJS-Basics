const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  users.push({ ...user, id: users.length + 1 });
  return true;
};

export const authenticateUser = (reqUser) => {
  let isAuth = false;
  users.forEach((user) => {
    if (user.email === reqUser.email && user.password === reqUser.password) {
      isAuth = true;
    }
  });
  return isAuth;
};
