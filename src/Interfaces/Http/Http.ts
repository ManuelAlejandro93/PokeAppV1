export interface Http {
  status: 'fulfilled' | 'rejected' | 'pending' | 'checking-on-storage';
  hasError: boolean;
  errorMessage: boolean;
}
