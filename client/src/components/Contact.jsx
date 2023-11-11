import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <div className="flex flex-col gap-2">
      <p>
        Contact <span className="font-semibold">{landlord.username}</span> for{" "}
        <span className="font-semibold">{listing.name.toLowerCase()}</span>
      </p>
      <textarea
        name="message"
        id="message"
        rows="2"
        value={message}
        placeholder="Enter your message here..."
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border rounded-lg p-3"
      ></textarea>
      <Link
        to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
        className="bg-slate-700 text-white text-center rounded-lg uppercase hover:opacity-95 p-3"
      >
        Send Message
      </Link>
    </div>
  );
}
