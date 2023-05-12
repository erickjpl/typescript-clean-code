export default interface Logger {
  debug (message: string): void;
  error (message: string | Error): void;
  warn (message: string): void;
  info (message: string): void;
}
