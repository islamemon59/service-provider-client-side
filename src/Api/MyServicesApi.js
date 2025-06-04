export const myServicesPromise = (email) => {
    return fetch(`http://localhost:3000/myServices?email=${email}`)
    .then(res => res.json())
}