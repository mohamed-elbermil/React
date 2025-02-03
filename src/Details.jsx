import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();
  const listing =
    state?.listing; /* Vérifie que listing n'est pas null et existe */
  if (!listing) {
    return <div>No listing details available</div>;
  }

  return (
    <div className="listing-details">
      <img
        src={listing.image}
        alt={listing.title}
        className="listing-detail-image"
      />
      <div className="listing-detail-info"></div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p className="price">{listing.price}</p>
    </div>
  );
}
export default Details;
