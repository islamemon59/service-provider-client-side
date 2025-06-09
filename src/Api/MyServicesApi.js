export const myServicesPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/myServices?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
