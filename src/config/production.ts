export default {
  // 端口
  port: parseInt(process.env.PORT, 10) || 3000,
  // 是否开启swagger
  enableSwagger: true,
  // MySQL配置
  db: {
    type: 'mysql',
    host: 'localhost',
    port: 33060,
    username: 'root',
    password: 'root',
    database: 'mooc_site',
    timezone: 'UTC',
    charset: 'utf8mb4',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: true,
  },
  // Redis配置
  redis: {
    name: 'redis',
    host: '127.0.0.1',
    port: 63790,
    keyPrefix: '',
    family: 4,
    password: '',
    db: 0,
  },
};
