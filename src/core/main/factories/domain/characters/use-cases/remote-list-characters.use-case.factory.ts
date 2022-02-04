import {
  makeApiUrlHelper,
  makeAxiosHttpClientGateway,
} from '@/core/main/factories/infra/common/gateways'
import { ListCharactersContract } from '@/core/domain/characters/contracts'
import { RemoteListCharactersUseCase } from '@/core/domain/characters/use-cases'
import { makeMemoryMapFilterToUrlParamsUseCase } from '@/core/main/factories/domain/common/use-cases'

export const makeRemoteListCharactersUseCase = (): ListCharactersContract =>
  new RemoteListCharactersUseCase(
    makeApiUrlHelper('/characters'),
    makeAxiosHttpClientGateway(),
    makeMemoryMapFilterToUrlParamsUseCase(),
  )
