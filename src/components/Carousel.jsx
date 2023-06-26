import React from "react";
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
import { db } from "../firebase";
import Spinner from "./Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useNavigate } from "react-router";
export default function Carousel() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchListings() {
      const listingRef = collection(db, "listings");
      const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchListings();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  if (listings.length === 0) {
    return <></>;
  }
  return (
    listings && (
      <>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "progressbar" }}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 2000 }}
        >
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls[0]}) center, no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "450px",
                }}
                className="relative w-full h-[300px] overflow-hidden"
              ></div>
              <p className="text-[#10100f] absolute left-1 top-3 font-bold max-w-[90%] bg-[#f4b804] shadow-lg opacity-95 p-3 rounded-br-2xl">
                {data.name}
              </p>
              <p className="text-[#0f0f0f] absolute left-1 bottom-1 font-bold max-w-[90%] bg-[#409a40] shadow-lg opacity-95 p-3 rounded-tr-2xl">
                ₹ {data.discountedPrice ?? data.regularPrice}
                {data.type === "rent" && " / month"}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}
