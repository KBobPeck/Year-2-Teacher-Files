export function Autobind(_: any, _2: any, desc: PropertyDescriptor) {
  const originalMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    get() {
      return originalMethod.bind(this);
    },
  };
  return newMethod;
}
