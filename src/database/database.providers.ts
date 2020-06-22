import { createConnection } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<any> =>
      await createConnection({
        type: 'mysql',
        host: '0.0.0.0',
        port: 13310,
        username: 'docker',
        password: 'docker',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
]
