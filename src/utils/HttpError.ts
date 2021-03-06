export default class HttpError extends Error {
  status: number;

  constructor(status = 500, message = 'Internal Server Error') {
    super(message);

    this.status = status;
    this.message = message;
  }
}
