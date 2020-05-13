export default {
  // 端口
  port: parseInt(process.env.PORT, 10) || 3306,
  // 是否开启swagger
  enableSwagger: true,
  // 数据库配置
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
};
