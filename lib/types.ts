export type Item = {
  title: string;
  quantity: number;
  color: string;
  id?: number;
  completed: boolean;
  updateTitle?: string;
  updateQuantity?: number;
  updateColor?: string;
};

export type ColorMenuTypes = {
  onChange: (color: string) => void;
  updateColorMenu?: boolean;
};
