import { CurrentOpeningState } from "./currentOpeningState";
import { Place } from "./place";

export interface CurrentPlace {
    place: Place;
    currentOpeningState: CurrentOpeningState;
}