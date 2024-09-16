// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  {
    id: 1,
    name: "coding ninjas",
    email: "ninja@gmail.com",
    image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
  },
];

export const updateUsers = (userObj) => {
  console.log(userObj);  // Log input for debugging

  // Find the index of the user based on ID
  const userIndex = users.findIndex((user) => user.id === parseInt(userObj.id));

  if (userIndex === -1) {
    console.error('User not found');
    return;
  }

  // Update the user at the found index
  users[userIndex] = userObj;
  return users;
};
