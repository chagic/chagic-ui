
type ChagicWsOptions = {
  onUpdate: (cws: ChagicWs) => void;
}

const defaultOptions = {
  onUpdate: () => {}
}
export default class ChagicWs{
  public ws: WebSocket | null = null;
  public options: ChagicWsOptions = defaultOptions
  constructor(options: ChagicWsOptions) {
  }
}