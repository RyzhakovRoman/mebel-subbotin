export type RequestStatusType = 'didNotLoad' | 'started' | 'success' | 'error'

export interface PaginationInterface {
    start: number;
    limit: number;
}
