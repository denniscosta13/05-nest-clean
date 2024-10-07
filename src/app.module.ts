import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Additive } from './models/Additive/additive.model'
import { AdditivesModule } from './models/Additive/additive.module'

@Module({
  imports: [
    AdditivesModule,
    SequelizeModule.forRoot({
      host: 'pbi.banpar.com.br',
      port: 1521,
      username: 'banpar_leitura',
      password: 'banpar_leitura',
      database: 'BANPAR',
      dialect: 'oracle',
      dialectOptions: {
        connectString: 'pbi.banpar.com.br/qfactor',
      },
      define: {
        timestamps: false,
      },
      logging: false,
      synchronize: false,
      sync: { force: false, alter: false },
      models: [Additive],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
