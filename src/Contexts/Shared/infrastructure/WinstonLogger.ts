import winston, { Logger as WinstonLoggerType } from 'winston';
import Logger from '../domain/Logger';

enum Levels {
  DEBUG = 'debug',
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info'
}

class WinstonLogger implements Logger {
  private logger: WinstonLoggerType;

  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.colorize(),
        winston.format.simple()
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG }),
        new winston.transports.File({ filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR }),
        new winston.transports.File({ filename: `logs/${Levels.WARN}.log`, level: Levels.WARN }),
        new winston.transports.File({ filename: `logs/${Levels.INFO}.log`, level: Levels.INFO })
      ]
    });
  }

  debug (message: string) {
    this.logger.debug(message);
  }

  warn (message: string) {
    this.logger.warn(message);
  }

  error (message: string | Error) {
    this.logger.error(message);
  }

  info (message: string) {
    this.logger.info(message);
  }
}
export default WinstonLogger;
