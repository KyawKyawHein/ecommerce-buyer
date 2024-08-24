import { ICity,IRegion } from "@/types/location.types";
import { create } from "zustand";

interface ILocation {
    region : IRegion | null;
    city : ICity | null;
    citiesByRegion : ICity[];
}

interface ILocationStore extends ILocation{
    setRegion : (region:IRegion|null)=>void;
    setCity : (city:ICity|null)=>void;
    setCitiesByRegion : (citiesByRegion:ICity[])=> void;
}

export const useLocationStore = create<ILocationStore>((set)=>({
    region : null,
    city : null,
    citiesByRegion : [],
    setRegion : (region:IRegion|null)=>set({region}),
    setCity : (city:ICity|null)=>set({city}),
    setCitiesByRegion : (citiesByRegion: ICity[])=>set({citiesByRegion})
}))