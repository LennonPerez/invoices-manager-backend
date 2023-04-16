"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCatchError(error) {
    if (error instanceof Error) {
        return error.message;
    }
    else {
        return "Unkown error";
    }
}
exports.default = getCatchError;
//# sourceMappingURL=getCatchError.js.map