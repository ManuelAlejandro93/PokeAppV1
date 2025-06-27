export interface Http {
  status:
    | 'fulfilled'
    | 'rejected'
    | 'pending'
    | 'checking-on-storage'
    | 'non-requested';
  hasError?: boolean;
  errorMessage?: null | string;
}
