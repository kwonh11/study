interface Person {
  name: string;
}
interface Lifespan {
  name: number;
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;
type PersonSpan2 = Person | Lifespan;
const ps: PersonSpan = {
  // name: "hyuk", // neverType = string & number;
  // name: 123,
  birth: new Date("1999/09/09"),
  death: new Date("2999/09/09"),
};
const ps2: PersonSpan2 = {
  // name: "hyuk",
  name: 123,
  birth: new Date("1999/09/09"),
  // death: new Date("2999/09/09"),
};
