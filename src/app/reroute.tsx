// When somebody gets to the wrong page, this file will check the current path
// and make recommendations for where they may have intended to go

import { distance } from "fastest-levenshtein";
import currentPath from "./currentPath";

const routes = [
    '/about',
    '/skylars-run',
    '/try-it-now'
];

export default function recommendReroute() {
    const path = currentPath();

    for (let route of routes) {
        if (distance(route, path) <= 4) return route;
    }
    return null;
}