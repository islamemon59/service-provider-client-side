export const myBookedServicesPromise = email => {
    return fetch(`http://localhost:3000/bookedServices?email=${email}`)
    .then(res => res.json())
}