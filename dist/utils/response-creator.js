"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCreator = void 0;
class ResponseCreator {
    constructor(response, status, message) {
        this.response = response;
        this.status = status;
        this.message = message;
    }
    ;
    toString() {
        return JSON.stringify({
            response: this.response,
            status: this.status,
            message: this.message
        });
    }
    ;
}
exports.ResponseCreator = ResponseCreator;
;
//# sourceMappingURL=response-creator.js.map