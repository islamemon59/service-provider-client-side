const ShowMyBookedServices = ({ service }) => {
  const {
    name,
    image,
    date,
    price,
    serviceStatus,
    userName,
    userEmail,
    providerName,
    providerEmail,
  } = service;

  return (
    <tr>
      <td>
        <img src={image} alt={name} className="w-16 h-14 object-cover rounded" />
      </td>
      <td className="whitespace-nowrap">{name}</td>
      <td className="whitespace-nowrap">{date}</td>
      <td className="whitespace-nowrap">৳{price}</td>
      <td className="whitespace-nowrap">
        <span className="badge badge-warning text-xs capitalize">{serviceStatus}</span>
      </td>
      <td className="whitespace-nowrap">
        <div className="truncate max-w-[140px]">
          <p className="font-semibold">{userName}</p>
          <p className="opacity-70">{userEmail}</p>
        </div>
      </td>
      <td className="whitespace-nowrap">
        <div className="truncate max-w-[140px]">
          <p className="font-semibold">{providerName}</p>
          <p className="opacity-70">{providerEmail}</p>
        </div>
      </td>
    </tr>
  );
};

export default ShowMyBookedServices;
