// @flow

const RequestMiddleware = function(req: $Request, res: $Response, next: express$NextFunction) {
    next();
};

export default RequestMiddleware; 