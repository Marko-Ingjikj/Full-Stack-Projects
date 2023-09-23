export interface Animal {
  id: string;
  name: string;
  type: string;
  age: number;
  characteristics: {};
  gender: "Male" | "Female";
  location: string;
  zookeeperId: string | null;
}
