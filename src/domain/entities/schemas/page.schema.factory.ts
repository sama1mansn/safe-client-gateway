import { Schema, SchemaObject } from 'ajv';

export function buildPageSchema(
  keyRef: string,
  itemSchema: SchemaObject,
): Schema {
  return <SchemaObject>{
    $id: keyRef,
    type: 'object',
    properties: {
      count: { type: 'number' },
      next: { type: 'string', nullable: true },
      previous: { type: 'string', nullable: true },
      results: { type: 'array', items: { $ref: itemSchema.$id } },
    },
  };
}
