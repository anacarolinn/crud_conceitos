// esse script é como se fosse um contrato, e os outros scripts implementam esse contrato e assim podem utilizar ele
export abstract class RegexProtocol {
  abstract execute(str: string): string;
}
