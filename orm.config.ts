import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgresa40*',
  database: 'videos',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
