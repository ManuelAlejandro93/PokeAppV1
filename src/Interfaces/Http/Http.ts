export interface Http {
  status:
    | 'fulfilled'
    | 'rejected'
    | 'pending'
    | 'checking-on-storage'
    | 'non-requested'
    | 'saved-on-local-storage';
  hasError?: boolean;
  errorMessage?: null | string;
}
