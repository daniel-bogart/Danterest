export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  })
);

export const updateUser = (user, userId) => {
  console.log("user api util", user)
  console.log("userId", userId)
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'PATCH',
    data: { user }
  })
};