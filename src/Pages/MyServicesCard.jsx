import { Link } from "react-router"; // ← note: use react-router-dom
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const MyServicesCard = ({ service, services, setServices }) => {
  const {
    _id,
    area,
    imageUrl,
    name,
    price,
    providerImage,
    providerName,
  } = service;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://service-provider-server-iota.vercel.app/manageServices/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              setServices(services.filter((s) => s._id !== _id));
              Swal.fire("Deleted!", "Your service has been deleted.", "success");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Failed to delete service.", "error");
          });
      }
    });
  };

  return (
    <tr className="hover">
      <td>
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-16 object-cover rounded"
        />
      </td>
      <td className="font-semibold">{name}</td>
      <td>৳{price}</td>
      <td>{area}</td>
      <td>
        <div className="flex items-center gap-2">
          <img
            src={providerImage}
            alt={providerName}
            className="w-8 h-8 rounded-full"
          />
          <span>{providerName}</span>
        </div>
      </td>
      <td className="flex justify-center gap-2">
        <Link
          to={`/updateServices/${_id}`}
          className="btn btn-sm btn-primary flex items-center gap-1"
        >
          <FaEdit /> Update
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-error flex items-center gap-1"
        >
          <FaTrashAlt /> Delete
        </button>
      </td>
    </tr>
  );
};

export default MyServicesCard;
