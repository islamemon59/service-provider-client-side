export const myServiceToDoPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/service-to-do?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
