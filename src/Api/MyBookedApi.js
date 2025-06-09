export const myBookedServicesPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/bookingServices?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
