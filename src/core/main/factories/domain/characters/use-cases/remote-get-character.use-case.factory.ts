import {
  makeApiUrlHelper,
  makeAxiosHttpClientGateway,
} from '@/core/main/factories/infra/common/gateways'
import { GetCharacterContract } from '@/core/domain/characters/contracts'
import { RemoteGetCharacterUseCase } from '@/core/domain/characters/use-cases'

export const makeRemoteGetCharacterUseCase = (): GetCharacterContract =>
  new RemoteGetCharacterUseCase(
    makeApiUrlHelper('/characters'),
    makeAxiosHttpClientGateway(),
  )
