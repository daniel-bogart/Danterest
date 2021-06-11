export const fetchAllBoards = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/boards`,
    method: 'GET'
  })
};

export const fetchBoard = (userId, boardId) => (
  $.ajax({
    url: `/api/users/${userId}/boards/${boardId}`,
    method: 'GET'
  })
);

export const fetchPinsOnBoard = () => (
  $.ajax({
    url: '/api/pins_on_board',
    method: 'GET'
  })
)

export const createNewBoard = (board) => (
  $.ajax({
    url: `/api/users/${board.user_id}/boards`,
    method: 'POST',
    data: { board }
  })
);

export const deleteBoard = (userId, boardId) => (
  $.ajax({
    url: `/api/users/${userId}/boards/${boardId}`,
    method: 'DELETE'
  })
);

export const editBoard = (board) => (
  $.ajax({
    url: `/api/users/${board.user_id}/boards/${board.id}`,
    method: 'PATCH',
    data: { board }
  })
);