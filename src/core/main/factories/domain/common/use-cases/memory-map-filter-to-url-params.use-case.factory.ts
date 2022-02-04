import { MapFilterToUrlParamsContract } from '@/core/domain/common/contracts'
import { MemoryMapFilterToUrlParamsUseCase } from '@/core/domain/common/use-cases'

export const makeMemoryMapFilterToUrlParamsUseCase =
  (): MapFilterToUrlParamsContract => new MemoryMapFilterToUrlParamsUseCase()
