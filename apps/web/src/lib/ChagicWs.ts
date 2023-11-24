import { CHAGIC_TOKEN } from "@/constant";
import storage from "store";
import observe from 'store/plugins/observe'
import PubSub from 'pubsub-js'
import { MESSAGE } from "@/constant/pub-event";
storage.addPlugin(observe)

type ChagicWsOptions = {
  url: string;
  onUpdate: (cws: ChagicWs) => void;
}

const defaultOptions = {
  url: '',
  onUpdate: () => {}
}
export default class ChagicWs{
  public ws: WebSocket | null = null;
  public options: ChagicWsOptions = defaultOptions
  private reconnectInterval = 10 * 1000
  constructor(options: ChagicWsOptions) {
    this.options = {...defaultOptions, ...options}
    

    this.createWs()
  }

  public onOpen() {

  }

  public onError() {

  }

  public onClose() {
    setTimeout(() => {
      // this.reconnect() 
    }, this.reconnectInterval)
  }

  public onMessage(e: MessageEvent) {
    console.log(e)
    try {
      const data = JSON.parse(e.data)
      PubSub.publish(MESSAGE, data)
    } catch (error) {
      
    }
  }

  private createWs() {
    const token = storage.get(CHAGIC_TOKEN)
    this.ws = new WebSocket(this.options.url, token)
    this.ws.onopen = this.onOpen.bind(this)
    this.ws.onerror = this.onError.bind(this)
    this.ws.onclose = this.onClose.bind(this)
    this.ws.onmessage = this.onMessage.bind(this)
  }

  private reconnect() {
    this.createWs()
    this.options.onUpdate(this)
  }
}