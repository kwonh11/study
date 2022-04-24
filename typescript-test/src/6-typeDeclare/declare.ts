interface People {
  name: string;
}
const peopleNames = ["alice", "bob", "jan"];
const peopleList = peopleNames.map((name) => ({ name } as People));
