import { Container } from 'inversify'
import { LoggerModule, LOGGER_SYMBOLS, Logger } from '@node-ts/logger-core'
import { BusModule } from '../bus-module'
import { Mock } from 'typemoq'

export class TestContainer extends Container {

  constructor () {
    super()
    this.load(new LoggerModule())
    this.load(new BusModule())
  }

  silenceLogs (): this {
    this.rebind(LOGGER_SYMBOLS.Logger).toConstantValue(Mock.ofType<Logger>().object)
    return this
  }
}
