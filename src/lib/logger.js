export default function log(src, message, ...data) {
  if (__DEV__) {
    console.log(
      `%c${src}` + `%c ${message}` + `%c ${data}`,
      'color:blue;',
      'color:red',
      'color:green',
    );
  }
}
