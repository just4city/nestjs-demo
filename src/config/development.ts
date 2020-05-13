export default {
  // 端口
  port: parseInt(process.env.PORT, 10) || 3000,
  // 是否开启swagger
  enableSwagger: true,
  // MySQL配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost',
    port: 33060,
    username: 'root',
    password: 'root',
    database: 'mooc_site',
    timezone: 'UTC',
    charset: 'utf8mb4',
    entities: ['src/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  },
  // Redis配置
  REDIS_CONFIG: {
    host: '127.0.0.1',
    port: 6379,
    keyPrefix: '',
    family: 4,
    password: '',
    db: 0,
  },
};
