export const myBookedServicesPromise = email => {
    return fetch(`http://localhost:3000/bookingServices?email=${email}`)
    .then(res => res.json())
}