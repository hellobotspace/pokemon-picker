export class JsonResponse extends Response {
  constructor(body: Object, init: ResponseInit = {}) {
    const jsonBody = JSON.stringify(body);
    init.headers = {
      ...init.headers,
      "content-type": "application/json;charset=UTF-8",
    };
    super(jsonBody, init);
  }
}
