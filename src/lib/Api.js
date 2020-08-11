import httpStatus from 'http-status';

export default class Api {
  static internalError(request, response, responseData) {
    response = response.status(httpStatus.INTERNAL_SERVER_ERROR);

    if (typeof responseData === 'string') {
      return response.json({
        error: responseData,
      });
    }
    if (typeof responseData === 'object') {
      const messageOrError = responseData['message'] || responseData['error'];
      if (messageOrError) {
        return response.json({
          error: messageOrError,
        });
      }
    }

    return response.json(responseData);
  }

  static badRequest(request, response, responseData) {
    response.statusCode = httpStatus.BAD_REQUEST;

    if (typeof responseData === 'string') {
      return response.json({
        error: responseData,
      });
    } else {
      return response.json(responseData);
    }
  }

  static handleUncaughtException(error, request, response, next) {
    const errorMessage = error.toString();

    // Otherwise, return 500 (internal server error)
    return Api.internalError(request, response, errorMessage);
  }
}
