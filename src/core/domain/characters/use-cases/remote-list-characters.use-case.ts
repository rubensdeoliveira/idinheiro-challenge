import { ListCharactersContract } from '@/core/domain/characters/contracts'
import { HttpStatusCode } from '@/core/domain/common/constants'
import {
  HttpClientContract,
  MapFilterToUrlParamsContract,
} from '@/core/domain/common/contracts'
import { UnexpectedError } from '@/core/domain/common/errors'

export class RemoteListCharactersUseCase implements ListCharactersContract {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientContract<ListCharactersContract.Output>,
    private readonly mapFilterToUrlParamsUseCase: MapFilterToUrlParamsContract,
  ) {}

  async list(
    filter: ListCharactersContract.Input,
  ): Promise<ListCharactersContract.Output> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}${this.mapFilterToUrlParamsUseCase.map(filter)}`,
      method: 'get',
    })
    if (httpResponse.body) {
      httpResponse.body.total_pages = Math.ceil(
        httpResponse.body.number_of_total_results / httpResponse.body.limit,
      )
    }
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}
