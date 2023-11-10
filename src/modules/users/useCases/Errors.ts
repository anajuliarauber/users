/* eslint-disable max-classes-per-file */
abstract class HTTPError extends Error {
  abstract code: number;
  abstract message: string;
}

class EmailAlreadyExists extends HTTPError {
  code = 400;
  message = "Email already exists";
}

class UserNotAllowed extends HTTPError {
  code = 400;
  message = "Not allowed";
}

class UserNotFound extends HTTPError {
  code = 404;
  message = "User not found";
}

export { EmailAlreadyExists, UserNotAllowed, UserNotFound };
