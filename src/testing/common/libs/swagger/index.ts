import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiParamOptions,
  ApiQuery,
  ApiQueryOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import { BasePaginationResponseDTO, BaseResponseDTO } from '../base/rest-response.dto';

export const BEARER_TOKEN_NAME = 'bearer-token';

export const EXAMPLE_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export class SwaggerDecoratorOptions<R, B> {
  name: string;
  isPagination? = false;
  dataIsArray? = false;
  isAuth? = false;
  isMultiPart? = false;
  query?: ApiQueryOptions[] | ApiQueryOptions;
  response?: Type<R>;
  body?: Type<B>;
  params?: ApiParamOptions[] = [];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export function SwaggerHelperDecorator<R, B>(options: SwaggerDecoratorOptions<R, B>) {
  const decorators: (ClassDecorator | PropertyDecorator | MethodDecorator)[] = [];

  if (options.isAuth) {
    decorators.push(ApiBearerAuth(BEARER_TOKEN_NAME));
  }

  if (options.query) {
    const querys = Array.isArray(options.query) ? options.query : [options.query];

    decorators.push(...querys.map((q) => ApiQuery(q)));
  }

  if (options.body) {
    decorators.push(ApiBody({ type: options.body }));
  }

  if (options.params) {
    decorators.push(...options.params.map((param) => ApiParam(param)));
  }

  if (options.isMultiPart) {
    decorators.push(ApiConsumes('multipart/form-data'));
  }

  if (options.response) {
    decorators.push(
      ApiExtraModels(
        options.isPagination ? BasePaginationResponseDTO : BaseResponseDTO,
        options.response,
      ),
    );
  }

  return applyDecorators(
    ...decorators,
    ApiOperation({
      summary: options.name,
    }),
    ApiOkResponse({
      schema: {
        allOf: [
          {
            $ref: getSchemaPath(options.isPagination ? BasePaginationResponseDTO : BaseResponseDTO),
          },
          {
            properties: {
              data:
                typeof options.response === 'undefined'
                  ? {
                      nullable: true,
                    }
                  : options.dataIsArray || options.isPagination
                    ? {
                        type: 'array',
                        items: { $ref: getSchemaPath(options.response) },
                      }
                    : { $ref: getSchemaPath(options.response) },
            },
          },
        ],
      },
    }),
  );
}
