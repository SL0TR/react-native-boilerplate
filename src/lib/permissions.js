import { PermissionsAndroid } from 'react-native';

export const checkPermission = async (
  title = 'Contacts',
  message = 'This app would like is asking for permission',
  permission = 'READ_CONTACTS',
) => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS[permission],
    {
      title,
      message,
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );
  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    return false;
  }

  return true;
};
