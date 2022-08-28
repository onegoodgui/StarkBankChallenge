class Person {
  name: string;
  cpf: string;
  constructor(name: string) {
    this.name = name;
    this.cpf = this.cpfGen();
  }

  cpfGen(): string {
    let new_cpf = "" as string;
    let i = 0;
    let firstVer = 0 as number;
    let firstVerSum = 0 as number;
    let secondVer = 0 as number;
    let secondVerSum = 0 as number;

    while (i < 9) {
      let num: number;
      num = Math.floor(Math.random() * 10);
      firstVerSum = firstVerSum + (10 - i) * num;
      if (i > 0) {
        secondVerSum = secondVerSum + (11 - i) * num;
      }
      new_cpf = new_cpf + num.toString();
      i++;
    }
    firstVerSum % 11 > 1
      ? (firstVer = 11 - (firstVerSum % 11))
      : (firstVer = 0);
    secondVerSum = secondVerSum + firstVer * 2;
    secondVerSum % 11 > 1
      ? (secondVer = 11 - (secondVerSum % 11))
      : (secondVer = 0);

    return new_cpf + firstVer.toString() + secondVer.toString();
  }
}

export { Person };
