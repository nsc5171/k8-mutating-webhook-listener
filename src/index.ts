import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { AdmissionReviewRequest, AdmissionReviewResponse } from './k8/interfaces';

const app = new Koa();
const port = 8080;

app.use(bodyParser());


app.use(async (ctx) => {
  if (ctx.path === '/mutate' && ctx.method === 'POST') {
    const admissionRequest: AdmissionReviewRequest = ctx.body;

    // Extract relevant information from admissionRequest

    // Perform mutation logic here

    // Create the AdmissionReviewResponse with the mutated object

    const admissionResponse: AdmissionReviewResponse = {
      "apiVersion": "admission.k8s.io/v1",
      "kind": "AdmissionReview",
      "response": {
        "uid": "<value from request.uid>",
        "allowed": false,
        "status": {
          "code": 403,
          "message": "You cannot do this because it is Tuesday and your name starts with A"
        }
      }
    };

    ctx.body = admissionResponse;
    ctx.status = 200;
  } else {
    ctx.status = 404;
    ctx.body = 'Not found';
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
