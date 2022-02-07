interface AGroup {
  name: string;
  contact: string;
}
interface BGroup {
  name: string;
  address: string;
}
type GroupInfoKeys = keyof (AGroup & BGroup);
type GroupInfoKeys2 = keyof (AGroup | BGroup);
interface GroupInfoKeys3 extends AGroup, BGroup {}
