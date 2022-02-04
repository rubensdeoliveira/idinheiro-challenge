import { MapFilterToUrlParamsContract } from '@/core/domain/common/contracts'

export class MemoryMapFilterToUrlParamsUseCase
  implements MapFilterToUrlParamsContract
{
  map(filter: MapFilterToUrlParamsContract.Input): string {
    let urlParams = ''
    if (filter.results_per_page > 0 && filter.page > 0) {
      const page = (filter.page - 1) * filter.results_per_page
      urlParams = urlParams.concat(`&limit=${filter.results_per_page}`)
      urlParams = urlParams.concat(`&offset=${page}`)
      urlParams = urlParams.concat(`&filter=name:${filter.search ?? ''}`)
    }
    return urlParams
  }
}
