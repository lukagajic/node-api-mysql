module.exports = class ErrorMessage {
    constructor(successful, message) {
        this.successful = false;
        this.message = '';

        if (typeof successful === 'boolean') {
            this.successful = successful;
        }

        if (typeof message === 'string') {
            this.message = message;
        }
    }
}