import { AxiosHttpClientGateway } from '@/core/infra/common/gateways'

export const makeAxiosHttpClientGateway = (): AxiosHttpClientGateway =>
  new AxiosHttpClientGateway()
