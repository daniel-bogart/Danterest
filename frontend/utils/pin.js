const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

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

export const createPin = (pin) => {
  debugger
  return $.ajax({
    url: `/api/pins`,
    method: 'POST',
    data: pin,
    contentType: false,
    processData: false,
    // headers: {
    //   "X-CSRF-Token": csrfToken,
    //   "Content-Type": "application/json",
    // },
  })
}

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
    method: 'DELETE',
    // headers: {
    //   "X-CSRF-Token": csrfToken,
    //   "Content-Type": "application/json",
    // },
  })
);

export const savePin = (pin_on_board) => (
  $.ajax({
    url: `/api/pins_on_boards`,
    method: 'POST',
    data: { 'pin_on_board': pin_on_board }
  })
)

