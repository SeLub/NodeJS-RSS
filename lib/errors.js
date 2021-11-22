class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "\n    ValidationError:";
  }
};

const pushError = (message) => {throw new ValidationError(message); process.stderr.write(message); process.exit(1);}

const exitError = (error) => {process.stderr.write(error.message); process.exit(1);}

module.exports = { ValidationError, pushError, exitError }