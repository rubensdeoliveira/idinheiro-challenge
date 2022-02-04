export type ListEntitiesModel<EntityType> = {
  results: EntityType[]
  offset: number
  number_of_total_results: number
  number_of_page_results: number
  total_pages: number
  limit: number
}
