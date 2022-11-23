import dotenv from 'dotenv';

dotenv.config();

export const config = {
  host: {
    port: parseInt(required('HOST_PORT', 8000)),
  },
};

function required(
  key: string,
  defaultValue: number | undefined = undefined
): any {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key(${key}) is undefiend`);
  }
  return value;
}
