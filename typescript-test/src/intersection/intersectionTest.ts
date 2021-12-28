interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
  name: "hyuk",
  birth: new Date("1999/09/09"),
};
