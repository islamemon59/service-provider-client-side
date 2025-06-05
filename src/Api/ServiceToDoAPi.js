export const myServiceToDoPromise = email => {
    return fetch(`http://localhost:3000/service-to-do?email=${email}`)
    .then(res => res.json())
}