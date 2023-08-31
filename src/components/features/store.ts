import {create} from 'zustand';

interface FeatureStoreTypes {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
}

export const useFeatureStore = create<FeatureStoreTypes>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({inViewFeature: feature})
}))
