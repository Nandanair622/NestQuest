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

export default function Home() {
  
  return (
    <div>
      <Carousel />
    </div>
  );
}
