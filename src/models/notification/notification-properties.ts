export type NotificationProperties = {
  message: string;
  show: boolean;
  variant: 'success' | 'error' | 'warning' | 'info';
  closeAfter?: number;
};
