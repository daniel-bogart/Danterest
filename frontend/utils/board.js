// const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

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


export const createNewBoard = (board, userId) => (
  $.ajax({
    url: `/api/users/${userId}/boards`,
    method: 'POST',
    data: board 
  })
);

export const deleteBoard = (userId, boardId) => (
  $.ajax({
    url: `/api/users/${userId}/boards/${boardId}`,
    method: 'DELETE'
  })
);

export const editBoard = (board, userId) => (
  $.ajax({
    url: `/api/users/${userId}/boards/${board.id}`,
    method: 'PATCH',
    data: {board}
  })
);