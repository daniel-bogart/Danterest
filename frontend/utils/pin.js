export const fetchAllPins = () => (
  $.ajax({
    url: '/api/pins',
    method: 'GET'
  })
);

export const fetchPin = (pinId) => (
  $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'GET'
  })
);

export const fetchUserPins = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/pins`,
    method: "GET"
  });
};

export const createPin = pin => (
  $.ajax({
    url: `/api/pins`,
    method: 'POST',
    data: { pin },
    contentType: false,
    processData: false
  })
)

export const updatePin = pin => (
  $.ajax({
    url: `/api/pins/${pin.id}`,
    method: 'PATCH',
    data: { pin }
  })
);

export const deletePin = pinId => (
  $.ajax({
    url: `/api/pins/${pinId}`,
    method: 'DELETE'
  })
);

export const addToBoard = (pin_on_board) => (
  $.ajax({
    url: `/api/pins_on_boards`,
    method: 'POST',
    data: { pin_on_board }
  })
)

