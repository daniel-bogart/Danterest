export const fetchUser = userId => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    url: 'api/users',
    method: 'GET'
  })
);

export const updateUser = (user, userId) => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'PATCH',
    data: { user }
  })
};