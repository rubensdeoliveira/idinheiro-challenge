import { GetCharacterContract } from '@/core/domain/characters/contracts'
import { HttpStatusCode } from '@/core/domain/common/constants'
import { HttpClientContract } from '@/core/domain/common/contracts'
import { ListEntitiesModel } from '@/core/domain/common/entities'
import { CharacterModel } from '@/core/domain/characters/entities'
import { UnexpectedError } from '@/core/domain/common/errors'

export class RemoteGetCharacterUseCase implements GetCharacterContract {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClientContract<
      ListEntitiesModel<CharacterModel>
    >,
  ) {}

  async get(
    id: GetCharacterContract.Input,
  ): Promise<GetCharacterContract.Output> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}&filter=id:${id}`,
      method: 'get',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body?.results[0]
      default:
        throw new UnexpectedError()
    }
  }
}
