// When somebody gets to the wrong page, this file will check the current path
// and make recommendations for where they may have intended to go

import { distance } from "fastest-levenshtein";

const routes = [
  "/about",
  "/skylars-run",
  "/skylars-run/audience/elderly",
  "/skylars-run/audience/mental-health",
  "/skylars-run/audience/pediatrics",
  "/skylars-run/audience/sports",
  "/try-it-now",
];

export default function recommendReroute({
  currentPathname,
}: {
  currentPathname: string;
}) {
  for (const route of routes) {
    if (distance(route, currentPathname) <= 4) return route;
  }
  return null;
}
