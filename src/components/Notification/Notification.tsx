import React, { useEffect } from 'react';
import { CheckCircle, HelpCircle, AlertCircle, XCircle } from 'react-feather';
import { Header, Wrapper, Text, Icon, Message } from './styled';

export enum NotificationVariant {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

export type NotificationProps = {
  variant: NotificationVariant;
  message: string;
  timeout: number;
  closeHandler: () => void;
};

const Notification: React.FunctionComponent<NotificationProps> = (
  props: NotificationProps
) => {
  const { message, variant, timeout, closeHandler } = props;

  const closeNotification = (): void => {
    setTimeout(() => {
      closeHandler();
    }, timeout);
  };

  useEffect(() => {
    closeNotification();
  }, [props, closeNotification()]);

  const determineHeaderText = (
    notificationVariant: NotificationVariant
  ): string => {
    switch (notificationVariant) {
      case NotificationVariant.SUCCESS:
        return 'Sukces';
      case NotificationVariant.ERROR:
        return 'Błąd';
      case NotificationVariant.INFO:
        return 'Info';
      case NotificationVariant.WARNING:
        return 'Uwaga';
      default:
        return '';
    }
  };

  const determineIcon = (notificationVariant: NotificationVariant): any => {
    switch (notificationVariant) {
      case NotificationVariant.SUCCESS:
        return <CheckCircle size={18} />;
      case NotificationVariant.ERROR:
        return <XCircle size={18} />;
      case NotificationVariant.INFO:
        return <HelpCircle size={18} />;
      case NotificationVariant.WARNING:
        return <AlertCircle size={18} />;
      default:
        return '';
    }
  };

  return (
    <Wrapper variant={variant}>
      <Icon>{determineIcon(variant)}</Icon>
      <Text>
        <Header>{determineHeaderText(variant)}</Header>
        <Message>{message}</Message>
      </Text>
    </Wrapper>
  );
};

export default Notification;
