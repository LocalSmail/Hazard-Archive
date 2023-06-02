export {};

/* Anti-crash */
process.on('unhandledRejection', (err) => {
  console.log(err);
});
process.on('uncaughtException', (err, origin) => {
  console.log(err.message, origin);
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err?.stack, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log(type, promise, reason);
});
