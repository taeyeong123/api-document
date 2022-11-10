export type ApiType = {
  openapi: String;
  info: {
    title: String;
    version: String;
  };
  servers: Server[];
  tags: TagType[];
  paths: {
    [k: string]: PathType;
  };
  components: {
    schemas: object;
  };
};

// -----------
export type PathType = {
  [k in MethodType]: {
    operationId: string;
    parameters: ParameterType[];
    responses: {};
    summary: string;
    tags: string[];
  };
};

export type MethodType = 'post' | 'get' | 'update' | 'put' | 'delete';

export type ParameterType = {
  name: string;
  required: boolean;
  in: string;
  description: string;
  schema: SchemaType;
  style?: any;
};

export type ResponseType = {
  description: string;
  content?: ResponseContentType;
};

export type ResponseContentType = {
  [k: string]: {
    schema: {
      $ref: string;
    };
  };
};

export type SchemaType = {
  type: 'string' | 'integer' | 'array';
  format?: string;
};

// --------------

export type TagType = {
  description: string;
  name: string;
};

export type Server = {
  description: String;
  url: String;
};
