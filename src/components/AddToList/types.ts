import { TListItem } from "../../redux/user/types";

export type TAddToListContProps = {
  handleAddToList: () => void;
  isTracked?: TListItem;
};
