"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => null;

const CurrentYear = () => {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return <>{year ?? ""}</>;
};

export default CurrentYear;
