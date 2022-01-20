// node_modules
import dotenv from 'dotenv';

dotenv.config();

const EnvVars = (): Record<string, string | undefined> => {
  const toCamelCase = (str: string) => {
    return str.toLowerCase().replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    });
  };

  let envVars: Record<string, string | undefined> = {};

  Object.keys(process.env).forEach((value) => {
    envVars[toCamelCase(value)] = process.env[value];
  });

  return envVars;
};

export default EnvVars;
