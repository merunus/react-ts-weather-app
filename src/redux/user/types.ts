export interface IUserSliceState {
  list: TListItem[];
}

export type TListItem = {
  id: number;
  lat: number;
  lon: number;
};
