export interface AdmissionReviewRequest {
    apiVersion: string;
    kind: string;
    request: AdmissionRequest;
}

export interface AdmissionReviewResponse {
    apiVersion: string;
    kind: string;
    response: AdmissionResponse;
}

export interface AdmissionRequest {
    uid: string;
    kind: AdmissionRequestKind;
    object: object; // Replace with your specific object type
}

export interface AdmissionRequestKind {
    group: string;
    version: string;
    kind: string;
}

export interface AdmissionResponse {
    uid: string;
    allowed: boolean;
    patch?: string;
    patchType?: string;
    status?: AdmissionResponseStatus;
}

export interface AdmissionResponseStatus {
    code: number;
    message: string;
}
