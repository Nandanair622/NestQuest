import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "../components/Carousel";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import PropListing from "../components/PropListing";

export default function Home() {
  //latest offers
  const [offerListings, setOfferListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  //rent offers
  const [rentListings, setRentListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("type", "==", "rent"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRentListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  //sale offers
  const [saleListings, setSaleListings] = useState(null);
  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, "listings");
        // create the query
        const q = query(
          listingsRef,
          where("type", "==", "sale"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSaleListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);
  return (
    <div>
      <Carousel />
      {/* recent offers */}
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-3xl text-center mt-6 font-bold">
              Latest offers
            </h2>
            <br />
            <ul className="px-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {offerListings.map((listing) => (
                <PropListing
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
            <Link to="/offers">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more offers
              </p>
            </Link>
          </div>
        )}

        {/* rent offers */}

        {rentListings && rentListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-3xl text-center mt-6 font-bold">
              Places for Rent
            </h2>
            <br />
            <ul className=" px-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {rentListings.map((listing) => (
                <PropListing
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
            <Link to="/category/rent">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for rent
              </p>
            </Link>
          </div>
        )}
        {/* sale offers */}

        {saleListings && saleListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-3xl text-center mt-6 font-bold">
              Places for Sale
            </h2>
            <br />
            <ul className=" px-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {saleListings.map((listing) => (
                <PropListing
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </ul>
            <Link to="/category/sale">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                Show more places for sale
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
